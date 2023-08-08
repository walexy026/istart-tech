import React from "react";
import "./Overview.css";
import { BiSearch, BiSolidUserCircle } from "react-icons/bi";
import { SlBell } from "react-icons/sl";
import Theme from "../ThemeChanger/Theme";
import TodoList from "../TodoList/TodoList";

const Overview = () => {
  const current = new Date();
  const date = `${current.toLocaleString("default", {
    month: "long",
  })} ${current.getDate()}, ${current.getFullYear()}`;

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
      <div className="overviewDownTray">
        <b>Overview</b>
        <h4>{date}</h4>

        <div>
          <span>List</span>
          <span>Board</span>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Overview;
