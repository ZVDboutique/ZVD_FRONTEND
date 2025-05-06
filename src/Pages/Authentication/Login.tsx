import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import zvdLogo from "../../assets/zvLogo.svg";
import AuthLayout from "../../Layouts/AuthLayout";
import { LoginRequest } from "../../Types/auth.types";
import axiosInstance from "../../Utils/axios";
import ForgotpasswordModal from "./ForgotpasswordModal";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, control } = useForm<LoginRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: LoginRequest) =>
      axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, data),
    onSuccess: (data) => {
      axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${data.data.token}`;
        return config;
      });
      localStorage.setItem("token", data.data.token);
      navigate("/dashboard");
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong.Please try again.");
    },
  });

  const onSubmit = (data: LoginRequest) => {
    mutate(data);
  };

  return (
    <AuthLayout image={loginImg}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "60%", height: "100%" }}
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
          <Grid size={12} container height={"fit-content"} spacing={2}>
            <Grid size={12}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter a email",
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your email"
                      label="Email"
                      type="email"
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
                rules={{
                  required: {
                    value: true,
                    message: "Please enter a password",
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      error={!!error}
                      helperText={error?.message}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <HiEyeOff size={20} />
                              ) : (
                                <HiEye size={20} />
                              )}
                            </IconButton>
                          ),
                        },
                      }}
                    />
                  );
                }}
              />
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <FormControlLabel control={<Switch />} label="Remember me" />
                <Button
                  color="dark"
                  onClick={() => {
                    setShowForgotPasswordModal(true);
                  }}
                >
                  Forgot Password
                </Button>
              </Box>
            </Grid>
            <Grid size={12}>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                loading={isLoading}
                size="large"
                sx={{ mt: 3 }}
              >
                Sign In
              </LoadingButton>
            </Grid>
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography>
              Don’t have an account?{" "}
              <Link
                to={"/sign-up"}
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
      {showForgotPasswordModal && (
        <ForgotpasswordModal
          open={showForgotPasswordModal}
          setOpen={setShowForgotPasswordModal}
        />
      )}
    </AuthLayout>
  );
};

export default Login;
