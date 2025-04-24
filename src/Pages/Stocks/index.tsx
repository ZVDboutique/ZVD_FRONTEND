import { useState, useEffect, useMemo } from 'react';
import { Box, Chip } from '@mui/material';
import { Diamond } from '../../Types/diamond.types';
import Table from '../../Components/Table';
import StatsBox from '../../Components/Table/StatsBox';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import {
  MdFileDownload,
  MdPrint,
  MdShare,
  MdOutlineLink,
  MdFilterAlt,
} from 'react-icons/md';
import { generateMockDiamonds } from '../../Mock/diamonds';

const Stock = () => {
  const [loading, setLoading] = useState(true);
  const [diamonds, setDiamonds] = useState<Diamond[]>([]);
  const [selectedDiamonds, setSelectedDiamonds] = useState<string[]>([]);

  useEffect(() => {
    const fetchDiamonds = async () => {
      try {
        setLoading(true);
        const mockDiamonds = generateMockDiamonds();
        setDiamonds(mockDiamonds);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching diamonds:', error);
        setLoading(false);
      }
    };

    fetchDiamonds();
  }, []);

  const handleRowClick = (diamond: Diamond) => {
    console.log('Diamond clicked:', diamond);
  };

  const formatPrice = (value: number) => {
    return `$${value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
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
      valueFormatter: (params: any) => {
        if (params.value === undefined) return '';
        return `${Number(params.value).toFixed(2)} ct`;
      },
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
      renderCell: (params: GridRenderCellParams) => {
        const value = params.value as string;
        return formatCut(value);
      },
    },
    {
      field: 'polish',
      headerName: 'POLISH',
      minWidth: 110,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        const value = params.value as string;
        return formatCut(value);
      },
    },
    {
      field: 'symmetry',
      headerName: 'SYMMETRY',
      minWidth: 110,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        const value = params.value as string;
        return formatCut(value);
      },
    },
    {
      field: 'price',
      headerName: 'PRICE',
      minWidth: 100,
      flex: 1,
      valueFormatter: (params: any) => {
        if (params.value === undefined) return '';
        return formatPrice(Number(params.value));
      },
      align: 'right',
      headerAlign: 'right',
    },
  ];

  const stats = useMemo(() => {
    const selectedItems = diamonds.filter((d) =>
      selectedDiamonds.includes(d.id)
    );

    return {
      selectedCount: selectedDiamonds.length,
      totalWeight: diamonds.reduce((sum, d) => sum + d.weight, 0).toFixed(2),
      totalItems: diamonds.length,
      averagePrice: diamonds.length
        ? (
            diamonds.reduce((sum, d) => sum + d.price, 0) / diamonds.length
          ).toFixed(2)
        : '0.00',
      selectedWeight: selectedItems
        .reduce((sum, d) => sum + d.weight, 0)
        .toFixed(2),
      selectedValue: selectedItems
        .reduce((sum, d) => sum + d.price, 0)
        .toFixed(2),
    };
  }, [diamonds, selectedDiamonds]);

  const customStatsDisplay = (
    <>
      <StatsBox>
        Selected: {stats.selectedCount}/{stats.totalItems}
      </StatsBox>
      <StatsBox>Total Weight: {stats.totalWeight}ct</StatsBox>
      <StatsBox>Average P/CT: ${stats.averagePrice}</StatsBox>
      <StatsBox>Total: {stats.totalItems}</StatsBox>
    </>
  );

  const actionButtons = [
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
    </Box>
  );
};

export default Stock;
