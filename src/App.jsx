import { useFormStatus } from "react-dom"

function App()
{

  let handleform=async()=>{
    await new Promise(res=>setTimeout(res,2000))
    console.log("submit")

  }

  function CustomerForm(){
    const {pending}=useFormStatus();
    console.log("pending")
    return(
      <>
      <input type="text" placeholder="your name"/>
      <br /><br />
      <input type="password" placeholder="enter passwod"/>
      <br /><br />
      <button disabled={pending}>{pending ?'submitting...':'submit'}</button>
      </>
    )
  }
  return(
    <>
    <h2>useFormStatus Hook in react</h2>
    <form action={handleform}>
      <CustomerForm/>
    </form>
    </>
  )
}

export default App;