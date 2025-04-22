import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { LoginRequest } from "../../Types/auth.types";

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

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <form
        onSubmit={handleSubmit((values) => {
          console.log("🚀 ~ <formonSubmit={handleSubmit ~ values:", values);
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
              <Button fullWidth type="submit" variant="contained" size="large">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Modal>
  );
};

export default ForgotpasswordModal;
