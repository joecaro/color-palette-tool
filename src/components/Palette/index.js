import React, { useEffect, useState } from "react";
import generatePaletteArray from "../../lib/generatePaletteArray";
import isValidHexaCode from "../../lib/isValidHex";
import Swatch from "../Swatch";
import Variables from "../Variables.js";
import "./styles.css";

const Palette = ({ swatches = 7, color = "#bbbbbb", paletteId }) => {
  const [maximumLightness, setMaximumLightness] = useState(0.95);
  const [minimumLightness, setMinimumLightness] = useState(0.05);
  const [mainColor, setMainColor] = useState(color);
  const [mainColorText, setMainColorText] = useState(color);
  const [paletteColors, setPaletteColors] = useState(
    generatePaletteArray(mainColor, swatches)
  );
  useEffect(() => {
    setPaletteColors(
      generatePaletteArray(
        mainColor,
        swatches,
        minimumLightness,
        maximumLightness
      )
    );
  }, [swatches, mainColor, minimumLightness, maximumLightness]);

  const handleChangeTextInput = (e) => {
    setMainColorText(e.target.value);

    if (isValidHexaCode(e.target.value)) {
      handleChangeMainColor(e);
    }
  };

  const handleChangeMainColor = (e) => {
    setMainColor(e.target.value);
    setMainColorText(e.target.value);
  };

  return (
    <div className="palette-container ">
      <div className="selector-container">
        <p >Pallete Options</p>
        <i>*Will reset manual palette changes</i>
        <label htmlFor="min-l" className="palette-label">
          Minimum Lightness
        </label>
        <input
          id="min-l"
          name="min-l"
          type="number"
          value={minimumLightness}
          min={0}
          max={1}
          step={0.05}
          onChange={(e) => setMinimumLightness(e.target.value)}
          className="color"
        />
        <label htmlFor="max-l" className="palette-label">
          Maximum Lightness
        </label>
        <input
          id="max-l"
          name="max-l"
          type="number"
          min={0}
          max={1}
          step={0.05}
          value={maximumLightness}
          onChange={(e) => setMaximumLightness(e.target.value)}
          className="color"
        />
        <label htmlFor="mid-color" className="palette-label">
          Palette Mid Color
        </label>
        <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
          <input
            id="mid-color"
            name="mid-color"
            type="text"
            value={mainColorText}
            onChange={handleChangeTextInput}
            className="color"
          />
          <input
            style={{ backgroundColor: mainColor }}
            className="color-input"
            type="color"
            value={mainColor}
            onChange={handleChangeMainColor}
          />
        </div>
      </div>
      <div className="palette">
        {paletteColors.map((color, idx, colors) => (
          <Swatch
            key={`palette-${paletteId}-swatch-${idx}-${color}`}
            color={color}
            index={idx}
            paletteColors={colors}
            setPaletteColors={setPaletteColors}
          />
        ))}
      </div>
      <Variables colors={paletteColors} />
    </div>
  );
};

export default Palette;
