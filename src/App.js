import { useState } from "react";
import Plant from "./Components/Plant";
import PlantForm from "./Components/PlantForm";

function App() {
  const [plants, setPlants] = useState([
    {
      name: 'Sunflower',
      family: 'Plant family',
      shade: false,
      sun: true,
      img: 'random image'
    }
  ]);

  function updatePlantsArray(newPlant) {
    console.log(...plants);
    console.log(plants);
    setPlants(plants => [...plants, newPlant]);
  }

    return ( 
      <section className ="App">
        <PlantForm updatePlants={updatePlantsArray}/>
        {plants.map((plant, index) => (
          <Plant data={plant} key={index} />
        ))}
      </section>
    );
}

export default App;