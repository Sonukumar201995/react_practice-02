import useToggle from "./useToggle";

function App()
{
  const [value,setValue]=useToggle(true)
  return(
    <>
      
      <button onClick={()=>setValue()}>toggle</button>
      <button onClick={()=>setValue(false)}>hide</button>
      <button onClick={()=>setValue(true)}>show</button>
      {
        value ?<h2>custom hook </h2>:null
      }
    </>
  )
}

export default App;