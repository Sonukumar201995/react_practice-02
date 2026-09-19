import { useRef } from "react";

function App() {
  const inputref = useRef(null);

  const inputhandle = () => {
    inputref.current.focus();
  };

  return (
    <>
      <h1>useref in react js</h1>
      <input type="text" placeholder="Enter your name" ref={inputref} />
      <button onClick={inputhandle}>focus</button>
    </>
  );
}

export default App;