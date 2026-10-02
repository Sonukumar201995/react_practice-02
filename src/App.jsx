import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userData();
  }, []);
  async function userData() {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    setUsers(data.users);
  }
  return (
    <>
      <h2>API,Get method</h2>
      {users.map((user,index) => (
        <p key={index}>{user.firstName}
        {user.lastName}  
        {user.age}  
        </p>
      ))}
    </>
  );
}

export default App;
