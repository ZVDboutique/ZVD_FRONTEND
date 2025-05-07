import EditIcon from '@mui/icons-material/Edit';
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Modal,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import SimpleTable from '../../Components/SimpleTable';
import axiosInstance from '../../Utils/axios';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { OrderTransactionData } from '../../Types/Order';

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

  const { data: orders, isLoading } = useQuery({
    queryKey: ['GET_ALL_ORDERS'],
    queryFn: () => axiosInstance.get('/Order/Order_dashboard'),
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

  const handleEdit = (id: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    const apiItem = orders?.data?.find((order: any) => order.order_id === id);
    if (apiItem) {
      openEditModal(apiItem);
    } else {
      console.error('Could not find order with id:', id);
    }
  };

  const openEditModal = (item: any) => {
    setOrderData({
      id: item.order_id,
      order_id: item.order_id,
      buyer_name: `${item.first_name} ${item.last_name}`,
      diamond: item.diamond_id.toString(),
      qty: item.quantity.toString(),
      date: new Date(item.order_date).toISOString().split('T')[0],
      price: item.item_total.toString(),
      status: getStatusFromId(item.statusid),
    });
    setSelectedId(item.order_id);
    setIsEditing(true);
    setOpenModal(true);
  };

  const getStatusFromId = (statusId: string): string => {
    const statusMap: { [key: string]: string } = {
      '1': 'Pending',
      '2': 'Processing',
      '3': 'Shipped',
      '4': 'Delivered',
      '5': 'Returned',
      '6': 'Cancelled',
      '7': 'Updated',
    };
    return statusMap[statusId] || 'Pending';
  };

  // const handleDelete = (id: string, event?: React.MouseEvent) => {
  //   if (event) {
  //     event.stopPropagation();
  //   }

  //   setOrderToDelete(id as any);
  //   setDeleteDialogOpen(true);
  // };

  const confirmDelete = () => {
    if (orderToDelete !== null) {
      deleteOrderMutation.mutate(orderToDelete as any);
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
      const orderWithStatusId = {
        ...orderData,
        id: selectedId,
        statusid: getStatusFromId(orderData.status),
      };
      updateOrderMutation.mutate(orderWithStatusId);
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
      field: 'first_name',
      headerName: 'Buyer Name',
      flex: 1,
      valueGetter: (value: any, row: any) => {
        if (!value || !row) return '';
        return `${row.first_name || ''} ${row.last_name || ''}`;
      },
    },
    {
      field: 'diamond_name',
      headerName: 'Diamond',
      flex: 1,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: 1,
    },
    {
      field: 'order_date',
      headerName: 'Date',
      flex: 1,
      valueGetter: (value: any) => {
        if (!value) return '';
        try {
          return new Date(value).toLocaleDateString();
        } catch (error) {
          return '';
        }
      },
    },
    {
      field: 'item_total',
      headerName: 'Price',
      flex: 1,
    },
    {
      field: 'statusid',
      headerName: 'Status',
      flex: 1,
      valueGetter: (value: any) => {
        return getStatusFromId(value);
      },
    },
    {
      field: 'actions',
      headerName: 'Action',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        if (!params || !params.row) {
          return <Stack direction='row' spacing={1}></Stack>;
        }
        return (
          <Stack direction='row' spacing={1}>
            <IconButton
              size='small'
              onClick={(event) => handleEdit(params.row.order_id, event)}
              sx={{ color: 'primary.main' }}
              aria-label='Edit order'
            >
              <EditIcon fontSize='small' />
            </IconButton>
            {/* <IconButton
              size='small'
              onClick={(event) => handleDelete(params.row.order_id, event)}
              sx={{ color: 'error.main' }}
              aria-label='Delete order'
            >
              <DeleteIcon fontSize='small' />
            </IconButton> */}
          </Stack>
        );
      },
    },
  ];

  const tableData =
    orders?.data && Array.isArray(orders.data)
      ? orders.data.map((order: any) => ({
          ...order,
          id: order.order_id,
        }))
      : [];

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
              getRowId={(row) => row.id}
              loading={isLoading}
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
                <option value='Cancelled'>Cancelled</option>
                <option value='Returned'>Returned</option>
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
