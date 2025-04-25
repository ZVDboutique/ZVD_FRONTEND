import {
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
  Button,
  Modal,
  TextField,
  Paper,
  Snackbar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import SimpleTable from '../../Components/SimpleTable';
import axiosInstance from '../../Utils/axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { DiamondData, DiamondRowData } from '../../Types/Diamond';

const DiamondListing = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>(
    'success'
  );
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [diamondToDelete, setDiamondToDelete] = useState<number | null>(null);
  const [diamondData, setDiamondData] = useState<DiamondData>({
    diamond_name: '',
    carat: '',
    cut: '',
    color: '',
    clarity: '',
    price: '',
    image: null,
    status: 'Available',
  });

  const queryClient = useQueryClient();

  const { data: diamonds } = useQuery({
    queryKey: ['GET_ALL_DIAMONDS'],
    queryFn: () => axiosInstance.get('/diamonds/'),
  });

  const createDiamondMutation = useMutation({
    mutationFn: (newDiamond: DiamondData) => {
      const formData = new FormData();
      Object.entries(newDiamond).forEach(([key, value]) => {
        if (value !== null) {
          formData.append(key, value);
        }
      });
      return axiosInstance.post('/diamonds/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_ALL_DIAMONDS'] });
      showAlert('Diamond created successfully!', 'success');
      handleCloseModal();
    },
    onError: () => {
      showAlert('Failed to create diamond', 'error');
    },
  });

  const updateDiamondMutation = useMutation({
    mutationFn: (diamond: DiamondData) => {
      const formData = new FormData();
      Object.entries(diamond).forEach(([key, value]) => {
        if (value !== null && key !== 'id') {
          formData.append(key, value);
        }
      });
      return axiosInstance.put(`/diamonds/${diamond.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_ALL_DIAMONDS'] });
      showAlert('Diamond updated successfully!', 'success');
      handleCloseModal();
    },
    onError: () => {
      showAlert('Failed to update diamond', 'error');
    },
  });

  const deleteDiamondMutation = useMutation({
    mutationFn: (id: number) => {
      return axiosInstance.delete(`/diamonds/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_ALL_DIAMONDS'] });
      showAlert('Diamond deleted successfully!', 'success');
    },
    onError: () => {
      showAlert('Failed to delete diamond', 'error');
    },
  });

  const handleEdit = (id: number, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    console.log('Edit clicked for id:', id);

    const apiItem = diamonds?.data?.find((diamond: any) => diamond.id === id);
    if (apiItem) {
      openEditModal(apiItem);
    } else {
      console.error('Could not find diamond with id:', id);
    }
  };

  const openEditModal = (item: DiamondRowData) => {
    setDiamondData({
      id: item.id,
      diamond_name: item.diamond_name,
      carat: item.carat,
      cut: item.cut,
      color: item.color,
      clarity: item.clarity,
      price: item.price,
      image: null,
      status: item.status,
    });
    setSelectedId(item.id);
    setIsEditing(true);
    setOpenModal(true);
  };

  const handleDelete = (id: number, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }

    setDiamondToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (diamondToDelete !== null) {
      deleteDiamondMutation.mutate(diamondToDelete);
      setDeleteDialogOpen(false);
      setDiamondToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setDiamondToDelete(null);
  };

  const handleAddNew = () => {
    setDiamondData({
      diamond_name: '',
      carat: '',
      cut: '',
      color: '',
      clarity: '',
      price: '',
      image: null,
      status: 'Available',
    });
    setIsEditing(false);
    setSelectedId(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsEditing(false);
    setSelectedId(null);
  };

  const handleSave = () => {
    if (isEditing && selectedId) {
      updateDiamondMutation.mutate({ ...diamondData, id: selectedId });
    } else {
      createDiamondMutation.mutate(diamondData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDiamondData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDiamondData((prev) => ({
        ...prev,
        image: e.target.files ? e.target.files[0] : null,
      }));
    }
  };

  const showAlert = (message: string, severity: 'success' | 'error') => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: 'image',
      headerName: 'Image',
      flex: 1,
      renderCell: (params) => (
        <Box
          component='img'
          sx={{
            height: 50,
            width: 50,
            objectFit: 'contain',
            borderRadius: 1,
          }}
          src={params.value}
          alt='Diamond'
        />
      ),
    },
    {
      field: 'diamond_name',
      headerName: 'Diamond Name',
      flex: 1,
    },
    {
      field: 'carat',
      headerName: 'Carat',
      flex: 1,
    },
    {
      field: 'cut',
      headerName: 'Cut',
      flex: 1,
    },
    {
      field: 'color',
      headerName: 'Color',
      flex: 1,
    },
    {
      field: 'clarity',
      headerName: 'Clarity',
      flex: 1,
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Action',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        console.log('Rendering cell for row:', params.row);
        return (
          <Stack direction='row' spacing={1}>
            <IconButton
              size='small'
              onClick={(event) => handleEdit(params.row.id, event)}
              sx={{ color: 'primary.main' }}
              aria-label='Edit diamond'
            >
              <EditIcon fontSize='small' />
            </IconButton>
            <IconButton
              size='small'
              onClick={(event) => handleDelete(params.row.id, event)}
              sx={{ color: 'error.main' }}
              aria-label='Delete diamond'
            >
              <DeleteIcon fontSize='small' />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  const tableData = diamonds?.data || [];

  return (
    <>
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          background: '#73C7F933',
          border: `1px #73C7F9 solid`,
        }}
      >
        <Grid container spacing={1}>
          <Grid
            size={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography fontWeight={600} fontSize={24}>
              Diamond Listings
            </Typography>
            <Button
              variant='contained'
              startIcon={<AddIcon />}
              onClick={handleAddNew}
              sx={{
                backgroundColor: '#73C7F9',
                '&:hover': {
                  backgroundColor: '#5ab8ea',
                },
              }}
            >
              Add New Diamond
            </Button>
          </Grid>
          <Grid size={12}>
            <SimpleTable
              columns={columns}
              rows={tableData}
              disableRowSelectionOnClick
            />
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='add-diamond-modal'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(3px)',
        }}
      >
        <Paper
          sx={{
            width: '90%',
            maxWidth: 800,
            p: 4,
            borderRadius: 2,
            backgroundColor: '#f3f9fd',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
          }}
        >
          <Typography variant='h5' mb={3}>
            {isEditing ? 'Edit Diamond' : 'Add New Diamond'}
          </Typography>

          <Grid container spacing={3}>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Diamond Name'
                name='diamond_name'
                value={diamondData.diamond_name}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Carat'
                name='carat'
                value={diamondData.carat}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Cut'
                name='cut'
                value={diamondData.cut}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Color'
                name='color'
                value={diamondData.color}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Clarity'
                name='clarity'
                value={diamondData.clarity}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Price'
                name='price'
                value={diamondData.price}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={12} sx={{ mt: 2 }}>
              <Typography variant='body1' mb={1}>
                Diamond Image
              </Typography>
              <Button
                component='label'
                variant='contained'
                sx={{
                  backgroundColor: '#a8d8f3',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#73C7F9',
                  },
                }}
              >
                Choose File
                <input
                  hidden
                  accept='image/*'
                  type='file'
                  onChange={handleFileChange}
                />
              </Button>
              {diamondData.image && diamondData.image instanceof File && (
                <Typography variant='caption' display='block' mt={1}>
                  Selected: {diamondData.image.name}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
            <Button
              variant='outlined'
              onClick={handleCloseModal}
              sx={{ width: '45%' }}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              onClick={handleSave}
              sx={{
                width: '45%',
                backgroundColor: '#73C7F9',
                '&:hover': {
                  backgroundColor: '#5ab8ea',
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Paper>
      </Modal>

      <Dialog
        open={deleteDialogOpen}
        onClose={cancelDelete}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this diamond? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color='primary'>
            Cancel
          </Button>
          <Button onClick={confirmDelete} color='error' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alertOpen}
        autoHideDuration={5000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alertSeverity}
          variant='filled'
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default DiamondListing;
