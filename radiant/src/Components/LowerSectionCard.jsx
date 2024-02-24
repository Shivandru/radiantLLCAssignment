import React from "react";
import "./lowerSectionCard.css";
const LowerSectionCard = () => {
  return (
    <div className="lowerSectionCard">
      <div className="imgDiv">
        <img
          src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__"
          alt="lowerSectionLogo"
        />
      </div>
      <div className="lowerSectionText">
        <div>20% off</div>
        <div>Limited time</div>
      </div>
      <div className="lowerSectionWebBuilder">Webbuilder 1</div>
      <p>Computer Modern clasic with wix support</p>
      <div className="lowerSectionPrice">
        <span id="spanPrice">$39.96</span>
        <span id="spandollar">$49.96</span>
        <span id="spanOff">(20% Off)</span>
      </div>
      <button id="viewDealButton">View Deal</button>
    </div>
  );
};

export default LowerSectionCard;
