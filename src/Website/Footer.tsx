import { Grid, Typography } from "@mui/material";
import gaiImage from "../assets/gai.svg";
import igiImage from "../assets/igi.svg";

const Footer = () => {
  return (
    <Grid container bgcolor={"#123449"} p={2} pr={0}>
      <Grid
        size={4}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography color="#fff" fontWeight={600} fontSize={40}>
          Certified By
        </Typography>{" "}
      </Grid>
      <Grid
        size={8}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        bgcolor={"#fff"}
        p={4}
        borderRadius={"20px 0 0 20px"}
      >
        <img src={igiImage} />
        <img src={gaiImage} />
      </Grid>
    </Grid>
  );
};

export default Footer;
