import logo from "./logo.svg";
import "./App.css";
import { use, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  return (
    <div>
      <div>
        <h2>Full Name Display</h2>
        <label>
          First Name :
          <input
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            placeholder="Enter FirstName"
          />
        </label>
      </div>
      <label>
        Last Name :
        <input
          type="text"
          onChange={(e) => {
            setLasttName(e.target.value);
          }}
          value={lastName}
          placeholder="Enter LastName"
        />
      </label>
      <div>
        <button
          name="submit"
          onClick={() => {
            setIsSubmitClicked(true);
          }}
        >
          submit
        </button>
      </div>
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
