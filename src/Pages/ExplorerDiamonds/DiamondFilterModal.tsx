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
    caratWeightList,
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
                  key={index}
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      shape: data.id,
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
                    color:
                      filtersParams?.shape === data.id ? "#fff" : "#123449",
                    bgcolor:
                      filtersParams?.shape === data.id ? "#123449" : "#fff",
                    p: 2,
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={
                      filtersParams?.shape === data.id ? "#fff" : "#123449"
                    }
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
                  key={index}
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      clarity: data.id,
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
                    color:
                      filtersParams?.clarity === data.id ? "#fff" : "#123449",
                    bgcolor:
                      filtersParams?.clarity === data.id ? "#123449" : "#fff",
                    p: 2,
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={
                      filtersParams?.clarity === data.id ? "#fff" : "#123449"
                    }
                  />
                  <Typography>{data.clarity_grade}</Typography>
                </Button>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
            <Typography fontWeight={600}>Cut List</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {cutList?.data?.map((data, index: number) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      clarity: data.id,
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
                    color: filtersParams?.cut === data.id ? "#fff" : "#123449",
                    bgcolor:
                      filtersParams?.cut === data.id ? "#123449" : "#fff",
                    p: 2,
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={filtersParams?.cut === data.id ? "#fff" : "#123449"}
                  />
                  <Typography>{data.cut_Quality}</Typography>
                </Button>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
            <Typography fontWeight={600}>Color</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {colorList?.data?.map((data, index: number) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      clarity: data.id,
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
                    color:
                      filtersParams?.color === data.id ? "#fff" : "#123449",
                    bgcolor:
                      filtersParams?.color === data.id ? "#123449" : "#fff",
                    p: 2,
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={
                      filtersParams?.color === data.id ? "#fff" : "#123449"
                    }
                  />
                  <Typography>{data.color_grade}</Typography>
                </Button>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
            <Typography fontWeight={600}>Fluorescence Intensity</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {fluorescenceList?.data?.map((data, index: number) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      clarity: data.id,
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
                    color:
                      filtersParams?.fluorescenceIntensity === data.id
                        ? "#fff"
                        : "#123449",
                    bgcolor:
                      filtersParams?.fluorescenceIntensity === data.id
                        ? "#123449"
                        : "#fff",
                    p: 2,
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={
                      filtersParams?.fluorescenceIntensity === data.id
                        ? "#fff"
                        : "#123449"
                    }
                  />
                  <Typography>{data.intensity}</Typography>
                </Button>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
            <Typography fontWeight={600}>Measurement</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {measurementData?.data?.map((data, index: number) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      clarity: data.id,
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
                    color:
                      filtersParams?.lengthMin === data.length
                        ? "#fff"
                        : "#123449",
                    bgcolor:
                      filtersParams?.lengthMin === data.length
                        ? "#123449"
                        : "#fff",
                    p: 2,
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={
                      filtersParams?.lengthMin === data.length
                        ? "#fff"
                        : "#123449"
                    }
                  />
                  <Typography>{data.length}</Typography>
                </Button>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
            <Typography fontWeight={600}>Width</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {measurementData?.data?.map((data, index: number) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setFilterParams({
                      ...filtersParams,
                      clarity: data.id,
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
                    color:
                      filtersParams?.widthMin === data.width
                        ? "#fff"
                        : "#123449",
                    bgcolor:
                      filtersParams?.widthMin === data.width
                        ? "#123449"
                        : "#fff",
                    p: 2,
                  }}
                >
                  <img
                    src="labRing.svg"
                    alt=""
                    color={
                      filtersParams?.widthMin === data.width
                        ? "#fff"
                        : "#123449"
                    }
                  />
                  <Typography>{data.width}</Typography>
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
