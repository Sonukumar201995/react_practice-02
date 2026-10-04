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

  return (
    <>
      {
        users.map((user, index) => (
          <h3 key={index}>{user.name}</h3>
        ))
      }
    </>
  );
}

export default UserList;