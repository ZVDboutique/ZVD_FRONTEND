import { Grid, Typography } from "@mui/material";
import heroSectionBg from "../assets/heroSectionBg.svg";

const HaveQuestion = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${heroSectionBg})`,
        bgcolor: "#90D5FF33",
        p: {
          xs: 5,
          md: 7,
        },

        borderRadius: 6,
      }}
    >
      <Grid size={12} textAlign={"center"} px={20}>
        <Typography color="#123449" fontWeight={800} fontSize={32}>
          Have Questions?
        </Typography>
        <Typography color="#464444" fontSize={22}>
          We're here to help. Reach out to us via email, phone, or the contact
          form, and we'll get back to you as soon as possible.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HaveQuestion;
