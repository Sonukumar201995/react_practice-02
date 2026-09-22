import { useState } from "react";
import Display from "./Display";
import User from "./User";

function App()
{

    const[user,setUser]=useState('');
    return(
        <>
            <User setUser={setUser}/>
            <Display user={user}/>
        </>
    )
}

export default App;