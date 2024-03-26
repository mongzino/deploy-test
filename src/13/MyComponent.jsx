import { useState } from "react";

export default function MyComponent13() {
  const [foods, setFoods] = useState(["스테이크", "파스타", "라면", "김치"]);

  function handleAddFood() {
    const newFood = document.querySelector("#addFood").value;
    setFoods((f) => [...f, newFood]);
    document.querySelector("#addFood").value = "";
  }

  function handleClickFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>List of Foods</h1>
      <ul>
        {foods.map((food, index) => (
          <li onClick={() => handleClickFood(index)} key={index}>
            {food}
          </li>
        ))}
      </ul>
      <input id="addFood" type="text" placeholder="음식" />
      <button onClick={handleAddFood} type="submit">
        추가
      </button>
    </>
  );
}
