import { Box, Grid, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import SimpleTable from "../../Components/SimpleTable";
import { ClientListInterface } from "../../Interface/clientInterface";
import { useFetchQuery } from "../../Utils/useQueries";

const ClientMaster = () => {
  const columns: GridColDef[] = [
    {
      field: "company_id",
      headerName: "Company Id",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
    {
      field: "username",
      headerName: "username",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
    {
      field: "first_name",
      headerName: "First Name",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
    {
      field: "last_name",
      headerName: "Last Name",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
    {
      field: "pan_card_number",
      headerName: "PAN",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
    {
      field: "primary_contact",
      headerName: "Primary Contact",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
    {
      field: "primary_email",
      headerName: "Primary Email",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
    {
      field: "secondary_contact",
      headerName: "Secondary Contact",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
    {
      field: " secondary_email",
      headerName: "Secondary Email",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
    {
      field: "whatsapp_number",
      headerName: "Whatsapp Number",
      minWidth: 150,
      valueGetter: (value) => value || "-",
    },
  ];

  const { data: clientList, isFetching } = useFetchQuery<{
    data: ClientListInterface[];
  }>({
    key: ["GET_ALL_CLIENT_USERS"],
    route: `/Customer`,
  });

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
          <SimpleTable
            columns={columns}
            rows={clientList?.data || []}
            loading={isFetching}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientMaster;
