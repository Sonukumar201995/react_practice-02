import { useTransition } from "react";

function App()
{
  const [pending,startTransition]=useTransition();

  const handleButton=()=>{
    startTransition(async()=>{
      await new Promise(res=>setTimeout(res,2000))
    })
  }
  return(
    <>
    <h2>useTransition hook in react</h2>
    <button disabled={pending} onClick={handleButton}>click</button>
    </>
  )
}

export default App;