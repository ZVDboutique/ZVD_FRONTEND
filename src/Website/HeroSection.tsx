import { Grid } from "@mui/material";
import heroSectionBg from "../assets/heroSectionBg.svg";
import heroSectionDiamond from "../assets/heroSectionDiamond.svg";
import zvdLogo from "../assets/zvLogo.svg";

const HeroSection = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${heroSectionBg})`,
        bgcolor: "#90D5FF33",
        pl: {
          xs: 5,
          md: 7,
        },
        pt: {
          xs: 5,
          md: 7,
        },
        borderRadius: 6,
      }}
    >
      <Grid size={12}>
        <img src={zvdLogo} width={200} />
      </Grid>
      <Grid size={12} textAlign={"right"}>
        <img
          src={heroSectionDiamond}
          style={{
            transform: " scaleX(-1)",
            borderRadius: 32,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
