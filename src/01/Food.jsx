export default function Food() {
  const food1 = "Banana";
  const food2 = "Orange";

  return (
    <>
      <main>
        <ul>
          <li>Apple</li>
          <li>food1</li>
          <li>{food2.toLocaleUpperCase()}</li>
        </ul>
      </main>
    </>
  );
}
