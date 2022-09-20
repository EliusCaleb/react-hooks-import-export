import React from "react";
import MesaVerde  from "./parks/MesaVerde";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return(
    <div>
      <h1>Colorado State Parks!</h1>;
      <MesaVerde />
    </div>
  )  
   
}

export default ColoradoStateParks