import { useState } from "react"

export function AddUser()
{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')

    const createUser=async()=>{
        console.log(name,email)

        const url="http://localhost:3000/users";
        let response=await fetch(url,{
            method:"post",
            body:JSON.stringify({name,email})
        })
        response=await response.json();
        if(response)
        {
            alert("new user add")
        }
    }


    return(
        <>
        <h3>add user</h3>
        <div style={{textAlign:"center"}}>
            <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="enter name"/>
            <br /><br />

            <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="enter email"/>
            <br /><br />

            <button onClick={createUser}>add user</button>
        </div>
        </>
    )
}