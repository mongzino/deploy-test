import { useState } from "react";

export default function MyComponent12() {
  const [car, setCar] = useState({
    year: 2024,
    make: "HYNDAI",
    model: "AVANTE",
  });
  function handleYearChange(event) {
    setCar({ ...car, year: event.target.value });
  }
  function handleMakeChange(event) {
    setCar({ ...car, make: event.target.value });
  }
  function handleModelChange(event) {
    setCar({ ...car, model: event.target.value });
  }
  return (
    <div>
      <h1>쿠앙</h1>
      <p>
        your favorite car is : {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
}
