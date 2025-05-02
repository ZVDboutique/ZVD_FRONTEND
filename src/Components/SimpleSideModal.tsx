/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CircularProgress,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import { RxCross1 } from "react-icons/rx";
import { theme } from "../Utils/theme";

interface SimpleSideModalProps {
  children: React.ReactNode;
  setOpen?: any;
  open: boolean;
  loading?: boolean;
  width?: any;
  modalTitle: string | ReactNode;
  footerButton?: any;
  onClose?: any;
  titleComponent?: any;
}

const SimpleSideModal = (props: SimpleSideModalProps) => {
  const {
    children,
    setOpen,
    open,
    width,
    footerButton,
    titleComponent,
    modalTitle,
    onClose,
    loading,
  } = props;
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose || (() => setOpen(false))}
      PaperProps={{
        sx: {
          width: width,
        },
      }}
    >
      <Grid container height={"100%"}>
        <Grid
          p={1.5}
          size={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {typeof modalTitle === "string" ? (
            <Typography
              color={theme.palette.dark.main}
              fontSize={18}
              fontWeight={700}
              whiteSpace={"nowrap"}
            >
              {modalTitle}
            </Typography>
          ) : (
            modalTitle
          )}
          <span
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            {titleComponent}
            <IconButton
              onClick={() => {
                if (onClose) {
                  onClose();
                }
                setOpen(false);
              }}
              sx={{
                borderRadius: 6,
                background: "transparent",
                border: "none",
                "&:hover": {
                  background: "transparent",
                  border: "none",
                },
              }}
            >
              <RxCross1 size={20} />
            </IconButton>
          </span>
        </Grid>

        <Grid size={12} height="calc(100vh - 126px)" p={1.5} overflow={"auto"}>
          {loading ? <CircularProgress /> : children}
        </Grid>

        <Grid size={12} p={1.5}>
          {footerButton}
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default SimpleSideModal;
