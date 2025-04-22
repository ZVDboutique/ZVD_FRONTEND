import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiSolidLock } from "react-icons/bi";
import { TiUser } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import zvdLogo from "../../assets/zvLogo.svg";
import AuthLayout from "../../Layouts/AuthLayout";
import { LoginRequest } from "../../Types/auth.types";
import ForgotpasswordModal from "./ForgotpasswordModal";

const Login = () => {
  const navigate = useNavigate();

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const { handleSubmit, control } = useForm<LoginRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginRequest) => axios.post(`api/login`, data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/");
    },
    onError: (error) => {
      console.log("🚀 ~ Login ~ error:", error);
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
          <Grid size={12} container height={"fit-content"} spacing={4}>
            <Grid size={12}>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "end",
                        gap: 1,
                        borderBottom: "solid 1px",
                      }}
                    >
                      <TiUser size={35} />
                      <TextField
                        {...field}
                        fullWidth
                        variant="standard"
                        placeholder="Enter your email"
                        label="Email"
                        type="email"
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
                name="password"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "end",
                        borderBottom: "solid 1px",
                      }}
                    >
                      <BiSolidLock size={35} />
                      <TextField
                        {...field}
                        fullWidth
                        variant="standard"
                        placeholder="Enter your password"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isPending}
                size="large"
                sx={{ mt: 3 }}
              >
                Sign In
              </Button>
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
