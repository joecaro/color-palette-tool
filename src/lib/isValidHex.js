export default function isValidHexaCode(str) {
    // Regex to check valid hexadecimal color code.
    const regex = /^#[0-9A-F]{6}$/i;
  
    // If the hexadecimal color code
    // is empty return false
    if (str.length === 0) {
      return false;
    }
  
    // Return true if the hexadecimal color code
    // matched the ReGex
    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  }
  