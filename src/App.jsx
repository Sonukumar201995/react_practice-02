
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "sonu",
    address: {
      city: "New Delhi",
      country: "India",
    },
  });

  // Update Name
  const handleName = (val) => {
    setData({
      ...data,
      name: val,
    });
  };

  // Update City
  const handleCity = (val) => {
    setData({
      ...data,
      address: {
        ...data.address,
        city: val,
      },
    });
  };

  // Update Country
  const handleCountry = (val) => {
    setData({
      ...data,
      address: {
        ...data.address,
        country: val,
      },
    });
  };

  return (
    <>
      <h2>Update Object in State</h2>

      <input
        type="text"
        placeholder="Update Name"
        onChange={(e) => handleName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Update City"
        onChange={(e) => handleCity(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Update Country"
        onChange={(e) => handleCountry(e.target.value)}
      />

      <h3>Name: {data.name}</h3>
      <h3>City: {data.address.city}</h3>
      <h3>Country: {data.address.country}</h3>
    </>
  );
}

export default App;

