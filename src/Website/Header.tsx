import { Button, Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import zvdLogo from "../assets/zvLogo.svg";

const Header = ({ showLogo = true }: { showLogo?: boolean }) => {
  const { pathname } = useLocation();
  return (
    <Grid
      container
      position={"absolute"}
      width={"100%"}
      maxHeight={86}
      zIndex={99}
      left={0}
      px={6}
      top={100}
    >
      {showLogo && (
        <Grid
          size={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src={zvdLogo} width={300} height={"auto"} />
        </Grid>
      )}
      <Grid size={3} />
      <Grid
        size={"grow"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={5}
        sx={{
          backdropFilter: "blur(10px)",
          bgcolor: "#73C7F933",
          borderRadius: "200px 0 0 200px",
        }}
      >
        <Link
          to={"/"}
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#222",
            textDecoration: "none",
            borderBottom: pathname === "/" ? "solid 2px" : "",
          }}
        >
          Home
        </Link>
        <Link
          to={"/about-us"}
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#222",
            textDecoration: "none",
            borderBottom: pathname === "/about-us" ? "solid 2px" : "",
          }}
        >
          About Us
        </Link>
        <Link
          to={"/contact-us"}
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#222",
            textDecoration: "none",
            borderBottom: pathname === "/contact-us" ? "solid 2px" : "",
          }}
        >
          Contact Us
        </Link>
        <Link
          to={"/our-services"}
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#222",
            textDecoration: "none",
            borderBottom: pathname === "/our-services" ? "solid 2px" : "",
          }}
        >
          Our Services
        </Link>
        <Button
          sx={{
            color: "#fff",
            bgcolor: "#123449",
            borderRadius: 100,
            px: 5,
            py: 2,
          }}
          href="/login"
        >
          Login{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
