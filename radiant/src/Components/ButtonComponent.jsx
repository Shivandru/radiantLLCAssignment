import React from "react";
import "./buttonComponent.css";
const ButtonComponent = ({ children }) => {
  return (
    <>
      <button>{children}</button>
    </>
  );
};

export default ButtonComponent;
