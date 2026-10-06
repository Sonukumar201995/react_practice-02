import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UserList() {

  const [users, setUsers] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    userData();
  }, []);

  // get method
  let userData = async () => {
    const url = "http://localhost:3000/users";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

// delete 
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

  // 
  let editData=(id)=>{
      navigate("/edit/"+id)
  }
  return (
    <>
      {
        users.map((user, index) => (
          <div key={index}>
           <h4>{user.name}</h4>
          <button onClick={()=>deleteData(user.id)}>Delete</button>
          <button onClick={()=>editData(user.id)}>Edit</button>
          </div>
        ))
      }
    </>
  );
}

export default UserList;