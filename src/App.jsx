import {Routes,Route,NavLink} from "react-router"
import UserList from "./UserList";
import { AddUser } from "./AddUser";

function App() {

  

  return (
    <>

    <NavLink to="/">Home</NavLink>
    <NavLink to="/add">add user</NavLink>
      <h1>Make routes and pages for add user List UI</h1>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<AddUser/>}/>
      </Routes>
    </>
  );
}

export default App;