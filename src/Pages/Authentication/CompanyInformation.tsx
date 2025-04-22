import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import signUPImg from "../../assets/signUp.png";
import zvdLogo from "../../assets/zvLogo.svg";
import AuthLayout from "../../Layouts/AuthLayout";
import { CompanyInformationInterface } from "../../Types/auth.types";

const CompanyInformation = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<CompanyInformationInterface>({
    defaultValues: {
      companyAddress: "",
      companyContact: "",
      companyEmail: "",
      companyName: "",
      contactPersonEmail: "",
      contactPersonName: "",
      contactPersonPhone: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: CompanyInformationInterface) =>
      axios.post(`api/login`, data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/kyc-verification");
    },
    onError: (error) => {
      console.log("🚀 ~ Login ~ error:", error);
    },
  });

  const onSubmit = (data: CompanyInformationInterface) => {
    mutate(data);
  };

  return (
    <AuthLayout image={signUPImg}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "90%", height: "100%" }}
      >
        <Grid container justifyContent={"space-between"} height={"100%"} p={2}>
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
            <Typography fontWeight={600}>Company Information</Typography>
          </Grid>
          <Grid size={12} textAlign={"center"}>
            <FormControlLabel
              control={<Switch />}
              label="Part of Company"
              labelPlacement="start"
            />
          </Grid>
          <Grid
            size={12}
            container
            height={"fit-content"}
            spacing={2}
            maxHeight={"calc(100vh - 250px)"}
            overflow={"auto"}
          >
            <Grid size={12}>
              <Controller
                name="companyName"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Company Name"
                      label="Company Name"
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Grid>
            <Grid size={12}>
              <Controller
                name="companyAddress"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Company Address"
                      label="Company Address"
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Grid>
            <Grid size={6}>
              <Controller
                name="companyEmail"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Company Email"
                      label="Company Email"
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Grid>
            <Grid size={6}>
              <Controller
                name="companyContact"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Company Contact"
                      label="Company Contact"
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Grid>
            <Grid size={12}>
              <Controller
                name="contactPersonName"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Contact Person Name"
                      label="Contact Person Name"
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Grid>
            <Grid size={6}>
              <Controller
                name="contactPersonEmail"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Contact Person Email"
                      label="Contact Person Email"
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Grid>
            <Grid size={12}>
              <Controller
                name="contactPersonPhone"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Contact Person Phone"
                      label="Contact Person Phone"
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
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography>
                Would you like to receive updates and notifications?
              </Typography>
              <Switch />
            </Grid>
          </Grid>
          <Grid size={12} textAlign={"right"}>
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default CompanyInformation;
