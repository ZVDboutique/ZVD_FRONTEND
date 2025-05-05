/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, TableContainer, TextField } from "@mui/material";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { matchSorter } from "match-sorter";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { theme } from "../Utils/theme";
import { Show } from "./Show";

interface Props {
  headerComponent?: any;
  headerGridStyle?: any;
  showSearch?: boolean;
  densityButton?: boolean;
  exportButton?: boolean;
  maxHeight?: any;
  showHeaderGrid?: any;
  handleSortChange?: any;
  rightPinnes?: any;
  initialPageSize?: any;
  minHeight?: any;
  headerTitle?: any;
  emptyButtons?: any;
  footerComponent?: any;
}

const SimpleTable = (props: DataGridProps & Props) => {
  const {
    rows,
    headerComponent,
    showSearch = true,
    loading,
    showHeaderGrid = true,
    headerTitle,
    initialPageSize,
  } = props;

  const [searchText, setSearchText] = useState("");

  const handleRowsReturn = () => {
    const filteredRows =
      searchText &&
      rows?.length !== 0 &&
      matchSorter(rows as any[], searchText, {
        keys: Object.keys((rows && rows[0]) || {}),
        sorter: (rankedItems) => rankedItems,
      });
    if (searchText) {
      return filteredRows;
    }
    if (loading) {
      return [];
    }
    return rows || [];
  };

  return (
    <Grid container width={"100%"}>
      <Grid size={12}>
        <Show.When isTrue={showHeaderGrid}>
          <Grid
            minHeight={"52px"}
            container
            justifyContent={"space-between"}
            p={1}
            alignItems={"center"}
            border={`solid 1px ${theme.palette.grey[300]}`}
            borderBottom={`solid 0px ${theme.palette.grey[300]}`}
            sx={{
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
            }}
            bgcolor={"#fff"}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                width: "100%",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Show.When isTrue={headerTitle}>{headerTitle}</Show.When>
                <Show.When isTrue={showSearch}>
                  <TextField
                    style={{ width: 300 }}
                    placeholder={"Search..."}
                    value={searchText}
                    onChange={(e: any) => setSearchText(e.target.value)}
                    type="search"
                    size="small"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <LuSearch
                            color={theme.palette.grey[500]}
                            size={20}
                            style={{ marginRight: "8px" }}
                          />
                        ),
                      },
                    }}
                  />
                </Show.When>
              </span>
              <Show.When isTrue={headerComponent}>{headerComponent}</Show.When>
            </div>
          </Grid>
        </Show.When>
      </Grid>
      <Grid
        size={12}
        sx={{
          "& .MuiDataGrid-virtualScrollerContent": {
            maxHeight: "calc(100vh - 360px)",
          },
        }}
      >
        <TableContainer>
          <DataGrid
            {...props}
            pagination={true}
            loading={loading}
            rows={handleRowsReturn() || []}
            paginationMode="client"
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: initialPageSize || 25,
                },
              },
            }}
          />
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SimpleTable;
