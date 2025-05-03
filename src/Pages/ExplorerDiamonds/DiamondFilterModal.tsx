/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import Loader from "../../Components/Loader";
import {
  ClarityGradeInterface,
  ColorGradeInterface,
  CutInterface,
  DiamondFilterInterface,
  FluorescenceInterface,
  MeasurementInterface,
  ShapeInterface,
} from "../../Interface/diamondFilterinterface";
import { useFetchQuery } from "../../Utils/useQueries";

const DiamondFilterModal = ({
  setFilterParams,
  filtersParams,
}: {
  filtersParams: DiamondFilterInterface;
  setFilterParams: (d: DiamondFilterInterface) => void;
}) => {
  const { data: shapesList, isFetching: shapesListLoading } = useFetchQuery<{
    data: ShapeInterface[];
  }>({
    key: ["GET_ALL_SHAPES_LIST"],
    route: `/Shape`,
  });

  const { data: clarityList, isFetching: clarityListLoading } = useFetchQuery<{
    data: ClarityGradeInterface[];
  }>({
    key: ["GET_ALL_CLARITY_LIST"],
    route: `/Clarity`,
  });

  const { data: colorList, isFetching: colorListLoading } = useFetchQuery<{
    data: ColorGradeInterface[];
  }>({
    key: ["GET_ALL_COLOR_LIST"],
    route: `/Color`,
  });

  const { data: cutList, isFetching: cutListLoading } = useFetchQuery<{
    data: CutInterface[];
  }>({
    key: ["GET_ALL_CUTIST"],
    route: `/Cut`,
  });

  const { data: caratWeightList, isFetching: caratWeightListLoading } =
    useFetchQuery<{ data: any[] }>({
      key: ["GET_ALL_PRICE"],
      route: `/Price`,
    });

  const { data: fluorescenceList, isFetching: fluorescenceListLoading } =
    useFetchQuery<{ data: FluorescenceInterface[] }>({
      key: ["GET_ALL_FLUORESCENE"],
      route: `/Fluorescence`,
    });

  const { data: measurementData, isFetching: measurementDataLoading } =
    useFetchQuery<{ data: MeasurementInterface[] }>({
      key: ["GET_ALL_MEASUREMENT"],
      route: `/Measurement`,
    });

  const isLoading =
    shapesListLoading ||
    clarityListLoading ||
    colorListLoading ||
    cutListLoading ||
    caratWeightListLoading ||
    fluorescenceListLoading ||
    measurementDataLoading;

  console.log("🚀 ~ shapesList:", {
    clarityList,
    cutList,
    colorList,
    caratWeightList,
    fluorescenceList,
    measurementData,
  });

  return isLoading ? (
    <Loader />
  ) : (
    <Grid container>
      <Grid size={12}>
        <Accordion>
          <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
            <Typography fontWeight={600}>Shapes</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {shapesList?.data?.map((data, index: number) => {
              return (
                <Button
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      shape: `${index}`,
                    });
                  }}
                  sx={{
                    minWidth: 100,
                    maxWidth: 100,
                    minHeight: 100,
                    borderRadius: 2,
                    boxShadow: "0 0 6px -1px #000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    color: +filtersParams?.shape === index ? "#fff" : "#123449",
                    bgcolor:
                      +filtersParams?.shape === index ? "#123449" : "#fff",
                    p: 2,
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={+filtersParams?.shape === index ? "#fff" : "#123449"}
                  />
                  <Typography>{data.shape_Name}</Typography>
                </Button>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
            <Typography fontWeight={600}>Clarity</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {clarityList?.data?.map((data, index: number) => {
              return (
                <Button
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      shape: `${index}`,
                    });
                  }}
                  sx={{
                    minWidth: 100,
                    maxWidth: 100,
                    minHeight: 100,
                    borderRadius: 2,
                    boxShadow: "0 0 6px -1px #000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    color: +filtersParams?.shape === index ? "#fff" : "#123449",
                    bgcolor:
                      +filtersParams?.shape === index ? "#123449" : "#fff",
                    p: 2,
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={+filtersParams?.shape === index ? "#fff" : "#123449"}
                  />
                  <Typography>{data.clarity_grade}</Typography>
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
