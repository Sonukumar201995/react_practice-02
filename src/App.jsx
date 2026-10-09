import { lazy, Suspense, useState } from "react";
// import User from "./User";

const User =lazy (()=>import('./User'))

function App()
{
    const [load,setLoad]=useState(false)

    return(
        <>
        <h1>lazy loader</h1>
        {
              load ?<Suspense fallback={<h3>loading.......</h3>}><User /></Suspense>:null  
        }
        <button onClick={()=>setLoad(true)}>Load user</button>
        </>
    )
}

export default App;