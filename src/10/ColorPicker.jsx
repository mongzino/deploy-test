import { useState } from "react";
import "./ColorPicker.css";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  function handleColorChange(event) {
    setColor(event.target.value);
  }
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color : {color}</p>
      </div>

      <label htmlFor="color">Select Color</label>
      <input onChange={handleColorChange} type="color" id="color" />
    </div>
  );
}
