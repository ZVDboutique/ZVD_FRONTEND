import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import heroSectionBg from "../../assets/heroSectionBg.svg";
import zvdLogo from "../../assets/zvLogo.svg";
import { Show } from "../../Components/Show";
import { DiamondFilterInterface } from "../../Interface/diamondFilterinterface";
import { useAppContext } from "../../Utils/appContext";
import ProfileModal from "./ProfileModal";

const HeroSecion = ({
  filtersParams,
  setFilterParams,
}: {
  setFilterParams: (a: DiamondFilterInterface) => void;
  filtersParams: DiamondFilterInterface;
}) => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const { userData } = useAppContext();

  const diamondTypeData = [
    {
      name: "Natural Diamonds",
      img: "naturalDiamonds",
      type: "naturalDiamonds",
      description:
        "Natural diamonds are rare, Earth-formed gems with timeless brilliance",
    },
    {
      name: "Lab Grown Diamonds",
      img: "labGrown",
      type: "labGrownDiamonds",
      description:
        "Lab-grown diamonds are ethically made, sharing the same brilliance and durability as natural diamonds.",
    },
    {
      name: "Colored Gemstones",
      img: "coloredGems",
      type: "coloredGemstones",
      description:
        "Colored gemstones are vibrant, natural gems prized for their beauty and rarity.",
    },
    {
      name: "Jewelry",
      img: "jewelery",
      type: "jewelry",
      description:
        "Jewelry is elegant, crafted adornment that enhances beauty and style.",
    },
    {
      name: "Lab Grown Jewelry",
      img: "labRing",
      type: "labGrownJewelry",
      description:
        "Lab-grown jewelry is ethically crafted, offering beauty with sustainability.",
    },
  ];

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundImage: `url(${heroSectionBg})`,
          bgcolor: "#90D5FF33",
          borderRadius: 6,
        }}
        position={"relative"}
      >
        <Grid size={4}>
          <img src="/neckless.svg" alt="" />
        </Grid>
        <Grid
          size={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src={zvdLogo} alt="" />
        </Grid>
        <Grid
          size={4}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
        >
          <Box
            sx={{
              backdropFilter: "blur(10px)",
              bgcolor: "#73C7F933",
              borderRadius: "200px 0 0 200px",
              p: 3,
              mt: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Button
              fullWidth
              sx={{
                bgcolor: "#246A95",
                color: "#fff",
                borderRadius: 20,
                px: 5,
                py: 2,
              }}
              startIcon={<FaUser />}
              onClick={() => {
                setShowProfileModal(true);
              }}
            >
              {userData?.first_name} {"  "}
              {userData?.last_name}
            </Button>
          </Box>
          <img src="/fingureRing.svg" alt="" />
        </Grid>
        <Grid container size={12} spacing={3} mx={5}>
          {diamondTypeData.map((dataItem, index) => {
            return (
              <Grid size={12 / 5} key={index} position={"relative"}>
                <Card
                  sx={{
                    position: "absolute",
                    py: 1,
                    px: 3,
                    top: -20,
                    right: -10,
                    boxShadow: "0 0 30px -15px #000",
                    minWidth: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                      filtersParams?.type === dataItem.type
                        ? "#D2ECFB"
                        : "#fff",
                    color: "#123449",
                    transition: "all 0.3s",
                  }}
                >
                  {dataItem.name}
                </Card>
                <Card
                  sx={{
                    background:
                      filtersParams?.type === dataItem.type
                        ? "#123449"
                        : "#D2ECFB",
                    color:
                      filtersParams?.type === dataItem.type
                        ? "#fff"
                        : "#123449",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 2,
                    py: 4,
                    gap: 2,
                    boxShadow: "0 0 30px -15px #000",
                    transition: "all 0.3s",
                    minHeight: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 60,
                      width: 60,
                      borderRadius: 10,
                      transition: "all 0.3s",
                      background:
                        filtersParams?.type === dataItem.type
                          ? "#D2ECFB"
                          : "#fff",
                    }}
                  >
                    <img src={`/${dataItem.img}.svg`} alt="" />
                  </div>
                  <Typography textAlign={"center"} mt={"auto"} mb={"auto"}>
                    {dataItem.description}
                  </Typography>
                  <Button
                    sx={{
                      color: "#123449",
                      bgcolor: "#fff",
                      borderRadius: 100,
                      px: 5,
                      py: 1,
                    }}
                    onClick={() => {
                      setFilterParams({
                        type: dataItem.type,
                        shape: [],
                        caratMin: "",
                        caratMax: "",
                        color: [],
                        clarity: [],
                        cut: [],
                        priceMin: "",
                        priceMax: "",
                        fluorescenceIntensity: [],
                        lengthMin: "",
                        lengthMax: "",
                        widthMin: "",
                        widthMax: "",
                      });
                    }}
                  >
                    Select
                  </Button>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Show.When isTrue={showProfileModal}>
        <ProfileModal open={showProfileModal} setOpen={setShowProfileModal} />
      </Show.When>
    </>
  );
};

export default HeroSecion;
