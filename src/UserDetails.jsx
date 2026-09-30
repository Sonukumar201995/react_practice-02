import { useParams,Link } from "react-router"


export function UserDetails()
{
    const paramData=useParams();

    return(
        <>
        <h2>user details</h2>
        <h3>user id is :{paramData.id}</h3>
        <h4><Link to='/users'>back to</Link></h4>
        </>
    )
}