import { useState } from "react";

export default function Car() {
  const [car, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear);
  const [carName, setCarName] = useState("");
  const [carMake, setCarMake] = useState("");

  function addCar() {
    const newCar = setCar();

    setCar({
      year: carYear,
      name: carName,
      make: carMake,
    });
  }

  function handleDeleteCar(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

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
      <h1>List of Cars</h1>
      <ul>
        {car.map((c, index) => (
          <li onClick={() => handleDeleteCar(index)} key={index}>
            {c.name},{c.make},{c.year}
          </li>
        ))}
      </ul>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <button onClick={addCar}>추가</button>
    </div>
  );
}
