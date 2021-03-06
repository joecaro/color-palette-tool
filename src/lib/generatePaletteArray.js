import hexToHSL from "./hexToHSL";

export default function generatePaletteArray(
  color,
  length = 7,
  minimumLightness = 0.05,
  maximumLightness = 0.95
) {
  const numOfSwatches = parseInt(length) || 0;
  let arr = new Array(numOfSwatches).fill("");
  let middle = (numOfSwatches - 1) / 2;

  let colors = arr.map((item, idx) => {
    let distanceToMiddle = Math.abs(middle - idx);
    if (distanceToMiddle === 0) {
      return color;
    } else if (idx < middle) {
      let saturatedColor = increaseSaturation(color, distanceToMiddle);
      return decreaseLightness(
        saturatedColor,
        distanceToMiddle,
        middle,
        minimumLightness
      );
    } else {
      let saturatedColor = increaseSaturation(color, distanceToMiddle);
      return increaseLightness(
        saturatedColor,
        distanceToMiddle,
        middle,
        maximumLightness
      );
    }
  });

  return colors;
}

//increase or decrease brightness

// hex to hsl

// increase l based on idx compared to middle point

// hsl to hex

export const increaseLightness = (
  color,
  distanceToMiddle,
  middle,
  maximumLightness
) => {
  const HSL = hexToHSL(color);

  HSL["l"] =
    ((maximumLightness - HSL["l"]) / middle) * distanceToMiddle + HSL["l"];

  return hslToHex(HSL["h"], HSL["s"], HSL["l"]);
};
const decreaseLightness = (
  color,
  distanceToMiddle,
  middle,
  minimumLightness
) => {
  const HSL = hexToHSL(color);

  HSL["l"] =
    ((minimumLightness - HSL["l"]) / middle) * distanceToMiddle + HSL["l"];

  return hslToHex(HSL["h"], HSL["s"], HSL["l"]);
};

//increase saturation

// separate R G B

// hex to hsl

// increase l based on idx compared to middle point

// hsl to hex

const increaseSaturation = (color, multiplier = 1) => {
  const HSL = hexToHSL(color);

  HSL["s"] = Math.min((HSL["s"] *= 1 + 0.1 * multiplier), 1);

  return hslToHex(HSL["h"], HSL["s"], HSL["l"]);
};

function hslToHex(h, s, l) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
