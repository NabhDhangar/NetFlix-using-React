import seriesData from "../api/seriesData.json";
import {SeriesCard} from "./SeriesCard";
const NetFlix=()=>{
    return(
        <ul className="grid grid-three--cols">
        {seriesData.map((currElem)=>(
            <SeriesCard key={currElem.id}  currElem={currElem}/>
        ))}
      </ul>
    );
  };

  export  default NetFlix;

  // kusuma.vai@accenture.com