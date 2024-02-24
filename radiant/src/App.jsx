import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./Sections/FooterSection/Footer";
import LowerPage from "./Sections/Lowest-Section/LowerPage";
import RelatedSection from "./Sections/Related-deals-Section/RelatedSection";

function App() {
  return (
    <>
      <div className="mainContainer">
        <RelatedSection />
        <LowerPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
