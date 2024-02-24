import React from "react";
import "./toplower.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const TopLower = () => {
  return (
    <>
      <div className="topLowerSection">
        <div>Tools</div>
        <div>AWS Builder</div>
        <div>Start Build</div>
        <div>Build Supplies</div>
        <div>Tooling</div>
        <div>Blue Hosting</div>
      </div>
      <div className="topLowerSubSection">
        <div>
          <span>Home</span>
          <MdKeyboardArrowRight />
        </div>
        <div>
          <span>Hosting for all</span>
          <MdKeyboardArrowRight />
        </div>
        <div>
          <span>Hosting</span>
          <MdKeyboardArrowRight />
        </div>
        <div>
          <span>Hosting6</span>
          <MdKeyboardArrowRight />
        </div>
        <div>
          <span>Hosting5</span>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </>
  );
};

export default TopLower;
