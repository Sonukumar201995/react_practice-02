import {Routes,Route,Link} from 'react-router'
import {Home} from './Home'
import { About } from './About';
import { Login } from './Login';

function App()
{
  return(
    <>
    <h2>Basic page with react-router</h2>

     <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      </nav> 

      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/login' element={<Login/>}/> 
      </Routes>
    </>
  )
}

export default App;