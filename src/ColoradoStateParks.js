import React from "react";
import howManyParks from "./parks/howManyParks";

// function ColoradoStateParks() {
//   aDifferentName(); // => "42 parks!"

//   return <h1>Colorado State Parks!</h1>;
// }

import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";
import { trees, wildlife } from "./parks/RockyMountain";


// console.log(RMFunctions.trees);

// RMFunctions.wildlife();


// RMFunctions.elevation();



export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

