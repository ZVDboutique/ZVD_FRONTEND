import { LoadingButton } from "@mui/lab";
import {
  Box,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { LoginRequest } from "../../Types/auth.types";
import axiosInstance from "../../Utils/axios";

const ForgotpasswordModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (d: boolean) => void;
}) => {
  const { handleSubmit, control } = useForm<LoginRequest>({
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginRequest) =>
      axiosInstance.post(
        `${import.meta.env.VITE_APP_BASE_URL}/SignupRequest/forgot-password`,
        data,
      ),
    onSuccess: () => {
      setOpen(false);
      toast.success("Password reset link sent to your email.");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong.Please try again.");
    },
  });

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
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
            background: "#12344944",
          }}
        >
          <Grid
            container
            bgcolor={"#ffffff"}
            p={4}
            borderRadius={3}
            width={"40%"}
            spacing={2}
          >
            <Grid size={12} display={"flex"} justifyContent={"space-between"}>
              <Typography fontWeight={600} fontSize={20}>
                Forgot Password
              </Typography>
              <IconButton
                onClick={() => {
                  setOpen(false);
                }}
              >
                <MdClose />
              </IconButton>
            </Grid>
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
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "end",
                        borderBottom: "solid 1px",
                        gap: 1,
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
              <LoadingButton
                fullWidth
                loading={isPending}
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
    </Modal>
  );
};

export default ForgotpasswordModal;
