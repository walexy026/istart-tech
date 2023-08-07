import React from "react";
import "./Overview.css";
import { BiMoon, BiSearch, BiSolidUserCircle } from "react-icons/bi";
import { SlBell } from "react-icons/sl";
import Theme from "../ThemeChanger/Theme";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overviewUpperWrapper">
        <p>Good evening, Jack</p>
        <form action="">
          <span className="searchSpan">
            <BiSearch
              style={{
                position: "absolute",
                left: "10px",
                top: "-5px",
                fontSize: "2rem",
              }}
            />
            <input type="search" name="" id="" placeholder="search" />
          </span>
        </form>

        <div className="iconDiv">
          <Theme />
          <SlBell fontSize="2rem" />
          <BiSolidUserCircle fontSize="2rem" />
        </div>
      </div>
      <b>Overview</b>
    </div>
  );
};

export default Overview;
