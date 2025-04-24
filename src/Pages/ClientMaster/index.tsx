import { Box, Grid, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import SimpleTable from "../../Components/SimpleTable";
import axiosInstance from "../../Utils/axios";

const ClientMaster = () => {
  const columns: GridColDef[] = [
    {
      field: "Seller",
      flex: 1,
    },
    {
      field: "First Name",
      flex: 1,
    },
    {
      field: "Last Name",
      flex: 1,
    },
    {
      field: "Country",
      flex: 1,
    },
    {
      field: "Company Name",
      flex: 1,
    },
    {
      field: "Sellers",
      flex: 1,
    },
    {
      field: "Address",
      flex: 1,
    },
    {
      field: "Contact No",
      flex: 1,
    },
  ];

  const { data: clientList } = useQuery({
    queryKey: ["GET_ALL_CLIENT_USERS"],
    queryFn: () => axiosInstance.get(`/client-list/`),
  });

  console.log("", clientList?.data);

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        background: "#73C7F933",
        border: `1px #73C7F9 solid`,
      }}
    >
      <Grid container spacing={1}>
        <Grid size={12}>
          <Typography fontWeight={600} fontSize={24}>
            Clients
          </Typography>
        </Grid>
        <Grid size={12}>
          <SimpleTable columns={columns} rows={clientList?.data || []} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientMaster;
