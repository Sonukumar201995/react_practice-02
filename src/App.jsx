import{Routes,Route} from 'react-router'

import { About } from "./About";
import { Home } from "./Home";
import { Login } from "./Login";
import { NavBar } from './NavBar';


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
    </Routes>
    </>
  )
}

export default App;