import React from "react";
import "../assets/styles/home.css";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";

const Home = () => {
  return (
    <div className="homeParentContainer">
      <Header />
      <div className="homeContentContainer">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
