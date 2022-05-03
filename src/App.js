import { useState } from "react";
import "./App.css";
import Palette from "./components/Palette";

function App() {
  const [palettes, setPalettes] = useState([0]);
  const [swatches, setSwatches] = useState(7);

  const addSwatch = () => {
    palettes.push(palettes.length);
    setPalettes([...palettes]);
  };
  return (
    <div className="App">
      <div className="swatch-selector">
        <p className="subheadline">Number of Swatches</p>
        <input
        className="number-input"
          type="number"
          value={swatches}
          onChange={(e) => setSwatches(e.target.value)}
        />
      </div>
      {palettes.map((swatch, idx) => (
        <Palette swatches={swatches} key={`swatch - ${idx}`} />
      ))}
      <button onClick={addSwatch}>Add Swatch</button>
    </div>
  );
}

export default App;
