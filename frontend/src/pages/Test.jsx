import { useState } from "react";

// DUMMY = [
//   {
//     id: "a1",
//     title: "chexk",
//   },
//   {
//     id: "a2",
//     title: "ups",
//   },
// ];

const Test = () => {
  const [input, setInput] = useState("");
  const inputHanlder = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setInput(event.target.value);
    }, 2000);
  };
  console.log(input);

  return (
    <>
      <input type="text" onChange={inputHanlder} />
      <h1>{input}</h1>
      <button>show</button>
    </>
  );
};

export default Test;
