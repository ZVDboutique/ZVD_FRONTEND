import { Grid } from "@mui/material";
import { useState } from "react";
import { DiamondFilterInterface } from "../../Interface/diamondFilterinterface";
import DiamondsList from "./DiamondsList";
import HeroSecion from "./HeroSecion";

const ExplorerDiamonds = () => {
  const [filtersParams, setFilterParams] = useState<DiamondFilterInterface>({
    shape: null,
    color: [],
    clarity: [],
    cut: [],
    fluorescenceIntensity: [],
    priceMin: null,
    caratMin: null,
    caratMax: null,
    priceMax: null,
    lengthMin: null,
    lengthMax: null,
    widthMin: null,
    widthMax: null,
    type: [],
  });

  return (
    <Grid container spacing={2} m={4} position={"relative"}>
      <Grid size={12}>
        <HeroSecion
          filtersParams={filtersParams}
          setFilterParams={setFilterParams}
        />
      </Grid>
      <Grid size={12}>
        <DiamondsList
          filtersParams={filtersParams}
          setFilterParams={setFilterParams}
        />
      </Grid>
    </Grid>
  );
};

export default ExplorerDiamonds;
