import { Box, Grid, Typography } from "@mui/material";
import { GridColDef, useGridApiRef } from "@mui/x-data-grid";
import SimpleTable from "../../Components/SimpleTable";
import { SingleCompanyInterface } from "../../Interface/companyInterface";
import {
  handleConvertToCapitalized,
  handleRemoveUnderscore,
} from "../../Utils/helper";
import { useFetchQuery } from "../../Utils/useQueries";

const CompanyMaster = () => {
  const apiRef = useGridApiRef();

  const columns: GridColDef[] = [
    {
      field: "company_name",

      minWidth: 150,
    },
    {
      field: "contact_person_email",
      minWidth: 150,
    },
    {
      field: "company_contact",
      minWidth: 150,
    },
    {
      field: "company_email",
      minWidth: 150,
    },
    {
      field: "company_address",
      minWidth: 150,
    },
    {
      field: "contact_person_name",
      minWidth: 150,
    },
    {
      field: "contact_person_email",
      minWidth: 150,
    },
    {
      field: "contact_person_phone",
      minWidth: 150,
    },
    {
      field: "action",
      minWidth: 150,
    },
  ];

  const { data: complayList, isFetching } = useFetchQuery<{
    data: SingleCompanyInterface[];
  }>({
    key: ["GET_ALL_COMPANY_USERS"],
    route: `/Company`,
  });

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        background: "#73C7F933",
        border: `1px #73C7F9 solid`,
        width: "100%",
      }}
    >
      <Grid container spacing={1}>
        <Grid size={12}>
          <Typography fontWeight={600} fontSize={24}>
            Company List
          </Typography>
        </Grid>
        <Grid size={12}>
          <SimpleTable
            loading={isFetching}
            apiRef={apiRef}
            columns={columns?.map((d) => {
              return {
                ...d,
                headerName: handleConvertToCapitalized(
                  handleRemoveUnderscore(d.field),
                ),
              };
            })}
            rows={complayList?.data || []}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyMaster;
