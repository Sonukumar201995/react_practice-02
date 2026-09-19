import { User } from "./User";

function App()
{

   const displayName=(name)=>{
        alert(name);
    }

  return(
    <>
    <h2>pass function in component</h2>
    <User displayName={displayName} name="sonu kumar"/>
    <User displayName={displayName} name="monu kumar"/>
    <User displayName={displayName} name="arun kumar"/>
    </>
  )
}

export default App;