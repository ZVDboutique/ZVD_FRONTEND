import { Box } from "@mui/material";
import AboutLbd from "./AboutLbd";
import GemsSection from "./GemsSection";
import HeroSection from "./HeroSection";
import WhyDiamond from "./WhyDiamond";

const Website = () => {
  return (
    <Box p={6} overflow={"hidden auto"}>
      <HeroSection />
      <AboutLbd />
      <WhyDiamond />
      <GemsSection />
    </Box>
  );
};

export default Website;
