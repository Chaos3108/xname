import logo from "./logo.svg";
import "./App.css";
import { use, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      // Allows only letters and spaces
      setter(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div>
      <div>
        <h2>Full Name Display</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <>
          <label>
            First Name :
            <input
              required
              type="text"
              onChange={handleInputChange(setFirstName)}
              value={firstName}
              placeholder="Enter FirstName"
            />
          </label>
          <label>
            Last Name :
            <input
              type="text"
              onChange={handleInputChange(setLasttName)}
              required
              value={lastName}
              placeholder="Enter LastName"
            />
          </label>
        </>
        <div>
          <button name="submit" type="submit">
            submit
          </button>
        </div>
      </form>

      {fullName ? <> Full Name : {fullName}</> : <></>}
    </div>
  );
}

export default App;
