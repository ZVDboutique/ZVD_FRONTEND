import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
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
import { theme } from "../../Utils/theme";
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

  const { data: priceList, isFetching: priceListLoading } = useFetchQuery<{
    data: any[];
  }>({
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
    priceListLoading ||
    fluorescenceListLoading ||
    measurementDataLoading;

  const accordiansData = [
    {
      listData: shapesList?.data,
      name: "Shapes",
      fieldUpdate: "shape" as keyof DiamondFilterInterface,
      valueField: "shape_Name",
      multiple: true,
    },
    {
      listData: clarityList?.data,
      name: "Clarity",
      fieldUpdate: "clarity" as keyof DiamondFilterInterface,
      valueField: "clarity_grade",
      multiple: true,
    },
    {
      listData: colorList?.data,
      name: "Colors",
      fieldUpdate: "color" as keyof DiamondFilterInterface,
      valueField: "color_grade",
      multiple: true,
    },
    {
      listData: cutList?.data,
      name: "Cut",
      fieldUpdate: "cut" as keyof DiamondFilterInterface,
      valueField: "cut_Quality",
      multiple: true,
    },
    {
      listData: priceList?.data,
      name: "Price",
      fieldUpdate: "price" as keyof DiamondFilterInterface,
      valueField: "price",
      multiple: false,
    },
    {
      listData: fluorescenceList?.data,
      name: "Fluorescence Intensity",
      fieldUpdate: "fluorescenceIntensity" as keyof DiamondFilterInterface,
      valueField: "intensity",
      multiple: true,
    },
    {
      listData: measurementData?.data,
      name: "Width Measurement",
      fieldUpdate: "widthMin" as keyof DiamondFilterInterface,
      valueField: "width",
      multiple: false,
    },
    {
      listData: measurementData?.data,
      name: "Length Measurement",
      fieldUpdate: "lengthMin" as keyof DiamondFilterInterface,
      valueField: "length",
      multiple: false,
    },
  ];

  return isLoading ? (
    <Loader />
  ) : (
    <Grid container>
      <Grid size={12}>
        {accordiansData?.map(
          (dataItem: {
            listData: any;
            name: string;
            fieldUpdate: keyof DiamondFilterInterface;
            valueField: string;
            imageUrl?: string;
            hexvalue?: string;
            multiple?: boolean;
          }) => {
            return (
              <Accordion>
                <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    width={`-webkit-fill-available`}
                  >
                    <Typography fontWeight={600}>{dataItem.name}</Typography>
                    {!dataItem.multiple && (
                      <Button
                        color="error"
                        size="small"
                        variant="outlined"
                        onClick={() => {
                          setFilterParams({
                            ...filtersParams,
                            [dataItem.fieldUpdate]: null,
                          });
                        }}
                      >
                        Reset {dataItem.name} Filter
                      </Button>
                    )}
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  {dataItem?.listData?.map((data: any, index: number) => {
                    const field = dataItem.fieldUpdate;
                    const value = data[dataItem.valueField];

                    const isSelected = dataItem.multiple
                      ? (filtersParams[field] || []).includes(value)
                      : filtersParams[field] === value;

                    console.log(
                      "🚀🚀🚀 ~ {dataItem?.listData?.map ~ dataItem?.imageUrl:",
                      dataItem,
                    );
                    return (
                      <Button
                        key={index}
                        onClick={() => {
                          if (dataItem.multiple) {
                            const currentValues = filtersParams[field] || [];
                            const updatedValues = currentValues.includes(value)
                              ? currentValues.filter((v: any) => v !== value)
                              : [...currentValues, value];

                            setFilterParams({
                              ...filtersParams,
                              [field]: updatedValues,
                            });
                          } else {
                            setFilterParams({
                              ...filtersParams,
                              [field]: value,
                            });
                          }
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
                          p: 2,
                          color: theme.palette.secondary.main,
                        }}
                        variant={isSelected ? "contained" : "outlined"}
                      >
                        <img
                          src={data?.imageUrl}
                          height={"auto"}
                          style={{
                            width: `-webkit-fill-available`,
                          }}
                          alt=""
                          color={isSelected ? "primary" : "inherit"}
                        />
                        <Typography
                          sx={{
                            fontWeight: isSelected ? 600 : 500,
                          }}
                        >
                          {(data as Record<string, any>)[dataItem.valueField]}
                        </Typography>
                      </Button>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          },
        )}
      </Grid>
    </Grid>
  );
};

export default DiamondFilterModal;
