import React from "react";
import "./LogIn.css";
import pics from "../../Assets/itechLogInPics.svg";
const LogIn = () => {
  return (
    <div className="logInFlex">
      <div>
        <h2>Organize your workflow, boost your productivity</h2>
        <img src={pics} alt="logIn" />
      </div>
      <div className="logInContainer">
        <div className="formWrapper">
          <h3>Brand logo</h3>
          <span>Sign In</span>
          <span>Sign Up</span>
          <button className="authBtn">Sign in with Google</button>
          <form className="formDiv" action="">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Insert your email"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Insert your password"
            />
            <div className="checkBoxFlex">
              <label htmlFor="loggedIn">
                <input type="checkbox" name="" id="loggedIn" />
                Keep me logged In
              </label>
              <a href="">Forget Password</a>
            </div>
            <button className="loginBtn" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
