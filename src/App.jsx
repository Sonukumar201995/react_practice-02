import { useId } from "react";

function App() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>Username</label>
      <input id={id} type="text" />
    </>
  );
}

export default App;