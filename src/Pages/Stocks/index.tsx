import { useState, useEffect, useMemo } from 'react';
import { Box, Chip, IconButton, Tooltip } from '@mui/material';
import { Diamond } from '../../Types/diamond.types';
import Table from '../../Components/Table';
import StatsBox from '../../Components/Table/StatsBox';
import DiamondDialog from '../../Components/Table/DiamondDialog';
import ConfirmationDialog from '../../Components/Table/ConfirmationDialog';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import {
  MdFileDownload,
  MdPrint,
  MdShare,
  MdOutlineLink,
  MdFilterAlt,
  MdAdd,
  MdEdit,
  MdDelete,
} from 'react-icons/md';
import { generateMockDiamonds } from '../../Mock/diamonds';
import { diamondService } from '../../Services/diamondService';

const Stock = () => {
  const [loading, setLoading] = useState(true);
  const [diamonds, setDiamonds] = useState<Diamond[]>([]);
  const [selectedDiamonds, setSelectedDiamonds] = useState<string[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');
  const [selectedDiamond, setSelectedDiamond] = useState<Diamond | undefined>();
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    open: boolean;
    diamondId: string | null;
  }>({
    open: false,
    diamondId: null,
  });

  useEffect(() => {
    const fetchDiamonds = async () => {
      try {
        setLoading(true);
        const mockDiamonds = generateMockDiamonds();
        diamondService.initializeWithMockData(mockDiamonds);
        const diamonds = await diamondService.getAllDiamonds();
        setDiamonds(diamonds);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching diamonds:', error);
        setLoading(false);
      }
    };

    fetchDiamonds();
  }, []);

  const handleAddDiamond = () => {
    setDialogMode('add');
    setSelectedDiamond(undefined);
    setDialogOpen(true);
  };

  const handleEditDiamond = (diamond: Diamond) => {
    setDialogMode('edit');
    setSelectedDiamond(diamond);
    setDialogOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setDeleteConfirmation({
      open: true,
      diamondId: id,
    });
  };

  const handleDeleteConfirm = async () => {
    if (deleteConfirmation.diamondId) {
      try {
        await diamondService.deleteDiamond(deleteConfirmation.diamondId);
        const updatedDiamonds = await diamondService.getAllDiamonds();
        setDiamonds(updatedDiamonds);
      } catch (error) {
        console.error('Error deleting diamond:', error);
      }
    }
    setDeleteConfirmation({ open: false, diamondId: null });
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmation({ open: false, diamondId: null });
  };

  const handleDialogSubmit = async (diamond: Partial<Diamond>) => {
    try {
      if (dialogMode === 'add') {
        await diamondService.createDiamond(diamond as Omit<Diamond, 'id'>);
      } else {
        if (selectedDiamond) {
          await diamondService.updateDiamond(selectedDiamond.id, diamond);
        }
      }
      const updatedDiamonds = await diamondService.getAllDiamonds();
      setDiamonds(updatedDiamonds);
    } catch (error) {
      console.error('Error saving diamond:', error);
    }
  };

  const handleRowClick = (diamond: Diamond) => {
    handleEditDiamond(diamond);
  };

  const formatNumber = (value: number | undefined, decimals: number = 2) => {
    if (value === undefined || value === null) return '';
    return value.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  const formatCut = (value: string) => {
    switch (value) {
      case 'Excellent':
        return (
          <Chip
            label={value}
            size='small'
            sx={{ bgcolor: '#aaffaa', fontSize: '0.75rem' }}
          />
        );
      case 'Very Good':
        return (
          <Chip
            label={value}
            size='small'
            sx={{ bgcolor: '#ffffaa', fontSize: '0.75rem' }}
          />
        );
      case 'Good':
        return (
          <Chip
            label={value}
            size='small'
            sx={{ bgcolor: '#ffddaa', fontSize: '0.75rem' }}
          />
        );
      default:
        return value;
    }
  };

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
      valueFormatter: ({ value }) =>
        value ? `${formatNumber(Number(value))} ct` : '',
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
      renderCell: (params: GridRenderCellParams) =>
        formatCut(params.value as string),
    },
    {
      field: 'polish',
      headerName: 'POLISH',
      minWidth: 110,
      flex: 1,
      renderCell: (params: GridRenderCellParams) =>
        formatCut(params.value as string),
    },
    {
      field: 'symmetry',
      headerName: 'SYMMETRY',
      minWidth: 110,
      flex: 1,
      renderCell: (params: GridRenderCellParams) =>
        formatCut(params.value as string),
    },
    {
      field: 'disc',
      headerName: 'DISC%',
      minWidth: 80,
      flex: 0.8,
      valueFormatter: ({ value }) =>
        value ? `${formatNumber(Number(value), 1)}%` : '',
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'pricePerCarat',
      headerName: 'P/CT',
      minWidth: 100,
      flex: 1,
      valueFormatter: ({ value }) =>
        value ? `$${formatNumber(Number(value))}` : '',
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'amount',
      headerName: 'AMOUNT',
      minWidth: 120,
      flex: 1,
      valueFormatter: ({ value }) =>
        value ? `$${formatNumber(Number(value))}` : '',
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
      valueFormatter: ({ value }) =>
        value ? `${formatNumber(Number(value), 1)}%` : '',
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'table',
      headerName: 'TABLE%',
      minWidth: 80,
      flex: 0.8,
      valueFormatter: ({ value }) =>
        value ? `${formatNumber(Number(value), 1)}%` : '',
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'lwRatio',
      headerName: 'L/W RATIO',
      minWidth: 90,
      flex: 0.9,
      valueFormatter: ({ value }) =>
        value ? formatNumber(Number(value), 2) : '',
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
    {
      field: 'actions',
      headerName: 'ACTIONS',
      width: 120,
      renderCell: (params: GridRenderCellParams) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title='Edit'>
            <IconButton
              size='small'
              onClick={(e) => {
                e.stopPropagation();
                handleEditDiamond(params.row as Diamond);
              }}
            >
              <MdEdit />
            </IconButton>
          </Tooltip>
          <Tooltip title='Delete'>
            <IconButton
              size='small'
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteClick(params.row.id);
              }}
            >
              <MdDelete />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const stats = useMemo(() => {
    const selectedItems = diamonds.filter((d) =>
      selectedDiamonds.includes(d.id)
    );

    return {
      selectedCount: selectedDiamonds.length,
      totalWeight: diamonds.reduce((sum, d) => sum + d.weight, 0),
      totalItems: diamonds.length,
      averagePricePerCarat: diamonds.length
        ? diamonds.reduce((sum, d) => sum + d.pricePerCarat, 0) /
          diamonds.length
        : 0,
      selectedWeight: selectedItems.reduce((sum, d) => sum + d.weight, 0),
      totalAmount: diamonds.reduce((sum, d) => sum + d.amount, 0),
    };
  }, [diamonds, selectedDiamonds]);

  const customStatsDisplay = (
    <>
      <StatsBox>
        Selected: {stats.selectedCount}/{stats.totalItems}
      </StatsBox>
      <StatsBox>Total Weight: {formatNumber(stats.totalWeight)}ct</StatsBox>
      <StatsBox>
        Average P/CT: ${formatNumber(stats.averagePricePerCarat)}
      </StatsBox>
      <StatsBox>Total Amount: ${formatNumber(stats.totalAmount)}</StatsBox>
    </>
  );

  const actionButtons = [
    {
      icon: <MdAdd />,
      tooltip: 'Add Diamond',
      onClick: handleAddDiamond,
    },
    {
      icon: <MdFileDownload />,
      tooltip: 'Download',
      onClick: () => console.log('Download clicked'),
    },
    {
      icon: <MdPrint />,
      tooltip: 'Print',
      onClick: () => console.log('Print clicked'),
    },
    {
      icon: <MdShare />,
      tooltip: 'Share',
      onClick: () => console.log('Share clicked'),
    },
    {
      icon: <MdFilterAlt />,
      tooltip: 'Filter',
      onClick: () => console.log('Filter clicked'),
    },
    {
      icon: <MdOutlineLink />,
      tooltip: 'Link',
      onClick: () => console.log('Link clicked'),
    },
  ];

  return (
    <Box sx={{ p: 2, backgroundColor: '#FFFFFF' }}>
      <Table
        title='Diamonds Stock'
        data={diamonds}
        columns={columns}
        loading={loading}
        enableSelection={true}
        actionButtons={actionButtons}
        onRowClick={handleRowClick}
        pageSize={200}
        onSelectionChange={setSelectedDiamonds}
        customStats={customStatsDisplay}
        hideFooterPagination={false}
        rowHeight={45}
      />
      <DiamondDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleDialogSubmit}
        diamond={selectedDiamond}
        mode={dialogMode}
      />
      <ConfirmationDialog
        open={deleteConfirmation.open}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title='Delete Diamond'
        message='Are you sure you want to delete this diamond? This action cannot be undone.'
      />
    </Box>
  );
};

export default Stock;
