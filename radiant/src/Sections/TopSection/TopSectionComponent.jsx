import React from "react";
import "./topSectionDesign.css";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
const TopSectionComponent = () => {
  return (
    <div>
      <div className="topSectionHeadingContainer">
        <h1 className="topSectionHeading">Best Website builders in US</h1>
      </div>
      <div className="topSectionInfo">
        <div className="topSectionInfoLeft">
            <CiCircleCheck className="logo" />
          <span>
            Last Updated
          </span>
          <span>- February 22, 2020</span>
            <CiCircleInfo className="logo" />
          <span>
            Advertising Disclosure
          </span>
        </div>
        <div className="topSectionInfoRight">
          <span ma>Top Relevent</span>
          <FaAngleDown className="logo" />
        </div>
      </div>
    </div>
  );
};

export default TopSectionComponent;
