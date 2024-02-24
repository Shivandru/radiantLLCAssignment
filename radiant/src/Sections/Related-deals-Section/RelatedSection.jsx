import React from "react";
import "./relatedSection.css";
import LowerSectionCard from "../../Components/LowerSectionCard";
const RelatedSection = () => {
  return (
    <>
      <h1 className="realtedSectionHeading">
        Related deals you might like for
      </h1>
      <div className="relatedContainer">
        <LowerSectionCard />
        <LowerSectionCard />
        <LowerSectionCard />
      </div>
    </>
  );
};

export default RelatedSection;
