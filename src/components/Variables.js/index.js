import React, { useState } from "react";
import copyToClipboard from "../../lib/copyToClipboard";
import "./styles.css";

const VariablePopUp = ({ colors, toggled }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    let str = "";
    colors.forEach(
      (color, idx) =>
        (str = str.concat(`
    --color${idx + 1}00: ${color}`))
    );

    if (copyToClipboard(str)) {
      setCopied(true)


      setTimeout(() => {
        setCopied(false);
      }, 3000)
    }

  };
  return (
    <div style={{}} className="popup">
      {colors.map((color, idx) => (
        <p key={`popup - ${color}`}>
          --color{idx + 1}00: {color}
        </p>
      ))}
      <button className="copy-button" onClick={handleCopy}>
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          {!copied && (
            <>
              <path
                fillRule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </>
          )}
          {copied && (
            <>
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
};

export default VariablePopUp;