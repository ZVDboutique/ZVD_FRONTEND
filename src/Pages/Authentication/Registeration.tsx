import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import signUPImg from "../../assets/signUp.png";
import zvdLogo from "../../assets/zvLogo.svg";
import AuthLayout from "../../Layouts/AuthLayout";
import { RegisterRequest } from "../../Types/auth.types";

const Registration = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<RegisterRequest>({
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

  const { mutate, isPending } = useMutation({
    mutationFn: (data: RegisterRequest) => axios.post(`api/login`, data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/kyc-verification");
    },
    onError: (error) => {
      console.log("🚀 ~ Login ~ error:", error);
    },
  });

  const onSubmit = (data: RegisterRequest) => {
    mutate(data);
  };

  return (
    <AuthLayout image={signUPImg}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "90%", height: "100%" }}
      >
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
          <Grid size={12} textAlign={"center"}>
            <Typography fontWeight={600}>User Details</Typography>
          </Grid>
          <Grid size={12} container height={"fit-content"} spacing={2}>
            <Grid size={6}>
              <Controller
                name="firstName"
                control={control}
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
                control={control}
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
                control={control}
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
                control={control}
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
                control={control}
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
                control={control}
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
                control={control}
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
                control={control}
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
                control={control}
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
                // type="submit"
                variant="outlined"
                disabled={isPending}
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
                // type="submit"
                variant="contained"
                disabled={isPending}
                size="large"
                sx={{ mt: 3 }}
                endIcon={<GoArrowRight />}
                onClick={() => {
                  navigate(`/kyc-verification`);
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default Registration;
