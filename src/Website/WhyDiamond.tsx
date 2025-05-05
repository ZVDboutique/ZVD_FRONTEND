import { Card, CardContent, Grid, Typography } from "@mui/material";
import heroSectionBg from "../assets/heroSectionBg.svg";
import qualityImg from "../assets/quality.svg";
import valueofMoneyImg from "../assets/valueOfMoney.svg";

const WhyDiamond = () => {
  const data = [
    {
      title: "Quality and Purity",
      icon: qualityImg,
      description:
        "Lab-grown diamonds possess the same physical, chemical, and optical properties as mined diamonds. They are graded by the same standards, ensuring you get a diamond of exceptional quality and clarity.",
    },
    {
      title: "Value for Money",
      description:
        "Enjoy the luxury of diamonds at a fraction of the cost. Lab-grown diamonds offer significant savings, allowing you to invest in a higher quality diamond or a larger carat size for the same price as a mined diamond.",
      icon: valueofMoneyImg,
    },
    {
      title: "Certified",
      description:
        "Lab-grown diamonds are certified by reputable institutions such as GIA, IGI, and GCAL. This ensures that you can trust their authenticity and always receive a genuine product without any risk of fraud.",
      icon: qualityImg,
    },
    {
      title: "Ethical Assurance",
      description:
        "Say goodbye to conflict diamonds. Our lab-grown diamonds are 100% conflict-free, ensuring that your purchase does not contribute to unethical labor practices or financing of conflicts.",
      icon: qualityImg,
    },
    {
      title: "Environmental Impact",
      description:
        "Our diamonds are created with minimal environmental disruption compared to traditional mining. This means no destructive mining practices, reduced carbon footprint, and a commitment to preserving natural habitats.",
      icon: qualityImg,
    },
    {
      title: "Innovative and Modern",
      description:
        "Lab-grown diamonds are at the forefront of technological innovation. Embrace the future with a diamond that symbolizes progress, sustainability, and modern elegance.",
      icon: qualityImg,
    },
  ];

  return (
    <Grid
      container
      spacing={3}
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
      <Grid
        size={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography
          textAlign={"center"}
          fontSize={45}
          fontWeight={700}
          color="#123449"
        >
          Why Choose Lab-Grown Diamonds?
        </Typography>
        <Typography
          textAlign={"center"}
          width={"50%"}
          fontSize={22}
          color="#464444"
        >
          These are chemically identical to mined diamonds, providing a more
          ethical and sustainable alternative.
        </Typography>
      </Grid>
      {data?.map((d) => {
        return (
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ minHeight: 310, borderRadius: 3, boxShadow: "none" }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid size={"auto"}>
                    <div
                      style={{
                        height: 80,
                        width: 80,
                        background: "#90D5FF33",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 16,
                      }}
                    >
                      <img src={d.icon} height={"60%"} width={"60%"} />
                    </div>
                  </Grid>
                  <Grid
                    size={"auto"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography
                      textAlign={"center"}
                      fontSize={25}
                      fontWeight={700}
                      color="#123449"
                    >
                      {d.title}
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    {" "}
                    <Typography fontSize={22} color="#464444">
                      {d.description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default WhyDiamond;
