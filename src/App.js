import logo from "./logo.svg";
import "./App.css";
import { use, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);
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
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
              placeholder="Enter FirstName"
            />
          </label>
          <label>
            Last Name :
            <input
              type="text"
              onChange={(e) => {
                setLasttName(e.target.value);
              }}
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

      {isSubmitClicked ? (
        <>
          {" "}
          Full Name : {firstName}
          {lastName}{" "}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
