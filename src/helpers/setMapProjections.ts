/* eslint-disable @typescript-eslint/no-explicit-any */
import * as d3 from "d3";

export const setMapProjection = (mapData: any) => {
  // use the geoAlbers map projection
  const projection = d3.geoAlbers();
  // adjust projection to fit area of map canvas
  projection
    .precision(0)
    .rotate([280, 40, 30])
    .fitExtent(
      [
        [0, 0],
        [960, 500],
      ],
      mapData
    );
  return projection;
};