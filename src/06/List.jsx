// export default function List() {
//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 45 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "cocount", calories: 159 },
//     { id: 5, name: "pineapple", calories: 37 },
//   ];

//   fruits.sort((a, b) => {
//     return a.calories - b.calories;
//   });

//   const newList = fruits.filter((fruit) => {
//     return fruit.calories < 100;
//   });

//   const listItem = newList.map((fruit) => (
//     <li key={fruit.id}>
//       {fruit.name}, {fruit.calories}
//     </li>
//   ));
//   return (
//     <>
//       <ul>{listItem}</ul>
//     </>
//   );
// }

import "./List.css";

export default function List(props) {
  const category = props.category;
  const itemList = props.items;

  itemList.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const listItem = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItem}</ul>
    </>
  );
}
