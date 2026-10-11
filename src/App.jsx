import { useState } from "react";

function App() {


    const colors=JSON.parse(localStorage.getItem('color'));
  const [r, setR] = useState(colors && colors.r ? colors.r:0);
  const [g, setG] = useState(colors && colors.g ? colors.g:0);
  const [b, setB] = useState(colors && colors.b ?colors.b:0);


  let save=()=>{
    console.log("save")

    localStorage.setItem("color",JSON.stringify({r,g,b}))
  }
  return (
    <>
      <h1>color mixture</h1>
      <div
        style={{
          background: `rgb(${r}, ${g}, ${b})`,
          height: "200px",
          width: "200px",
          border: "1px solid black",
        }}
      ></div>
      <label htmlFor="">Red</label>
      <input
        type="range"
        onChange={(event) => setR(event.target.value)}
        min={0}
        max={255}
        value={r}
      />
      <br />
      <br />

      <label htmlFor="">Greeen</label>
      <input
        type="range"
        onChange={(event) => setG(event.target.value)}
        min={0}
        max={255}
        value={g}
      />
      <br />
      <br />

      <label htmlFor="">Blue</label>
      <input
        type="range"
        onChange={(event) => setB(event.target.value)}
        min={0}
        max={255}
        value={b}
      />

            <br /><br />
      <button onClick={save}>save</button>
    </>
  );
}

export default App;
