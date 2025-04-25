import { Box, Grid, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import SimpleTable from "../../Components/SimpleTable";
import axiosInstance from "../../Utils/axios";

const AdminUser = () => {
  const columns: GridColDef[] = [
    {
      field: "Username",
      flex: 1,
    },
    {
      field: "Name ",
      flex: 1,
    },
    {
      field: "Contact No",
      flex: 1,
    },
    {
      field: "Email",
      flex: 1,
    },
    {
      field: "Account Status",
      flex: 1,
    },
    {
      field: "Action",
      flex: 1,
    },
  ];

  const { data: adminUsers } = useQuery({
    queryKey: ["GET_ALL_ADMIN_USERS"],
    queryFn: () => axiosInstance.get(`/admin-users/`),
  });

  console.log("adminUsers?.data", adminUsers?.data);

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
            Admins
          </Typography>
        </Grid>
        <Grid size={12}>
          <SimpleTable columns={columns} rows={adminUsers?.data || []} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminUser;
