import React from "react";
import "./LogIn.css";
const LogIn = () => {
  return (
    <div className="logInFlex">
      LogIn
      <div>
        <h2>Organize your workflow, boost your productivity</h2>
      </div>
      <div>
        <h3>Brand logo</h3>
        <div>
          <span>Sign In</span>
          <span>Sign Up</span>
          <button>Sign in with Google</button>
          <form action="">
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
            <input type="checkbox" name="" id="loggedIn" />
            <label htmlFor="loggedIn">Keep me logged In</label>
            <a href="">Forget Password</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
