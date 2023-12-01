// import {json, select} from 'd3';
import { useEffect, useState } from 'react';
import {feature} from 'topojson';
import Mark from './Mark';
import map from './assets/yogyakarta-simplified-topo.json';
import * as d3 from 'd3';


function App() {
  // const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null)

  useEffect(() => {    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // d3.json(jsonUrl).then((topojsonData: any) => {
    // });
    const {yogyakarta} = map.objects
    
    
    setData(feature(map, yogyakarta))

    d3.select("body")
      .append("div")
      .attr("id", "tooltip")
      .attr("style", "position: absolute; opacity: 0");
  }, [])
  
  
  return (
    <div>
      <svg width={960} height={500} className="map-canvas">
        {
          data &&
          (
            <Mark data={data}/>
          )
        }
      </svg>
    </div>
  )
}

export default App
