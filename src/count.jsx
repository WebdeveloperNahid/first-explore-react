import { useState } from "react";

export default function Counter() {
  const counterStyle = {
    border: "3px solid yellow",
    border: "3px solid yellow",
    padding: "20px",
    margin: "20px",
    backgroundColor: "black",
  };
  const [count, setCount] = useState(0);

  const handleClickbutton = () => {
    const newbtn = count + 1;
    setCount(newbtn);
  };

  return (
    <div style={counterStyle}>
      <h2>Count:{count} </h2>
      <button onClick={handleClickbutton}>Add</button>
    </div>
  );
}
