import {
  Box,
  Grid,
  IconButton,
  Modal,
  ModalProps,
  Typography,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { theme } from "../Utils/theme";
import Loader from "./Loader";

interface SimpleModalProps {
  setOpen?: any;
  modalTitle: string;
  maxHeight?: string;
  children: any;
  width?: string | number;
  subTitle?: any;
  footer?: any;
  titleComponent?: any;
  closeBtn?: any;
  escClose?: boolean;
  onCloseModal?: any;
  loading?: boolean;
}

const SimpleModal = (props: ModalProps & SimpleModalProps) => {
  const {
    setOpen,
    children,
    width,
    footer,
    modalTitle,
    titleComponent,
    subTitle,
    closeBtn = true,
    escClose = true,
    onCloseModal,
    loading,
    maxHeight,
  } = props;

  return (
    <Modal
      {...props}
      onClose={() => {
        if (escClose) setOpen(false);
      }}
      style={{ borderRadius: 10 }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0,
        }}
      >
        <Grid
          container
          width={width || "50%"}
          className="content-grid"
          style={{
            padding: 16,
            borderRadius: 10,
          }}
          bgcolor={"#f5f5f5"}
        >
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              color={theme.palette.dark.main}
              fontSize={18}
              fontWeight={700}
              whiteSpace={"nowrap"}
            >
              {modalTitle}
              {subTitle && (
                <Typography
                  color={theme.palette.primary.main}
                  fontSize={14}
                  fontWeight={400}
                >
                  {subTitle}
                </Typography>
              )}
            </Typography>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {titleComponent}
              {closeBtn && (
                <IconButton
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    onCloseModal && onCloseModal();
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
                  <RxCross2 size={20} />
                </IconButton>
              )}
            </span>
          </Grid>

          <Grid
            size={12}
            p={2}
            my={2}
            borderRadius={3}
            bgcolor={"#fff"}
            maxHeight={maxHeight || "400px"}
            overflow={"auto"}
            sx={{
              "& .MuiTableContainer-root": {
                width: "unset",
              },
            }}
          >
            {loading ? <Loader /> : children}
          </Grid>

          {footer && (
            <Grid
              size={12}
              justifyContent={"flex-end"}
              display={"flex"}
              gap="10px"
            >
              {footer}
            </Grid>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default SimpleModal;
