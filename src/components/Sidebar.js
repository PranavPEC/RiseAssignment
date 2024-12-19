import React from "react";
import "./Sidebar.css";
import {
  FaHome,
  FaFileAlt,
  FaCalendarAlt,
  FaTasks,
  FaFolderOpen,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Jur</h1>
      <ul className="sidebar-menu">
        <li className="sidebar-item active">
          <FaHome className="sidebar-icon" />
          <span>Dashboard</span>
        </li>
        <li className="sidebar-item">
          <FaFileAlt className="sidebar-icon" />
          <span>My Cases</span>
        </li>
        <li className="sidebar-item">
          <FaTasks className="sidebar-icon" />
          <span>Activities</span>
        </li>
        <li className="sidebar-item">
          <FaCalendarAlt className="sidebar-icon" />
          <span>Calendar</span>
        </li>
        <li className="sidebar-item">
          <FaFolderOpen className="sidebar-icon" />
          <span>Files</span>
        </li>
      </ul>
      <p className="sidebar-footer">Get Justice on Every Claim</p>
    </div>
  );
};

export default Sidebar;
