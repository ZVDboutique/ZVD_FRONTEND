import { Grid, Typography } from "@mui/material";
import zvdLogo from "../assets/diamondSection2.svg";

const AboutLbd = () => {
  return (
    <Grid container>
      <Grid size={6} textAlign={"center"}>
        <img src={zvdLogo} />
      </Grid>
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
          About Buy LGD
        </Typography>
        <Typography textAlign={"right"} fontSize={22} color="#464444">
          At Buy LGD, we revolutionize the diamond industry by providing
          stunning, ethically-sourced lab-grown diamonds. Our commitment to
          quality and sustainability ensures that every diamond is not only
          beautiful but also environmentally friendly and conflict-free.
        </Typography>
        <Typography textAlign={"right"} fontSize={22} color="#464444">
          From carbon seed to stunning gemstone, our diamonds are crafted with
          precision and care. Learn more about the science and artistry behind
          each diamond.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutLbd;
