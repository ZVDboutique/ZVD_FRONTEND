import { Box, Grid, Typography } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import SimpleTable from '../../Components/SimpleTable';
import axiosInstance from '../../Utils/axios';

const Stock = () => {
  const columns: GridColDef[] = [
    {
      field: 'dna',
      headerName: 'DNA',
      minWidth: 100,
      flex: 1,
    },
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
      field: 'report',
      headerName: 'REPORT',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'location',
      headerName: 'LOCATION',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'shape',
      headerName: 'SHAPE',
      minWidth: 90,
      flex: 1,
    },
    {
      field: 'weight',
      headerName: 'WEIGHT',
      minWidth: 80,
      flex: 0.8,
      valueFormatter: ({ value }) => (value ? `${Number(value)} ct` : ''),
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'color',
      headerName: 'COLOR',
      minWidth: 70,
      flex: 0.8,
    },
    {
      field: 'clarity',
      headerName: 'CLARITY',
      minWidth: 80,
      flex: 0.8,
    },
    {
      field: 'cut',
      headerName: 'CUT',
      minWidth: 110,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => params.value as string,
    },
    {
      field: 'polish',
      headerName: 'POLISH',
      minWidth: 110,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => params.value as string,
    },
    {
      field: 'symmetry',
      headerName: 'SYMMETRY',
      minWidth: 110,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => params.value as string,
    },
    {
      field: 'disc',
      headerName: 'DISC%',
      minWidth: 80,
      flex: 0.8,
      valueFormatter: ({ value }) => (value ? `${(Number(value), 1)}%` : ''),
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'pricePerCarat',
      headerName: 'P/CT',
      minWidth: 100,
      flex: 1,
      valueFormatter: ({ value }) => (value ? `$${Number(value)}` : ''),
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'amount',
      headerName: 'AMOUNT',
      minWidth: 120,
      flex: 1,
      valueFormatter: ({ value }) => (value ? `$${Number(value)}` : ''),
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
      valueFormatter: ({ value }) => (value ? `${(Number(value), 1)}%` : ''),
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'table',
      headerName: 'TABLE%',
      minWidth: 80,
      flex: 0.8,
      valueFormatter: ({ value }) => (value ? `${(Number(value), 1)}%` : ''),
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'lwRatio',
      headerName: 'L/W RATIO',
      minWidth: 90,
      flex: 0.9,
      valueFormatter: ({ value }) => (value ? (Number(value), 2) : ''),
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
      field: 'keyToSymbol',
      headerName: 'KEY TO SYMBOL',
      minWidth: 120,
      flex: 1,
    },
    {
      field: 'companyCode',
      headerName: 'COMPANY CODE',
      minWidth: 120,
      flex: 1,
    },
  ];

  const { data: stocksList } = useQuery({
    queryKey: ['GET_ALL_STOCKS'],
    queryFn: () => axiosInstance.get(`/stocks/`),
  });

  console.log('stocksList?.data', stocksList?.data);

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        background: '#73C7F933',
        border: `1px #73C7F9 solid`,
      }}
    >
      <Grid container spacing={1}>
        <Grid size={12}>
          <Typography fontWeight={600} fontSize={24}>
            Stocks
          </Typography>
        </Grid>
        <Grid size={12}>
          <SimpleTable columns={columns} rows={stocksList?.data || []} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stock;
