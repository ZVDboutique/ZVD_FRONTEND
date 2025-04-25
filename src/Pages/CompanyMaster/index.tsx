import { Box, Grid, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import SimpleTable from "../../Components/SimpleTable";
import axiosInstance from "../../Utils/axios";

const CompanyMaster = () => {
  const columns: GridColDef[] = [
    {
      field: "Company Name",
      flex: 1,
    },
    {
      field: "Company Code ",
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
      field: "Address",
      flex: 1,
    },
    {
      field: "Action",
      flex: 1,
    },
  ];

  const { data: complayList } = useQuery({
    queryKey: ["GET_ALL_COMPANY_USERS"],
    queryFn: () => axiosInstance.get(`/company-list/`),
  });

  console.log("", complayList?.data);

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
            Company List
          </Typography>
        </Grid>
        <Grid size={12}>
          <SimpleTable columns={columns} rows={complayList?.data || []} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyMaster;
