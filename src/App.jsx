import { useActionState } from "react"

function App()
{

  let handleLogin=(preData,formData)=>{
    let name=formData.get("name")
    let password=formData.get("password")

    let regex=/^[A-Z a-z 0-9]+$/i;
    if(!name ||name.length>5)
    {
        return {error :'only 5 character allowed'}
    }else if(!regex.test(password))
    {
        return {error: 'only alphabed and numberic value allowed'}
    }else
    {
      return {messaage: "login done"}
    }

  }
  const [data,action,pending]=useActionState(handleLogin)
  console.log(data);
  return(
    <>
    <h1>validation with useActionState in React</h1>
    {
      data ?.messaage && <span>{data ?.messaage}</span>
    }
    {
      data ?.error && <span>{data ?.error}</span>
    }
    <form action={action}>

      <input type="text" name="name" placeholder="enter name"/>
      <br /><br />

      <input type="password" name="password" placeholder="enter password"/>
      <br /><br />

      <button disabled={pending}>{pending ? "Logging in..." : "Login"}</button>
    </form>
    </>
  )
}

export default App;