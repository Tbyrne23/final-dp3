import React from "react";
import '@progress/kendo-theme-default/dist/all.css';
import { RecipeDropDownList } from "./RecipeDropDownList.js";
import "./index1.css";
import "./dropDown.css";
import ggXRD from "./pics/ggXRD.jpg";
import HEAVYDAY from "../4-01 HEAVY DAY.mp3";


const Song = () => {
  let audio = new Audio(HEAVYDAY)
  let audio2 = new Audio(HEAVYDAY)
  let audio3 = new Audio(HEAVYDAY)
  const start = () => {
    audio.play()
  }
  const start2 = () => {
    audio2.play()
  }
  const start3 = () => {
    audio3.play()
  }
  return (
    <div className="Song">
      <h3 className="Title">
    <h4>Cob's Soul Music</h4>
      </h3>
     <h1>
      <img alt="ggXRD" className="photo" src={ggXRD}/>

      <button onClick={start}>Play</button>

      <img alt="ggXRD" className="photo2" src={ggXRD}/>

      <button onClick={start2}>Play</button>

      <img alt="ggXRD" className="photo3" src={ggXRD}/>

      <button onClick={start3}>Play</button>
     </h1>
      <h2 className="Drop">
      <RecipeDropDownList /> 
      </h2>
      
    </div>
    

    
  );
};
  
export default Song;