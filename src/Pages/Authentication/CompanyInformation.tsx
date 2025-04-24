import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { GoArrowRight } from "react-icons/go";
import zvdLogo from "../../assets/zvLogo.svg";
import { RegisterRequest } from "../../Types/auth.types";

const CompanyInformation = () => {
  const form = useFormContext<RegisterRequest>();

  return (
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
                  placeholder="Enter your Contact Person Email"
                  label="Contact Person Email"
                  error={!!error}
                  helperText={error?.message}
                />
              );
            }}
          />
        </Grid>
        <Grid size={6}>
          <Controller
            name="contactPersonPhone"
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
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
          endIcon={<GoArrowRight />}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default CompanyInformation;
