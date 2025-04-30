import { Grid } from "@mui/material";
import { default as gemsImages } from "../assets/allGems.svg";
import heroSectionBg from "../assets/heroSectionBg.svg";
import heroSectionDiamond from "../assets/heroSectionDiamond.svg";

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
        pb: {
          xs: 5,
          md: 18,
        },
        borderRadius: 6,
      }}
      position={"relative"}
    >
      <img
        src={gemsImages}
        style={{
          position: "absolute",
          left: 0,
          bottom: -200,
          zIndex: 999,
        }}
        width={"100%"}
      />

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
