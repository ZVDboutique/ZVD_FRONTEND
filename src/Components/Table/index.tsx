import {
  Box,
  Paper,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { MdSearch, MdFilterList } from 'react-icons/md';
import { TableProps } from '../../Types/table.types';
import { DataGrid } from '@mui/x-data-grid';
import StatsBox from './StatsBox';

const Table = <T extends Record<string, any>>({
  title,
  data,
  columns,
  loading = false,
  enableSelection = false,
  enableSearch = true,
  actionButtons = [],
  onRowClick,
  pageSize = 100,
  customStats,
  onSelectionChange,
  searchPlaceholder = 'Search',
  hideFooterPagination = false,
  rowHeight,
  containerStyles,
}: TableProps<T>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const getFilteredData = useMemo(() => {
    if (!data?.length) return [];
    if (!searchTerm) return data;

    return data.filter((row) => {
      return columns.some((col) => {
        if (!col.field || col.field === '__check__') return false;
        const value = row[col.field];
        if (value === null || value === undefined) return false;
        return String(value).toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }, [data, searchTerm, columns]);

  useEffect(() => {
    setFilteredData(getFilteredData);
  }, [getFilteredData]);

  const handleSelectionChange = (newSelectionModel: any) => {
    setSelectedRows(newSelectionModel);

    if (onSelectionChange) {
      const selectedIds = newSelectionModel.map((id: any) => String(id));
      onSelectionChange(selectedIds);
    }
  };

  const getTotalCount = () => {
    return data?.length || 0;
  };

  const getSelectedCount = () => {
    return selectedRows?.length || 0;
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#d9f1ff',
        border: '0.5px solid #12344966',
        borderRadius: 2,
        p: { xs: 1, sm: 2 },
        pb: 0,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        ...containerStyles,
      }}
    >
      {title && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <Typography variant='h5' fontWeight='600' color='#123449'>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {actionButtons.map((button, index) => (
              <Tooltip key={index} title={button.tooltip || ''}>
                <IconButton
                  size='small'
                  onClick={button.onClick}
                  sx={{
                    color: '#123449',
                    borderRadius: 1,
                    backgroundColor: '#FFFFFF',
                    width: '34px',
                    height: '34px',
                    '&:hover': {
                      backgroundColor: '#FFFFFF',
                      opacity: 0.9,
                    },
                  }}
                >
                  {button.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>
      )}

      <Paper
        sx={{
          width: '100%',
          boxShadow: 'none',
          borderRadius: {
            xs: 0,
            sm: 1,
          },
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(18, 52, 73, 0.15)',
          mb: 0,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 1.5,
            borderBottom: '1px solid rgba(18, 52, 73, 0.1)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
              flexGrow: 1,
              mr: 2,
            }}
          >
            {customStats
              ? customStats
              : enableSelection && (
                  <>
                    <StatsBox>
                      Selected: {getSelectedCount()}/{getTotalCount()}
                    </StatsBox>
                    <StatsBox>Total: {getTotalCount()}</StatsBox>
                  </>
                )}
          </Box>

          {enableSearch && (
            <Box
              sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}
            >
              <TextField
                size='small'
                variant='outlined'
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MdSearch color='#123449' />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton size='small'>
                        <MdFilterList color='#123449' />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  bgcolor: '#E3F4FE',
                  borderRadius: 1,
                  width: 200,
                  height: '36px',
                  '& .MuiOutlinedInput-root': {
                    height: '100%',
                    '& fieldset': {
                      borderColor: '#12344966',
                      borderWidth: '1px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#12344966',
                      borderWidth: '1px',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#12344966',
                      borderWidth: '1px',
                    },
                  },
                }}
              />
            </Box>
          )}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
            height: 'calc(100vh - 215px)',
            '&::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#8B8B8B66',
              borderRadius: '3px',
            },
            '& *::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
            '& *::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '3px',
            },
            '& *::-webkit-scrollbar-thumb': {
              background: '#8B8B8B66',
              borderRadius: '3px',
            },
          }}
        >
          <DataGrid
            rows={filteredData}
            columns={columns}
            getRowId={(row) => row.id}
            checkboxSelection={enableSelection}
            disableRowSelectionOnClick
            onRowSelectionModelChange={handleSelectionChange}
            onRowClick={(params) => onRowClick && onRowClick(params.row)}
            paginationMode='client'
            pageSizeOptions={hideFooterPagination ? [] : [20, 50, 100]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: Math.min(pageSize, 100),
                  page: 0,
                },
              },
            }}
            loading={loading}
            density='compact'
            disableColumnMenu
            hideFooter={hideFooterPagination}
            localeText={{
              noRowsLabel: 'No Records to Display',
            }}
            sx={{
              height: '100%',
              width: '100%',
              borderRadius: 0,
              '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
                width: '4px',
                height: '4px',
              },
              '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '3px',
              },
              '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
                background: '#8B8B8B66',
                borderRadius: '3px',
              },
              '& .MuiDataGrid-main': {
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                  width: '4px',
                  height: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#8B8B8B66',
                  borderRadius: '3px',
                  '&:hover': {
                    background: '#123449',
                  },
                },
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#FFFFFF',
                color: '#123449',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(18, 52, 73, 0.2)',
                paddingTop: 0,
                paddingBottom: 0,
              },
              '& .MuiDataGrid-root': {
                border: 'none',
              },
              '& .MuiDataGrid-cell': {
                borderBottom: '1px solid rgba(18, 52, 73, 0.1)',
                color: '#123449',
                fontSize: '0.8rem',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: 0,
                paddingBottom: 0,
                display: 'flex',
                alignItems: 'center',
              },
              '& .MuiDataGrid-cellContent': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              },
              '& .MuiDataGrid-columnHeader': {
                outline: 'none !important',
                padding: 0,
              },
              '& .MuiDataGrid-columnHeaderTitleContainer': {
                padding: 0,
                justifyContent: 'center',
              },
              '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: 'bold',
                textOverflow: 'clip',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                lineHeight: 1,
              },
              '& .MuiDataGrid-columnSeparator': {
                display: 'none',
              },
              '& .MuiDataGrid-row': {
                '&:nth-of-type(odd)': {
                  backgroundColor: 'rgba(176, 219, 249, 0.05)',
                },
                '&:hover': {
                  backgroundColor: 'rgba(176, 219, 249, 0.1)',
                },
                cursor: onRowClick ? 'pointer' : 'default',
                height: rowHeight ? `${rowHeight}px` : 'auto',
                padding: 0,
                margin: 0,
              },
              '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
                outline: 'none',
              },
              '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within':
                {
                  outline: 'none',
                },
              '& .MuiDataGrid-footerContainer': {
                borderTop: '1px solid rgba(18, 52, 73, 0.1)',
                padding: 0,
              },
              '& .MuiDataGrid-tableContainer': {
                padding: 0,
              },
              '& .MuiTablePagination-root': {
                color: '#123449',
              },
              '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows':
                {
                  fontSize: '0.8rem',
                },
              '& .MuiCheckbox-root': {
                color: 'rgba(18, 52, 73, 0.5)',
                '&.Mui-checked': {
                  color: '#123449',
                },
              },
              '& .MuiDataGrid-sortIcon': {
                color: '#123449',
              },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Table;
