import { Box } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../Utils/theme";
import authBg from "../assets/authbg.svg";

interface AuthLayoutProps {
  children: ReactNode;
  image: string;
}

const AuthLayout = ({ children, image }: AuthLayoutProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        style={{
          aspectRatio: "2:12",
          width: "60%",
          height: "-webkit-fill-available",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
