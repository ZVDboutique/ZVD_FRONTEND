import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { DiamondFilterInterface } from "../../Interface/diamondFilterinterface";
import { useFetchQuery } from "../../Utils/useQueries";

const DiamondFilterModal = ({
  setFilterParams,
  filtersParams,
}: {
  filtersParams: DiamondFilterInterface;
  setFilterParams: (d: DiamondFilterInterface) => void;
}) => {
  const { data: shapesList } = useFetchQuery({
    key: ["GET_ALL_SHAPES_LIST"],
    route: `/Shape`,
  });

  const { data: clarityList } = useFetchQuery({
    key: ["GET_ALL_CLARITY_LIST"],
    route: `/Clarity`,
  });

  const { data: colorList } = useFetchQuery({
    key: ["GET_ALL_COLOR_LIST"],
    route: `/Color`,
  });

  const { data: cutList } = useFetchQuery({
    key: ["GET_ALL_CUTIST"],
    route: `/Cut`,
  });

  const { data: caratWeightList } = useFetchQuery({
    key: ["GET_ALL_PRICE"],
    route: `/Price`,
  });

  const { data: fluorescenceList } = useFetchQuery({
    key: ["GET_ALL_FLUORESCENE"],
    route: `/Fluorescence`,
  });

  const { data: measurementData } = useFetchQuery({
    key: ["GET_ALL_MEASUREMENT"],
    route: `/Measurement`,
  });

  console.log("🚀 ~ shapesList:", {
    clarityList,
    shapesList,
    cutList,
    colorList,
    caratWeightList,
    fluorescenceList,
    measurementData,
  });

  return (
    <Grid container>
      <Grid size={12}>
        <Accordion>
          <AccordionSummary expandIcon={<MdExpandMore />}>
            <Typography fontWeight={600}>Shapes</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {Array.from({ length: 20 })?.map((data, index) => {
              return (
                <Button
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      shape: `${index}`,
                    });
                  }}
                  sx={{
                    minWidth: 80,
                    minHeight: 80,
                    borderRadius: 2,
                    boxShadow: "0 0 6px -1px #000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    color: +filtersParams?.shape === index ? "#fff" : "#123449",
                    bgcolor:
                      +filtersParams?.shape === index ? "#123449" : "#fff",
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={+filtersParams?.shape === index ? "#fff" : "#123449"}
                  />
                  <Typography>RIGNSDA</Typography>
                </Button>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default DiamondFilterModal;
