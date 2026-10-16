import React from "react";
import "../../assets/styles/header.css";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="headerParentContainer">
      <div className="menuBarIconContainer">
        <i class="fa-solid fa-bars"></i>
      </div>
      <img
        src="https://www.gstatic.com/images/branding/productlogos/keep_2026/v2/web-48dp/logo_keep_2026_color_1x_web_48dp.png"
        alt="logo"
        width={44}
        height={40}
      />
      <span className="applicationTitleText">Keep</span>
      <SearchBar/>
    </div>
  );
};

export default Header;
