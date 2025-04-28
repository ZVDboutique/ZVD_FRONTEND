import { Grid, Typography } from "@mui/material";
import zvdLogo from "../assets/megnifiGems.svg";

const GemsSection = () => {
  return (
    <Grid container>
      <Grid
        size={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={3}
      >
        <Typography
          textAlign={"right"}
          fontSize={45}
          fontWeight={700}
          color="#123449"
        >
          Virtual Diamond Showcase
        </Typography>
        <Typography textAlign={"right"} fontSize={22} color="#464444">
          Enhance your website with our lab-grown diamond collection, giving you
          full customization over size, quality, shapes, and more through our
          state-of-the-art, low-latency APIs.
        </Typography>
        <Typography textAlign={"right"} fontSize={22} color="#464444">
          From carbon seed to stunning gemstone, our diamonds are crafted with
          precision and care. Learn more about the science and artistry behind
          each diamond.
        </Typography>
      </Grid>
      <Grid size={6} textAlign={"right"}>
        <img src={zvdLogo} />
      </Grid>
    </Grid>
  );
};

export default GemsSection;
