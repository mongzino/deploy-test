import React, { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  const [lyrics, setLyrics] = useState("");

  const handleClick = () => {
    let newLyrics;
    if (count == 0) newLyrics = "첫째론 kick drum";
    if (count == 1) newLyrics = "두번째론 snare drum";
    if (count == 2) newLyrics = "세번째론 high-hat";
    if (count == 3) newLyrics = "음~ synthesiser makes me fill high";
    console.log(count);
    setLyrics(newLyrics);
    setCount((preCount) => (preCount < 3 ? preCount + 1 : 0));
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>Click me ✅</button>
        <span> - Zion T 😎</span>
      </div>
      <div>
        <span className="lyrics">{lyrics}</span>
      </div>
    </>
  );
}
