import{Routes,Route} from 'react-router'

import { About } from "./About";
import { Home } from "./Home";
import { Login } from "./Login";
import { NavBar } from './NavBar';
import College from './College';
import Student from './Student';
import { Department } from './Deparment';
import { StudentDetails } from './StudentDetail';
import { PageNotFound } from './PageNotFound';
import UserList from './UserList';
import { UserDetails } from './UserDetails';


 function App()
{
  return(
    <>
    <h2>header with react-router</h2>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="users" element={<UserList/>}/>
      <Route path="users/:id" element={<UserDetails/>}/>
      <Route path="/college" element={<College />}>
      <Route path="student" element={<Student />} />
      <Route path="department" element={<Department />} />
      <Route path="studentdetails" element={<StudentDetails />} />
      </Route>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App;