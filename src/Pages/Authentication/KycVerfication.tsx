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
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import zvdLogo from "../../assets/zvLogo.svg";
import { RegisterRequest } from "../../Types/auth.types";
import KYCOtpConfirmation from "./KYCOtpConfirmation";

const KycVerfication = () => {
  const form = useFormContext<RegisterRequest>();

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

  return (
    <>
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
            <Typography fontWeight={600}>KYC & Verification Details</Typography>
          </Grid>
          <Grid size={12}>
            <Controller
              name="kycType"
              control={form.control}
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
              control={form.control}
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextField
                    {...field}
                    fullWidth
                    variant="standard"
                    placeholder="Enter your Last name"
                    label={`${form.getValues("kycType")} Number`}
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
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box sx={{ borderRadius: 2, bgcolor: "#B0DBF9" }}>
            <ButtonGroup orientation="vertical">
              {["Adhaar Card", "PAN Card"].map((dataItem) => (
                <Button
                  sx={{
                    background:
                      dataItem === form.getValues("kycType")
                        ? "#123449"
                        : "#B0DBF9",
                    color:
                      dataItem === form.getValues("kycType")
                        ? "#B0DBF9"
                        : "#123449",
                  }}
                  fullWidth
                  onClick={() => {
                    setAnchorEl(null);
                    form.setValue("kycType", dataItem);
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
    </>
  );
};

export default KycVerfication;
