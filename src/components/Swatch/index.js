import "./styles.css";

const Swatch = ({ color = "#bbbbbb" , index, paletteColors, setPaletteColors}) => {

  const handleChangeColor = (e) => {
    let newColorArray = [...paletteColors];
    newColorArray[index] = e.target.value;

    setPaletteColors(newColorArray);
  }

  return (
    <div className="swatch-container">
      <div
        className="color-swatch"
        style={{ backgroundColor: color }}
      ></div>
      <input
        style={{ backgroundColor: color }}
        className="color-input"
        type="color"
        value={color}
        onChange={handleChangeColor}
      />
    </div>
  );
};
export default Swatch;
