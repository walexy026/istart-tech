import React from "react";
import "./Sidepanel.css";
import { BiCategory } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { CiStickyNote } from "react-icons/ci";
import { PiStackLight } from "react-icons/pi";
import { TbCalendarTime } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
const Sidepanel = () => {
  return (
    <div className="sidePanelWrapper">
      <h2>Brand logo</h2>
      <div>
        <b>MENU</b>
        <ul>
          <li>
            <BiCategory /> Overview
          </li>
          <li>
            <TbCalendarTime />
            Today
          </li>
          <li>
            <LuCalendarDays /> Schedule
          </li>
          <li>
            <CiStickyNote /> Note
          </li>
        </ul>
        <hr />
        <ol>
          <li>
            <PiStackLight /> Projects
          </li>
          <li>
            {" "}
            <RiTeamLine /> Team
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Sidepanel;
