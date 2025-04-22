import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const KYCOtpConfirmation = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (d: boolean) => void;
}) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
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
              Verify Aadhar OTP
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
            <Alert severity="success" icon={<div />}>
              Aadhar card has sent temporary OTP to your mobile mobile ending in
              ******9293 (valid for 10 mins)
            </Alert>
          </Grid>
          <Grid size={12}>
            <Typography fontWeight={600}>
              Please enter OTP to complete verification
            </Typography>
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              sx={{
                background: "#73C7F933",
              }}
            />
          </Grid>
          <Grid size={12}>
            <Button fullWidth variant="contained" size="large">
              Submit
            </Button>
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography>
              Didn’t get the OTP?
              <Link
                to={"/sign-up"}
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Resend OTP
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default KYCOtpConfirmation;
