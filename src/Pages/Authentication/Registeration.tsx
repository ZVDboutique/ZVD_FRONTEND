import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import signUPImg from "../../assets/signUp.png";
import zvdLogo from "../../assets/zvLogo.svg";
import AuthLayout from "../../Layouts/AuthLayout";
import { RegisterRequest } from "../../Types/auth.types";
import CompanyInformation from "./CompanyInformation";
import KycVerfication from "./KycVerfication";

const Registration = () => {
  const navigate = useNavigate();

  const { search } = useLocation();
  console.log("🚀 ~ Registration ~ location:", search);
  const form = useForm<RegisterRequest>({
    defaultValues: {
      primaryEmail: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      primaryContact: "",
      secondaryContact: "",
      secondaryEmail: "",
      whatsAppNumber: "",
    },
  });

  const onSubmit = (data: RegisterRequest) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    navigate(`/sign-up?kyc-verification`);
  };

  return (
    <AuthLayout image={signUPImg}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          style={{ width: "90%", height: "100%" }}
        >
          {search === "" && (
            <Grid
              container
              spacing={2}
              justifyContent={"space-between"}
              height={"100%"}
            >
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
              <Grid size={12} container height={"fit-content"} spacing={2}>
                <Grid size={12} textAlign={"center"}>
                  <Typography fontWeight={600}>User Details</Typography>
                </Grid>
                <Grid size={6}>
                  <Controller
                    name="firstName"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <TextField
                          {...field}
                          fullWidth
                          variant="standard"
                          placeholder="Enter your First Name"
                          label="First Name"
                          error={!!error}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <Controller
                    name="lastName"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <TextField
                          {...field}
                          fullWidth
                          variant="standard"
                          placeholder="Enter your Last name"
                          label="Last name"
                          error={!!error}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <Controller
                    name="primaryEmail"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <TextField
                          {...field}
                          fullWidth
                          variant="standard"
                          placeholder="Enter your Primary Email"
                          label="Primary Email"
                          error={!!error}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <Controller
                    name="secondaryEmail"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <TextField
                          {...field}
                          fullWidth
                          variant="standard"
                          placeholder="Enter your Secondary Email"
                          label="Secondary Email"
                          error={!!error}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <Controller
                    name="primaryContact"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <TextField
                          {...field}
                          fullWidth
                          variant="standard"
                          placeholder="Enter your Primary Contact"
                          label="Primary Contact"
                          error={!!error}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid size={6}>
                  <Controller
                    name="secondaryContact"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <TextField
                          {...field}
                          fullWidth
                          variant="standard"
                          placeholder="Enter your Secondary Contact"
                          label="Secondary Contact"
                          error={!!error}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <Controller
                    name="whatsAppNumber"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <TextField
                          {...field}
                          fullWidth
                          variant="standard"
                          placeholder="Enter your Whatsapp Number"
                          label="Whatsapp Number"
                          error={!!error}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <TextField
                          {...field}
                          fullWidth
                          variant="standard"
                          placeholder="Enter your password"
                          label="Password"
                          type="password"
                          error={!!error}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <Controller
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <TextField
                          {...field}
                          fullWidth
                          variant="standard"
                          placeholder="Enter your Confirm Password"
                          label="Confirm Password"
                          type="password"
                          error={!!error}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Grid>
                <Grid
                  size={12}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    color="dark"
                    sx={{ mt: 3 }}
                    startIcon={<GoArrowLeft />}
                    onClick={() => {
                      navigate(`/login`);
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
            </Grid>
          )}
          {search === "?kyc-verification" && <KycVerfication />}
          {search === "?company-information" && <CompanyInformation />}
        </form>
      </FormProvider>
    </AuthLayout>
  );
};

export default Registration;
