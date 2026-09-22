function User({setUser})
{
    return(
        <>
        <h2>user data</h2>
        <input onChange={(event)=>setUser(event.target.value)} type="text" placeholder="enter name"/>
        <hr />
        </>
    )
}

export default User;