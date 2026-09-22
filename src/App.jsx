import { useState } from "react";

function App(){

  const [users,setUsers]=useState([]);
  const [user,setUser]=useState('');

  const handleAddUser=()=>{
    setUsers([...users,user])
  }

  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;
  return(
    <>
      <h2>total user :{total}</h2>
      <h2>last user :{last}</h2>
      <h2>unique user :{unique}</h2>
      <h1>Derived State in React</h1>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user"/>
      <button onClick={handleAddUser}>add new user</button>
          {
      users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))
    }
    </>
  )
}

export default App;