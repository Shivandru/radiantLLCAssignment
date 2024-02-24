import React from "react";
import "./buttonComponent.css";
const ButtonComponent = ({ children }) => {
  return (
    <>
      <button id="buttonComp">{children}</button>
    </>
  );
};

export default ButtonComponent;
