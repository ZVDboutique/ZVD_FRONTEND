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
import { useState } from 'react';
import {
  OrderTransactionData,
  OrderTransactionRowData,
} from '../../Types/Order';

const OrderTransactions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>(
    'success'
  );
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState<number | null>(null);
  const [orderData, setOrderData] = useState<OrderTransactionData>({
    order_id: '',
    buyer_name: '',
    diamond: '',
    qty: '',
    date: '',
    price: '',
    status: 'Pending',
  });

  const queryClient = useQueryClient();

  const { data: orders } = useQuery({
    queryKey: ['GET_ALL_ORDERS'],
    queryFn: () => axiosInstance.get('/orders/'),
  });

  const updateOrderMutation = useMutation({
    mutationFn: (order: OrderTransactionData) => {
      return axiosInstance.put(`/orders/${order.id}`, order);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_ALL_ORDERS'] });
      showAlert('Order updated successfully!', 'success');
      handleCloseModal();
    },
    onError: () => {
      showAlert('Failed to update order', 'error');
    },
  });

  const deleteOrderMutation = useMutation({
    mutationFn: (id: number) => {
      return axiosInstance.delete(`/orders/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_ALL_ORDERS'] });
      showAlert('Order deleted successfully!', 'success');
    },
    onError: () => {
      showAlert('Failed to delete order', 'error');
    },
  });

  const handleEdit = (id: number, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    console.log('Edit clicked for id:', id);

    const apiItem = orders?.data?.find((order: any) => order.id === id);
    if (apiItem) {
      openEditModal(apiItem);
    } else {
      console.error('Could not find order with id:', id);
    }
  };

  const openEditModal = (item: OrderTransactionRowData) => {
    setOrderData({
      id: item.id,
      order_id: item.order_id,
      buyer_name: item.buyer_name,
      diamond: item.diamond,
      qty: item.qty,
      date: item.date,
      price: item.price,
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

    setOrderToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (orderToDelete !== null) {
      deleteOrderMutation.mutate(orderToDelete);
      setDeleteDialogOpen(false);
      setOrderToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setOrderToDelete(null);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsEditing(false);
    setSelectedId(null);
  };

  const handleSave = () => {
    if (isEditing && selectedId) {
      updateOrderMutation.mutate({ ...orderData, id: selectedId });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({
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
      field: 'order_id',
      headerName: 'Order ID',
      flex: 1,
    },
    {
      field: 'buyer_name',
      headerName: 'Buyer Name',
      flex: 1,
    },
    {
      field: 'diamond',
      headerName: 'Diamond',
      flex: 1,
    },
    {
      field: 'qty',
      headerName: 'Quantity',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
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
        return (
          <Stack direction='row' spacing={1}>
            <IconButton
              size='small'
              onClick={(event) => handleEdit(params.row.id, event)}
              sx={{ color: 'primary.main' }}
              aria-label='Edit order'
            >
              <EditIcon fontSize='small' />
            </IconButton>
            <IconButton
              size='small'
              onClick={(event) => handleDelete(params.row.id, event)}
              sx={{ color: 'error.main' }}
              aria-label='Delete order'
            >
              <DeleteIcon fontSize='small' />
            </IconButton>
          </Stack>
        );
      },
    },
  ];

  const tableData = orders?.data || [];

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
              Order Transactions
            </Typography>
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
        aria-labelledby='edit-order-modal'
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
            Edit Order
          </Typography>

          <Grid container spacing={3}>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Order ID'
                name='order_id'
                value={orderData.order_id}
                onChange={handleChange}
                variant='standard'
                disabled={true}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Buyer Name'
                name='buyer_name'
                value={orderData.buyer_name}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Diamond'
                name='diamond'
                value={orderData.diamond}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Quantity'
                name='qty'
                value={orderData.qty}
                onChange={handleChange}
                variant='standard'
                type='number'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Date'
                name='date'
                value={orderData.date}
                onChange={handleChange}
                variant='standard'
                type='date'
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Price'
                name='price'
                value={orderData.price}
                onChange={handleChange}
                variant='standard'
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label='Status'
                name='status'
                value={orderData.status}
                onChange={handleChange}
                variant='standard'
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option value='Pending'>Pending</option>
                <option value='Processing'>Processing</option>
                <option value='Shipped'>Shipped</option>
                <option value='Delivered'>Delivered</option>
                <option value='Completed'>Completed</option>
                <option value='Cancelled'>Cancelled</option>
              </TextField>
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
            Are you sure you want to delete this order? This action cannot be
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

export default OrderTransactions;
