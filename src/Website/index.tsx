import { Box } from "@mui/material";
import AboutLbd from "./AboutLbd";
import Footer from "./Footer";
import GemsSection from "./GemsSection";
import HaveQuestion from "./HaveQuestion";
import Header from "./Header";
import HeroSection from "./HeroSection";
import WhyDiamond from "./WhyDiamond";

const Website = () => {
  return (
    <Box overflow={"hidden auto"}>
      <Box p={6} overflow={"hidden auto"} position={"relative"}>
        <Header />
        <HeroSection />
        <AboutLbd />
        <WhyDiamond />
        <GemsSection />
        <HaveQuestion />
      </Box>
      <Footer />
    </Box>
  );
};

export default Website;
