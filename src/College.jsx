import { Link ,NavLink, Outlet} from "react-router";

function College()
{
    return(
        <div style={{textAlign:'center'}}>
        <h2>college page</h2>

        <NavLink to="student">Student</NavLink>
        <NavLink to="department">Department</NavLink>
        <NavLink to="studentdetails">Student Details</NavLink>
        <Outlet/>
        </div>
    )
}

export default College;