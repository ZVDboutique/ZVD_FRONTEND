import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdPassword } from "react-icons/md";
import axiosInstance from "../../Utils/axios";

const ForgotpasswordPage = () => {
  const { handleSubmit, control } = useForm<{
    password: any;
    confirmPassword: any;
  }>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: { password: any; confirmPassword: any }) =>
      axiosInstance.post(
        `${import.meta.env.VITE_APP_BASE_URL}/SignupRequest/forgot-password`,
        data,
      ),
    onSuccess: () => {
      toast.success("Password reset link sent to your email.");
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong.Please try again.");
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        mutate(values);
      })}
    >
      <Box
        sx={{
          height: "100vh ",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          p={4}
          borderRadius={3}
          width={"40%"}
          spacing={2}
          boxShadow={"0 0 11px -1px #00000055"}
          sx={{
            width: {
              xs: "90%",
              md: "40%",
            },
          }}
        >
          <Grid size={12} textAlign={"center"}>
            <img src="/zvLogo.svg" width={150} />
          </Grid>
          <Grid size={12} textAlign={"center"}>
            <Typography>Reset Password</Typography>
          </Grid>
          <Grid size={12}>
            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter a email",
                },
              }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      borderBottom: "solid 1px",
                      gap: 1,
                    }}
                  >
                    <MdPassword size={35} />
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Password"
                      label="Password"
                      type="password"
                      error={!!error}
                      helperText={error?.message}
                      sx={{
                        "& .MuiInput-root:before": { borderBottom: "none" },
                        "& .MuiInput-root:after": { borderBottom: "none" },
                        "& .MuiInput-root:hover:not(.Mui-disabled):before": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  </Box>
                );
              }}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter a email",
                },
              }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      borderBottom: "solid 1px",
                      gap: 1,
                    }}
                  >
                    <MdPassword size={35} />
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Confirm Password"
                      label="Confirm Password"
                      type="password"
                      error={!!error}
                      helperText={error?.message}
                      sx={{
                        "& .MuiInput-root:before": { borderBottom: "none" },
                        "& .MuiInput-root:after": { borderBottom: "none" },
                        "& .MuiInput-root:hover:not(.Mui-disabled):before": {
                          borderBottom: "none",
                        },
                      }}
                    />
                  </Box>
                );
              }}
            />
          </Grid>
          <Grid size={12}>
            <LoadingButton
              fullWidth
              loading={isLoading}
              type="submit"
              variant="contained"
              size="large"
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default ForgotpasswordPage;
