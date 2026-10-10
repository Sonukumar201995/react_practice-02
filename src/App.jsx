import { Suspense, use } from "react";

const fetchData=()=>fetch("https://dummyjson.com/users").then((Response)=>Response.json());
const userResource=fetchData();

function App()
{
    return(
        <>
            <h2>Use Api in React</h2>
            <Suspense fallback={<p>Loading........</p>}>
                <User userResource={userResource}/>
            </Suspense>
        </>
    )
}
export default App;


function User({userResource})
{
    const userData=use(userResource)
    console.log(userData.users)
    return(
        <>
        <h3>user list</h3>

        </>
    )
}