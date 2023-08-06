import React from "react";
import "./signup.css";
const Signup = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Full Name</label>
        <input type="text" name="" id="name" placeholder="John Doe" />
        <label htmlFor="email">Email Address</label>
        <input type="email" name="" id="email" placeholder="John@wxample.com" />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name=""
          id="password"
          placeholder="Create Password"
        />
        <b>Must be atleast 8 Characters</b>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
