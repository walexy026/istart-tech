import React from "react";
import { useState } from "react";
import "./LogIn.css";
import pics from "../../Assets/itechLogInPics.svg";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const LogIn = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(AiOutlineEyeInvisible);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleToggle = () => {
    if (type === "password") {
      setIcon(AiOutlineEye);
      setType("text");
    } else {
      setIcon(AiOutlineEyeInvisible);
      setType("password");
    }
  };
  return (
    <div className="logInFlex">
      <div className="firstFlex">
        <h2>Organize your workflow, boost your productivity</h2>
        <img src={pics} alt="logIn" />
      </div>
      <div className="logInContainer">
        <div className="formWrapper">
          <h3>Brand logo</h3>
          <span>Sign In</span>
          <span>Sign Up</span>
          <button className="authBtn">
            <FcGoogle size="1.5rem" /> Sign in with Google
          </button>
          <form className="formDiv" action="" onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email Address
              <div className="inputWrapper">
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Insert your email"
                />
              </div>
            </label>
            <label htmlFor="password">
              Password
              <div className="inputWrapper">
                <input
                  type={type}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  id="password"
                  placeholder="Insert your password"
                />

                {
                  <AiOutlineEyeInvisible
                    handleSubmit
                    // icon={icon}
                    onClick={handleToggle}
                    style={{
                      fontSize: "2rem",
                      position: "absolute",
                      right: "20px",
                      cursor: "pointer",
                    }}
                  />
                }
              </div>
            </label>
            {/* <AiOutlineEyeInvisible /> */}
            <div className="checkBoxFlex">
              <label htmlFor="loggedIn">
                <input type="checkbox" name="" id="loggedIn" />
                Keep me logged In
              </label>
              <a href="">Forget Password</a>
            </div>
            <button className="loginBtn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
