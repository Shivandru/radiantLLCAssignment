import React from "react";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="navBarContainer">
      <div className="navSection rightSection">
        <div className="searchBar">
          <CiSearch className="navLogo" />
        </div>
      </div>
      <div className="navSection leftSection">
        <span>Categories</span>
        <span>Website Builders</span>
        <span>Today's deals</span>
      </div>
    </div>
  );
};

export default Navbar;
