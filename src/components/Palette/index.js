import React, { useEffect, useState } from "react";
import generatePaletteArray from "../../lib/generatePaletteArray";
import isValidHexaCode from "../../lib/isValidHex";
import ColorPicker from "../Swatch";
import Variables from "../Variables.js";
import "./styles.css";

const Palette = ({ swatches = 7, color = "#bbbbbb" }) => {
  const [mainColor, setMainColor] = useState(color);
  const [mainColorText, setMainColorText] = useState(color);
  const [PaletteColors, setPaletteColors] = useState(
    generatePaletteArray(mainColor, swatches)
  );

  useEffect(() => {
    setPaletteColors(generatePaletteArray(mainColor, swatches));
  }, [swatches, mainColor]);

  const handleChangeTextInput = (e) => {
    setMainColorText(e.target.value);

    if (isValidHexaCode(e.target.value)) {
      handleChangeMainColor(e);
    }
  };

  const handleChangeMainColor = (e) => {
    setMainColor(e.target.value);
    setMainColorText(e.target.value);
    setPaletteColors(generatePaletteArray(e.target.value, swatches));
  };
  return (
    <div className="palette-container ">
      <div className="selector-container">
        <p className="palette-headline">Palette Mid Color</p>
        <input
          type="text"
          value={mainColorText}
          onChange={handleChangeTextInput}
          className="color"
        />
        <input
          type="color"
          value={mainColor}
          onChange={handleChangeMainColor}
        />
      </div>
      <div className="palette">
        {PaletteColors.map((color, idx) => (
          <ColorPicker key={color + idx} color={color} />
        ))}
      </div>
      <Variables colors={PaletteColors} />
    </div>
  );
};

export default Palette;

