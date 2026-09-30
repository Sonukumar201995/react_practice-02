import { Link } from "react-router";
function UserList(){

    const userData=[
        {id:1,name:'sonu'},
        {id:2,name:"ambedkar"},
        {id:3,name:'tulsi'},
    ]
    return(
        <>
            <h3>user list page</h3>
            {
                userData.map((item,index)=>(
                <h4 key={index}><Link to={'/users/'+item.id}>{item.name}</Link></h4>
                ))
            }
        </>
    )
}

export default UserList;