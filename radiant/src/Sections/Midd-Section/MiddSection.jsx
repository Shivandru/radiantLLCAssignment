import React from "react";
import "./middSection.css";
import MiddleSectionCard from "../../Components/MiddleSectionCard";
import { CgChevronDown } from "react-icons/cg";
import { CiCircleCheck } from "react-icons/ci";
import { IoTrophyOutline, IoDiamondOutline } from "react-icons/io5";
import BestValue from "../../Components/BestValue";
const MiddSection = () => {
  const content = {
    para: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    paraSecond:
      " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    heading: "Main highlights",
    content:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    show: "Show more",
  };
  return (
    <div className="middSectionContainer">
      <BestValue>
        {
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <IoTrophyOutline className="iconLogoBestValue" />
            <span style={{ color: "#FFFFFF", fontSize: "1rem" }}>
              Best Choice
            </span>
          </div>
        }
      </BestValue>
      <MiddleSectionCard
        number={9.8}
        coment={"Exceptional"}
        BuliderImg={"Builder 1"}
        indexing={1}
      >
        {
          <>
            <p className="midSectionPara">
              <span className="midSectionParaSpan">
                WixPro 72-Inch Responsive Website Builder-
              </span>
              {content.para}
            </p>
            <h4>{content.heading}</h4>
            <p>{content.content}</p>
            <div className="showTextIcon">
              <p className="showText">
                {content.show} <CgChevronDown />
              </p>
            </div>
          </>
        }
      </MiddleSectionCard>
      <BestValue>
        {
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <IoDiamondOutline className="iconLogoBestValue" />
            <span style={{ color: "#FFFFFF", fontSize: "1rem" }}>
              Best Value
            </span>
          </div>
        }
      </BestValue>
      <MiddleSectionCard
        number={9.5}
        BuliderImg={"Builder"}
        coment={"Excellent"}
        indexing={2}
      >
        {
          <>
            <p className="midSectionPara">
              <span className="midSectionParaSpan">
                SiteCraft 68-Inch Ultimate Web Design Studio-
              </span>
              {content.paraSecond}
            </p>
            <h4>{content.heading}</h4>
            <p>{content.content}</p>
            <div className="showTextIcon">
              <p className="showText">
                {content.show} <CgChevronDown />
              </p>
            </div>
          </>
        }
      </MiddleSectionCard>
      <MiddleSectionCard
        number={9.3}
        BuliderImg={"Builder 1"}
        coment={"Exceptional"}
        indexing={3}
      >
        {
          <>
            <p className="midSectionPara">
              <span className="midSectionParaSpan">
                WixPro 72-Inch Responsive Website Builder-
              </span>
              {content.para}
            </p>
            <h4>{content.heading}</h4>
            <p>{content.content}</p>
            <div className="showTextIcon">
              <p className="showText">
                {content.show} <CgChevronDown />
              </p>
            </div>
          </>
        }
      </MiddleSectionCard>
      <MiddleSectionCard
        number={9.1}
        BuliderImg={"CDK"}
        coment={"Very Good"}
        indexing={4}
      >
        <div className="midSectionCardContainer">
          <p style={{ marginBottom: "0.5rem" }}>
            <span style={{ fontWeight: "800" }}>CDK Responsive Builder:</span>
            An extensive library of widgets and apps, and detailed step-by-step
            guides
          </p>
          <span
            style={{
              backgroundColor: "#F2F4F7",
              color: "#074786",
              padding: "0.3rem",
            }}
          >
            26% off
          </span>
          <h4 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Main highlights
          </h4>
          <div className="midSectionCardList">
            <p>
              <span>9.9</span> Building Resposive
            </p>
            <p>
              <span>8.9</span> Cool
            </p>
            <p>
              <span>8.9</span> Docs
            </p>
          </div>
          <p>Why we love it</p>
          <div className="midSectionCardDivListSection">
            <div className="sectionDivList">
              <CiCircleCheck className="iconLogoList" />{" "}
              <span>Documentation</span>
            </div>
            <div className="sectionDivList">
              <CiCircleCheck className="iconLogoList" /> <span>Easy Use</span>
            </div>
            <div className="sectionDivList">
              <CiCircleCheck className="iconLogoList" /> <span>Out Of Box</span>
            </div>
          </div>
          <p className="showText">{content.show}</p>
        </div>
      </MiddleSectionCard>
    </div>
  );
};

export default MiddSection;
