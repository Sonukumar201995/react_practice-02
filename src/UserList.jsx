import { useEffect, useState } from "react";

function UserList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    userData();
  }, []);

  let userData = async () => {
    const url = "http://localhost:3000/users";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };


  let deleteData=async(id)=>{
    let url="http://localhost:3000/users";
    let response=await fetch(url+"/"+id,{
      method:"DELETE"
    });
    response= await response.json()
    if(response)
    {
      alert("name deleted")
      userData();
    }
  }
  return (
    <>
      {
        users.map((user, index) => (
          <div key={index}>
           <h4>{user.name}</h4>
          <button onClick={()=>deleteData(user.id)}>Delete</button>
          </div>
        ))
      }
    </>
  );
}

export default UserList;