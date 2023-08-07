import React from "react";
import "./dashboard.css";
import Sidepanel from "../../Components/Sidepanel/Sidepanel";
import Overview from "../../Components/Overview/Overview";
import Theme from "../../Components/ThemeChanger/Theme";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidepanel />
      <Overview />
      <Theme />
    </div>
  );
};

export default Dashboard;
