import React from 'react'
import * as d3 from 'd3';
import { setMapProjection } from './helpers/setMapProjections';
import { handleMouseMove, handleMouseOut, handleMouseOver } from './helpers/handleTooltip';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

// const path = d3.geoPath().projection()

const Mark = ({data}: Props) => {
  console.log(data);
  const path = d3.geoPath().projection(setMapProjection(data));
  
  return (
    <g>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.features.map((feature: any) => {
          const regionName = feature.properties.kabkot;
          
          return (
            <path
              className="path"
              d={path(feature) ?? ''}
              onMouseOver={() => {
                console.log('test');
                
                handleMouseOver(regionName)
              }}
              onMouseOut={handleMouseOut}
              onMouseMove={(event) => {
                handleMouseMove(event)
              }}
            />
          )
        }
        )
      }
    </g>
  )
}

export default Mark