import { useEffect, useState } from "react";
import { useParams } from "react-router"

export function EditUser()
{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('')

    const {id}=useParams();
    console.log(id)


    useEffect(()=>{
        getUserData()
    },[])

    const getUserData=async()=>{
        const url="http://localhost:3000/users/"+id;
        let response=await fetch (url);
        response=await response.json();
        setName(response.name);
        setEmail(response.email);
    }

    const updateData=async()=>{
        const url = "http://localhost:3000/users/" + id;
        console.log(name,email);

        let response=await fetch(url,{
            method:"PUT",
            body:JSON.stringify({name,email})
        })
        response=await response.json();
        if(response)
        {
            alert("data updated")
        }
    }
    return(
        <>
        <div style={{textAlign:"center"}}>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="re-name"/>
            <br /><br />
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="re-email"/>
            <br /><br />
            <button onClick={updateData}>update</button>
        </div>
        </>
    )
}