import React from "react";
import "../../assets/styles/sidebar.css";

const menuItems = [
  { icons: <i class="fa-regular fa-lightbulb"></i>, label: "Notes" },
  { icons: <i class="fa-solid fa-bell"></i>, label: "Archive" },
  { icons: <i class="fa-solid fa-trash"></i>, label: "Trash" },
];

const sidebar = () => {
  return (
    <div className="sidebarParentContainer">
      {menuItems?.map((item, index) => (
        <div className={`menuItems ${index === 0 ? "active" : ""}`} key={index}>
          <div className="menuIcon">{item?.icons}</div>
          <div className="menuLabel">{item?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default sidebar;
