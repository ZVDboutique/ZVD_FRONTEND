import { Button } from "@mui/material";
import { useState } from "react";
import { Show } from "../../Components/Show";
import SimpleSideModal from "../../Components/SimpleSideModal";
import SimpleTable from "../../Components/SimpleTable";
import {
  DiamondFilterInterface,
  DiamondListInterface,
} from "../../Interface/diamondFilterinterface";
import { useFetchQuery } from "../../Utils/useQueries";
import DiamondFilterModal from "./DiamondFilterModal";

const DiamondsList = ({
  filtersParams,
  setFilterParams,
}: {
  setFilterParams: (a: DiamondFilterInterface) => void;
  filtersParams: DiamondFilterInterface;
}) => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const { data } = useFetchQuery<{ data: DiamondListInterface[] }>({
    key: ["GET_ALL_DIAMONDS_LIST", filtersParams],
    route: `/DiamondStockData/diamonds-stock`,
    requestBody: {
      shape:
        filtersParams.shape?.length === 0
          ? null
          : JSON.stringify(filtersParams.shape),
      color:
        filtersParams.color?.length === 0
          ? null
          : JSON.stringify(filtersParams.color),
      clarity:
        filtersParams.clarity?.length === 0
          ? null
          : JSON.stringify(filtersParams.clarity),
      cut:
        filtersParams.cut?.length === 0
          ? null
          : JSON.stringify(filtersParams.cut),
      fluorescenceIntensity:
        filtersParams.fluorescenceIntensity?.length === 0
          ? null
          : JSON.stringify(filtersParams.fluorescenceIntensity),
      caratMin: filtersParams.caratMin || "",
      priceMin: filtersParams.priceMin || "",
      lengthMin: filtersParams.lengthMin || "",
      widthMin: filtersParams.widthMin || "",
    },
  });

  return (
    <>
      <Show.When isTrue={filtersParams.type}>
        <SimpleTable
          columns={[
            {
              minWidth: 150,
              field: "imageUrl",
              headerName: "Image",
              renderCell: (d) => {
                return <img src={d.row.imageUrl || ""} />;
              },
            },
            { minWidth: 250, field: "name", headerName: "Name" },
            { minWidth: 150, field: "shapeName", headerName: "Shape" },
            { minWidth: 150, field: "caratWeight", headerName: "Carat Weight" },
            { minWidth: 150, field: "cutQuality", headerName: "Cut Quality" },
            { minWidth: 150, field: "colorGrade", headerName: "Color" },
            { minWidth: 150, field: "clarityGrade", headerName: "Clarity" },
            {
              minWidth: 150,
              field: "fluorescenceIntensity",
              headerName: "Fluorescence",
            },
            { minWidth: 150, field: "length", headerName: "Length" },
            { minWidth: 150, field: "width", headerName: "Width" },
            { minWidth: 150, field: "depth", headerName: "Dept" },
            { minWidth: 150, field: "diameter", headerName: "Diameter" },
            { minWidth: 150, field: "price", headerName: "Price" },
            {
              minWidth: 150,
              field: "stockQuantity",
              headerName: "Stock Quantity",
            },
            { minWidth: 150, field: "isAvailable", headerName: "Available" },
            { minWidth: 150, field: "isVoid", headerName: "Void" },
            { minWidth: 150, field: "isVerified", headerName: "Verified" },
            { minWidth: 150, field: "isCertified", headerName: "Certified" },
          ]}
          rows={
            data?.data?.map((d, i) => {
              return { ...d, id: i };
            }) || []
          }
          headerComponent={
            <Button
              variant="contained"
              onClick={() => {
                setShowFilterModal(true);
              }}
            >
              Filter Diamonds
            </Button>
          }
        />
      </Show.When>
      <Show.When isTrue={showFilterModal}>
        <SimpleSideModal
          open={showFilterModal}
          setOpen={setShowFilterModal}
          modalTitle={"Select Filter"}
          width={"60%"}
        >
          <DiamondFilterModal
            setFilterParams={setFilterParams}
            filtersParams={filtersParams}
          />
        </SimpleSideModal>
      </Show.When>
    </>
  );
};

export default DiamondsList;
