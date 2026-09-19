function App() {

  const handleForm = (event) => {
    event.preventDefault();

    const user = document.querySelector("#name").value;
    const pass = document.querySelector("#pass").value;
    console.log(user,pass);
  };

  return (
    <>
      <h1>uncontrolled component</h1>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="enter name" id="name" />
        <br />
        <input type="password" placeholder="enter password" id="pass" />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}

export default App;