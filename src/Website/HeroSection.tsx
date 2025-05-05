import { Grid, Typography } from "@mui/material";
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
          lg: 30,
          xl: 60,
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

      <Grid
        size={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        flexDirection={"column"}
      >
        <Typography color="#123449" fontWeight={600} fontSize={65}>
          Discover the Future of
        </Typography>
        <Typography color="#123449" fontWeight={800} fontSize={80}>
          Diamonds
        </Typography>
        <Typography color="#123449" fontWeight={600}>
          Sustainable, Ethical, and Stunning Lab-Grown Diamonds
        </Typography>
      </Grid>
      <Grid size={6}>
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
