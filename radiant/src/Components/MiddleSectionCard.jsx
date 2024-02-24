import React from "react";
import "./middleSectionCard.css";
import ButtonComponent from "./ButtonComponent";
const MiddleSectionCard = ({ children, number }) => {
  return (
    <div className="middSectionCardContainer">
      <div className="imgDiv subSections">
        <img
          className="middImg"
          src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__"
          alt=""
        />
        <div>
          <p className="imgText">Builder 1</p>
        </div>
      </div>
      <div>{children}</div>
      <div className="ratingComponent subSections">
        <div className="ratingDiv">
          <h3>{number}</h3>
          <p className="ratingText">exceptional</p>
        </div>
        <ButtonComponent>View</ButtonComponent>
      </div>
    </div>
  );
};

export default MiddleSectionCard;
