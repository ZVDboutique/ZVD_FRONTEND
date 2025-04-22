import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grid,
  IconButton,
  Popper,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import signUPImg from "../../assets/signUp.png";
import zvdLogo from "../../assets/zvLogo.svg";
import AuthLayout from "../../Layouts/AuthLayout";
import { KYCInterface } from "../../Types/auth.types";
import KYCOtpConfirmation from "./KYCOtpConfirmation";

const KycVerfication = () => {
  const navigate = useNavigate();

  const [showOtpConfirmationModal, setShowOtpConfirmationModal] =
    useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const { handleSubmit, control, setValue, getValues } = useForm<KYCInterface>({
    defaultValues: {
      kycType: "",
      kycTypeNumber: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: KYCInterface) => axios.post(`api/login`, data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/kyc-verification");
    },
    onError: (error) => {
      console.log("🚀 ~ Login ~ error:", error);
    },
  });

  const onSubmit = (data: KYCInterface) => {
    mutate(data);
  };

  return (
    <AuthLayout image={signUPImg}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "80%", height: "100%" }}
      >
        <Grid container justifyContent={"space-between"} height={"100%"}>
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
          <Grid size={12} container height={"fit-content"} spacing={1}>
            <Grid size={12} textAlign={"center"}>
              <Typography fontWeight={600}>
                KYC & Verification Details
              </Typography>
            </Grid>
            <Grid size={12}>
              <Controller
                name="kycType"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Select Document"
                      label="Select Document"
                      error={!!error}
                      helperText={error?.message}
                      slotProps={{
                        input: {
                          readOnly: true,
                          endAdornment: (
                            <IconButton onClick={handleClick}>
                              <MdOutlineKeyboardArrowDown />{" "}
                            </IconButton>
                          ),
                        },
                      }}
                    />
                  );
                }}
              />
            </Grid>
            <Grid size={12}>
              <Controller
                name="kycTypeNumber"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      placeholder="Enter your Last name"
                      label={`${getValues("kycType")} Number`}
                      error={!!error}
                      helperText={error?.message}
                    />
                  );
                }}
              />
            </Grid>
          </Grid>
          <Grid
            size={12}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
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
                navigate(`/sign-up`);
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
                setShowOtpConfirmationModal(true);
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box sx={{ borderRadius: 2, bgcolor: "#B0DBF9" }}>
            <ButtonGroup orientation="vertical">
              {["Adhaar Card", "PAN Card"].map((dataItem) => (
                <Button
                  sx={{
                    background:
                      dataItem === getValues("kycType") ? "#123449" : "#B0DBF9",
                    color:
                      dataItem === getValues("kycType") ? "#B0DBF9" : "#123449",
                  }}
                  fullWidth
                  onClick={() => {
                    setAnchorEl(null);
                    setValue("kycType", dataItem);
                  }}
                >
                  {dataItem}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </ClickAwayListener>
      </Popper>

      {showOtpConfirmationModal && (
        <KYCOtpConfirmation
          open={showOtpConfirmationModal}
          setOpen={setShowOtpConfirmationModal}
        />
      )}
    </AuthLayout>
  );
};

export default KycVerfication;
