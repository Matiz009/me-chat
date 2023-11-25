import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./join.css";
let user;
const Join = () => {
  const [Name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  const sendUser = () => {
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value = "";
  };

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1> ME CHAT </h1>{" "}
        <input
          type="text"
          id="joinInput"
          placeholder="Enter your name"
          value={Name}
          onChange={handleInputChange}
        />
        <Link
          to="/chat"
          onClick={(event) => (!Name ? event.preventDefault() : null)}
        >
          <button onClick={sendUser} className="joinBtn">
            Login
          </button>
        </Link>
      </div>{" "}
    </div>
  );
};

export default Join;
export { user };
