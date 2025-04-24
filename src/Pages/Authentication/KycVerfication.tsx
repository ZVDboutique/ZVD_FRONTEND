import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import zvdLogo from "../../assets/zvLogo.svg";
import { RegisterRequest } from "../../Types/auth.types";
import KYCOtpConfirmation from "./KYCOtpConfirmation";

const KycVerfication = () => {
  const form = useFormContext<RegisterRequest>();

  const navigate = useNavigate();

  const kycOptions = [
    "Adhaar Card",
    "Passport",
    "PAN Card",
    "Driving License",
    "Voter ID",
  ];

  const showOtpConfirmationModal = form.watch("showAdharConfiramtionModal");

  return (
    <>
      <Grid container justifyContent={"space-between"} height={"100%"}>
        <Grid size={12} textAlign={"center"}>
          <img
            src={zvdLogo}
            style={{
              width: "30%",
              height: "-webkit-fill-available",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
        <Grid size={12} container height={"fit-content"} spacing={1}>
          <Grid size={12} textAlign={"center"}>
            <Typography fontWeight={600}>KYC & Verification Details</Typography>
          </Grid>
          <Grid size={12}>
            <Controller
              name="doc_type_name"
              control={form.control}
              rules={{
                required: {
                  value: true,
                  message: "",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Autocomplete
                  value={value}
                  onChange={(_, newValue) => {
                    onChange(newValue);
                  }}
                  options={kycOptions}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      variant="standard"
                      placeholder="Select Document"
                      label="Select Document"
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              name="panCardNumber"
              control={form.control}
              rules={{
                required: {
                  value: true,
                  message: "",
                },
              }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextField
                    {...field}
                    fullWidth
                    variant="standard"
                    placeholder="Enter Document Number"
                    label={`Document Number`}
                    error={!!error}
                    helperText={error?.message}
                  />
                );
              }}
            />
          </Grid>
        </Grid>
        <Grid
          size={12}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            variant="outlined"
            size="large"
            color="dark"
            sx={{ mt: 3 }}
            startIcon={<GoArrowLeft />}
            onClick={() => {
              navigate(`/sign-up`);
            }}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            endIcon={<GoArrowRight />}
          >
            Next
          </Button>
        </Grid>
      </Grid>

      {showOtpConfirmationModal && (
        <KYCOtpConfirmation
          open={showOtpConfirmationModal}
          onClose={() => form.setValue("showAdharConfiramtionModal", false)}
        />
      )}
    </>
  );
};

export default KycVerfication;
