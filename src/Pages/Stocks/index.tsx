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
import SimpleTable from '../../Components/SimpleTable';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../Utils/axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { StockData, StockFormData } from '../../Types/Stock';

const Stock = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>(
    'success'
  );
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [stockToDelete, setStockToDelete] = useState<number | null>(null);

  const initialStockData: StockFormData = {
    type: '',
    lab: '',
    location: '',
    shapeName: '',
    caratWeight: '',
    colorGrade: '',
    clarityGrade: '',
    cutQuality: '',
    polishGrade: '',
    symmetry: '',
    price: '',
    measurementLength: '',
    measurementWidth: '',
    measurementDepth: '',
    depth: '',
    lwRatio: '',
    shade: '',
    companyCode: '',
    diameter: '',
    imageUrl: '',
    hexvalue: '',
    customer_id: '',
  };

  const [stockData, setStockData] = useState<StockFormData>(initialStockData);

  const queryClient = useQueryClient();

  const { data: stocksList, isFetching } = useQuery({
    queryKey: ['GET_DASHBOARD_STOCKS'],
    queryFn: () => axiosInstance.get('/Stock/dashboard-stock'),
  });

  const createStockMutation = useMutation({
    mutationFn: (newStock: StockFormData) => {
      const payload = {
        id: 0,
        type: newStock.type,
        lab: newStock.lab,
        location: newStock.location,
        shapeName: newStock.shapeName,
        caratWeight: parseFloat(newStock.caratWeight) || 0,
        colorGrade: newStock.colorGrade,
        clarityGrade: newStock.clarityGrade,
        cutQuality: newStock.cutQuality,
        polishGrade: newStock.polishGrade,
        symmetry: newStock.symmetry,
        price: parseFloat(newStock.price) || 0,
        measurementLength: parseFloat(newStock.measurementLength) || 0,
        measurementWidth: parseFloat(newStock.measurementWidth) || 0,
        measurementDepth: parseFloat(newStock.measurementDepth) || 0,
        depth: parseFloat(newStock.depth) || 0,
        lwRatio: parseFloat(newStock.lwRatio) || 0,
        shade: newStock.shade,
        companyCode: parseInt(newStock.companyCode) || 0,
        diameter: parseFloat(newStock.diameter) || 0,
        imageUrl: newStock.imageUrl,
        hexvalue: newStock.hexvalue,
        customer_id: parseInt(newStock.customer_id) || 0,
      };

      return axiosInstance.post('/Stock/add-dashboard-stock', payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_DASHBOARD_STOCKS'] });
      showAlert('Stock created successfully!', 'success');
      handleCloseModal();
    },
    onError: () => {
      showAlert('Failed to create stock', 'error');
    },
  });

  const updateStockMutation = useMutation({
    mutationFn: (stock: StockFormData) => {
      const payload = {
        id: stock.id || 0,
        type: stock.type,
        lab: stock.lab,
        location: stock.location,
        shapeName: stock.shapeName,
        caratWeight: parseFloat(stock.caratWeight) || 0,
        colorGrade: stock.colorGrade,
        clarityGrade: stock.clarityGrade,
        cutQuality: stock.cutQuality,
        polishGrade: stock.polishGrade,
        symmetry: stock.symmetry,
        price: parseFloat(stock.price) || 0,
        measurementLength: parseFloat(stock.measurementLength) || 0,
        measurementWidth: parseFloat(stock.measurementWidth) || 0,
        measurementDepth: parseFloat(stock.measurementDepth) || 0,
        depth: parseFloat(stock.depth) || 0,
        lwRatio: parseFloat(stock.lwRatio) || 0,
        shade: stock.shade,
        companyCode: parseInt(stock.companyCode) || 0,
        diameter: parseFloat(stock.diameter) || 0,
        imageUrl: stock.imageUrl,
        hexvalue: stock.hexvalue,
        customer_id: parseInt(stock.customer_id) || 0,
      };

      return axiosInstance.put(
        `/Stock/update-dashboard-stock/${stock.id}`,
        payload
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_DASHBOARD_STOCKS'] });
      showAlert('Stock updated successfully!', 'success');
      handleCloseModal();
    },
    onError: () => {
      showAlert('Failed to update stock', 'error');
    },
  });

  const deleteStockMutation = useMutation({
    mutationFn: (id: number) => {
      return axiosInstance.delete(`/Stock/delete-dashboard-stock/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_DASHBOARD_STOCKS'] });
      showAlert('Stock deleted successfully!', 'success');
    },
    onError: () => {
      showAlert('Failed to delete stock', 'error');
    },
  });

  const handleEdit = (id: number, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    const stockItem = stocksList?.data?.find(
      (stock: StockData) => stock.id === id
    );

    if (stockItem) {
      setStockData({
        id: stockItem.id,
        type: stockItem.type || '',
        lab: stockItem.lab || '',
        location: stockItem.location || '',
        shapeName: stockItem.shapeName || '',
        caratWeight: stockItem.caratWeight?.toString() || '',
        colorGrade: stockItem.colorGrade || '',
        clarityGrade: stockItem.clarityGrade || '',
        cutQuality: stockItem.cutQuality || '',
        polishGrade: stockItem.polishGrade || '',
        symmetry: stockItem.symmetry || '',
        price: stockItem.price?.toString() || '',
        measurementLength: stockItem.measurementLength?.toString() || '',
        measurementWidth: stockItem.measurementWidth?.toString() || '',
        measurementDepth: stockItem.measurementDepth?.toString() || '',
        depth: stockItem.depth?.toString() || '',
        lwRatio: stockItem.lwRatio?.toString() || '',
        shade: stockItem.shade || '',
        companyCode: stockItem.companyCode?.toString() || '',
        diameter: stockItem.diameter?.toString() || '',
        imageUrl: stockItem.imageUrl || '',
        hexvalue: stockItem.hexvalue || '',
        customer_id: stockItem.customer_id?.toString() || '',
      });
      setSelectedId(id);
      setIsEditing(true);
      setOpenModal(true);
    }
  };

  const handleDelete = (id: number, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }

    setStockToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (stockToDelete !== null) {
      deleteStockMutation.mutate(stockToDelete);
      setDeleteDialogOpen(false);
      setStockToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setStockToDelete(null);
  };

  const handleAddNew = () => {
    setStockData(initialStockData);
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
      updateStockMutation.mutate({ ...stockData, id: selectedId });
    } else {
      createStockMutation.mutate(stockData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStockData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      field: 'type',
      headerName: 'TYPE',
      minWidth: 90,
      flex: 1,
    },
    {
      field: 'lab',
      headerName: 'LAB',
      minWidth: 70,
      flex: 0.8,
    },
    {
      field: 'location',
      headerName: 'LOCATION',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'shapeName',
      headerName: 'SHAPE',
      minWidth: 90,
      flex: 1,
    },
    {
      field: 'caratWeight',
      headerName: 'WEIGHT',
      minWidth: 80,
      flex: 0.8,
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'colorGrade',
      headerName: 'COLOR',
      minWidth: 70,
      flex: 0.8,
    },
    {
      field: 'clarityGrade',
      headerName: 'CLARITY',
      minWidth: 80,
      flex: 0.8,
    },
    {
      field: 'cutQuality',
      headerName: 'CUT',
      minWidth: 110,
      flex: 1,
    },
    {
      field: 'polishGrade',
      headerName: 'POLISH',
      minWidth: 110,
      flex: 1,
    },
    {
      field: 'symmetry',
      headerName: 'SYMMETRY',
      minWidth: 110,
      flex: 1,
    },
    {
      field: 'price',
      headerName: 'AMOUNT',
      minWidth: 120,
      flex: 1,
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'measurement',
      headerName: 'MEASUREMENT',
      minWidth: 140,
      flex: 1.2,
    },
    {
      field: 'depth',
      headerName: 'DEPTH%',
      minWidth: 80,
      flex: 0.8,
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'lwRatio',
      headerName: 'L/W RATIO',
      minWidth: 90,
      flex: 0.9,
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'shade',
      headerName: 'SHADE',
      minWidth: 90,
      flex: 0.9,
    },
    {
      field: 'companyCode',
      headerName: 'COMPANY CODE',
      minWidth: 120,
      flex: 1,
    },
    {
      field: 'diameter',
      headerName: 'DIAMETER',
      minWidth: 90,
      flex: 0.9,
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'imageUrl',
      headerName: 'IMAGE URL',
      minWidth: 120,
      flex: 1,
    },
    {
      field: 'hexvalue',
      headerName: 'HEX VALUE',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'customer_id',
      headerName: 'CUSTOMER ID',
      minWidth: 110,
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'ACTIONS',
      minWidth: 100,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Stack direction='row' spacing={1}>
            <IconButton
              size='small'
              onClick={(event) => handleEdit(params.row.id, event)}
              sx={{ color: 'primary.main' }}
              aria-label='Edit stock'
            >
              <EditIcon fontSize='small' />
            </IconButton>
            <IconButton
              size='small'
              onClick={(event) => handleDelete(params.row.id, event)}
              sx={{ color: 'error.main' }}
              aria-label='Delete stock'
            >
              <DeleteIcon fontSize='small' />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  // Add id field to each row for the data grid if not present
  const processedData =
    stocksList?.data?.map((item: any, index: number) => ({
      ...item,
      id: item.id || index,
      measurement: `${item.measurementLength || '-'} x ${
        item.measurementWidth || '-'
      } x ${item.measurementDepth || '-'}`,
    })) || [];

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
              Stocks
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
              Add New Stock
            </Button>
          </Grid>
          <Grid size={12}>
            <SimpleTable
              columns={columns}
              rows={processedData}
              loading={isFetching}
            />
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='stock-modal'
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
            maxHeight: '90vh',
            overflow: 'auto',
          }}
        >
          <Typography variant='h5' mb={3}>
            {isEditing ? 'Edit Stock' : 'Add New Stock'}
          </Typography>

          <Grid container spacing={3}>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Type'
                name='type'
                value={stockData.type}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Lab'
                name='lab'
                value={stockData.lab}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Location'
                name='location'
                value={stockData.location}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Shape'
                name='shapeName'
                value={stockData.shapeName}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Weight'
                name='caratWeight'
                value={stockData.caratWeight}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Color'
                name='colorGrade'
                value={stockData.colorGrade}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Clarity'
                name='clarityGrade'
                value={stockData.clarityGrade}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Cut'
                name='cutQuality'
                value={stockData.cutQuality}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Polish'
                name='polishGrade'
                value={stockData.polishGrade}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Symmetry'
                name='symmetry'
                value={stockData.symmetry}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Price'
                name='price'
                value={stockData.price}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Length'
                name='measurementLength'
                value={stockData.measurementLength}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Width'
                name='measurementWidth'
                value={stockData.measurementWidth}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Depth'
                name='measurementDepth'
                value={stockData.measurementDepth}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Depth %'
                name='depth'
                value={stockData.depth}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='L/W Ratio'
                name='lwRatio'
                value={stockData.lwRatio}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Shade'
                name='shade'
                value={stockData.shade}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Company Code'
                name='companyCode'
                value={stockData.companyCode}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Diameter'
                name='diameter'
                value={stockData.diameter}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Image URL'
                name='imageUrl'
                value={stockData.imageUrl}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Hex Value'
                name='hexvalue'
                value={stockData.hexvalue}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Customer ID'
                name='customer_id'
                value={stockData.customer_id}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
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
            Are you sure you want to delete this stock? This action cannot be
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

export default Stock;
