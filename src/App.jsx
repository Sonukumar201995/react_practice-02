import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordErr, setPasswordErr] = useState("");

  let handleName = (event) => {
    console.log(event.target.value);

    if (event.target.value.length > 5) {
      setNameErr(
        "Please enter valid username. Only 5 characters allowed"
      );
    } else {
      setNameErr("");
    }
  };

  let handlePassword = (event) => {
    console.log(event.target.value);

    const passwordRegex = /^[A-Za-z0-9]+$/;

    if (!passwordRegex.test(event.target.value)) {
      setPasswordErr(
        "Please enter valid password. Only alphabets and numbers allowed"
      );
    } else {
      setPasswordErr("");
    }
  };

  return (
    <>
      <h1>Validation in React</h1>

      <input
        type="text"
        onChange={handleName}
        placeholder="Enter Name"
      />

      <span>{nameErr && nameErr}</span>

      <br />
      <br />

      <input
        type="password"
        onChange={handlePassword}
        placeholder="Enter Password"
      />

      <span>{PasswordErr && PasswordErr}</span>

      <br />
      <br />

      <button disabled={nameErr || PasswordErr}>
        Login
      </button>
    </>
  );
}

export default App;