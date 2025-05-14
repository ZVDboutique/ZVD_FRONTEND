import { LoadingButton } from "@mui/lab";
import { Box, Grid, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../Utils/axios";

const UserConfirmation = () => {
  const navigate = useNavigate();

  const { search } = useLocation();

  const token = new URLSearchParams(search).get("token");

  const id = new URLSearchParams(search).get("id");

  const { handleSubmit } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: { token: any; id: any }) =>
      axiosInstance.get(
        `${import.meta.env.VITE_APP_BASE_URL}/SignupRequest/verify`,
        { params: { data } },
      ),
    onSuccess: () => {
      navigate(`/login`);
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong.Please try again.");
    },
  });

  return (
    <form
      onSubmit={handleSubmit(() => {
        mutate({
          token: token,
          id: id,
        });
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
            <Typography color="secondary" fontWeight={900} fontSize={20}>
              User Verification
            </Typography>
          </Grid>
          <Grid size={12} textAlign={"center"}>
            <Typography color="secondary">
              Thank you for registering with us now you are jus 1 step away.
              Click on the verify link and proceed towards login and continue
              your journey
            </Typography>
          </Grid>
          <Grid size={12}>
            <LoadingButton
              fullWidth
              loading={isLoading}
              type="submit"
              variant="contained"
              size="large"
            >
              Verify Now
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default UserConfirmation;
