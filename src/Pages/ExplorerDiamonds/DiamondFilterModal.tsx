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
      fieldUpdate: "shape",
      valueField: "shape_Name",
    },
    {
      listData: clarityList?.data,
      name: "Clarity",
      fieldUpdate: "clarity",
      valueField: "clarity_grade",
    },
    {
      listData: colorList?.data,
      name: "Colors",
      fieldUpdate: "color",
      valueField: "color_grade",
    },
    {
      listData: cutList?.data,
      name: "Cut",
      fieldUpdate: "cut",
      valueField: "cut_Quality",
    },
    {
      listData: priceList?.data,
      name: "Price",
      fieldUpdate: "price",
      valueField: "price",
    },
    {
      listData: fluorescenceList?.data,
      name: "Fluorescence Intensity",
      fieldUpdate: "fluorescenceIntensity",
      valueField: "intensity",
    },
    {
      listData: measurementData?.data,
      name: "Width Measurement",
      fieldUpdate: "widthMin",
      valueField: "width",
    },
    {
      listData: measurementData?.data,
      name: "Length Measurement",
      fieldUpdate: "lengthMin",
      valueField: "length",
    },
  ];

  return isLoading ? (
    <Loader />
  ) : (
    <Grid container>
      <Grid size={12}>
        {accordiansData?.map((dataItem) => {
          return (
            <Accordion>
              <AccordionSummary expandIcon={<MdExpandMore size={20} />}>
                <Typography fontWeight={600}>{dataItem.name}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {dataItem?.listData?.map((data, index: number) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => {
                        setFilterParams({
                          ...filtersParams,
                          [dataItem.fieldUpdate]: (data as Record<string, any>)[
                            dataItem.valueField
                          ],
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
                          (filtersParams as Record<string, any>)[
                            dataItem.fieldUpdate
                          ] ===
                          (data as Record<string, any>)[dataItem.valueField]
                            ? "#fff"
                            : "#123449",
                        bgcolor:
                          (filtersParams as Record<string, any>)[
                            dataItem.fieldUpdate
                          ] ===
                          (data as Record<string, any>)[dataItem.valueField]
                            ? "#123449"
                            : "#fff",
                        p: 2,
                      }}
                    >
                      <img
                        src="labRing.svg"
                        alt=""
                        color={
                          (filtersParams as Record<string, any>)[
                            dataItem.fieldUpdate
                          ] ===
                          (data as Record<string, any>)[dataItem.valueField]
                            ? "#fff"
                            : "#123449"
                        }
                      />
                      <Typography>
                        {(data as Record<string, any>)[dataItem.valueField]}
                      </Typography>
                    </Button>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default DiamondFilterModal;
