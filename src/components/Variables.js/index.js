import React from "react";
import "./styles.css";
const VariablePopUp = ({ colors, toggled }) => {
  return (
    <div style={{}} className="popup">
      {colors.map((color, idx) => (
        <p key={`popup - ${color}`}>
          --color{idx + 1}00: {color}
        </p>
      ))}
    </div>
  );
};

export default VariablePopUp;
