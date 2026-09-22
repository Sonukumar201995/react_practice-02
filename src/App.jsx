import { useState } from "react";

function App() {
    const [data, setData] = useState([
        "sonu",
        "arun",
        "monu",
        "sandip",
        "shekhar"
    ]);

    const updateData = (name) => {
        const newData = [...data];
        newData[newData.length - 1] = name;
        setData(newData);
    };

    return (
        <>
            <h2>Update Array in State</h2>

            <input
                type="text"
                placeholder="Update name"
                onChange={(e) => updateData(e.target.value)}
            />

            {
                data.map((item, index) => {
                    return <h2 key={index}>{item}</h2>;
                })
            }
        </>
    );
}

export default App;