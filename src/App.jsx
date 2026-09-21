import { useRef } from "react"
import User from './User'

function App()
{
  let inputRef=useRef(null);
  let update=()=>{

    inputRef.current.value=1000;
    inputRef.current.focus();
  }
  return(
    <>
    <h1>ForwardRef in react</h1>
    <User ref={inputRef}/>
    <button onClick={update}>update</button>
    </>
  )
}

export default App;