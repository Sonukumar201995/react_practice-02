import { useActionState } from "react";

function App() {

    const handleSubmit = (preData, formData) => {

        let name = formData.get("name");
        let password = formData.get("password");

        if (name && password) {
            return {
                message: "Data submitted"
            };
        } else {
            return {
                error: "Data not submitted. Enter correct name & password"
            };
        }
    };

    const [data, action, pending] = useActionState(
        handleSubmit,
        undefined
    );

    console.log(data);

    return (
        <>
            <h2>useActionState in React</h2>

            <form action={action}>

                <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                />

                <br />
                <br />

                <button disabled={pending}>
                    {pending ? "Submitting..." : "Submit"}
                </button>
                    <br />
                {data?.error && ( <span>{data.error}</span>)}

                {data?.message && (<span>{data.message}</span>)}

            </form>
        </>
    );
}

export default App;