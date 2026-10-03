import { useEffect, useState } from "react";

function App() {

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
      <h1>Integrate json server api and loader</h1>

      {
        users.map((user, index) => (
          <h3 key={index}>{user.name}</h3>
        ))
      }
    </>
  );
}

export default App;