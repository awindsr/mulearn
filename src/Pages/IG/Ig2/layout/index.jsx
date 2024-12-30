import React from "react";
import ContentsMenu from "../components/menu";
import styles from "./index.module.css";
import Dashboard from "../InterestGroupPage";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import InterestGroupPage from "../InterestGroupPage";

const InterestGroupDetails = () => {
  return (
    <div className="w-[100vw] flex flex-col overflow-hidden">
      <Navbar />
      <div
        className={`${styles.roboto_font} flex items-start justify-start bg-[rgba(255,255,255,1)] w-full relative`}
      >
        <ContentsMenu />
        <div className="flex-1 overflow-auto">
          <InterestGroupPage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterestGroupDetails;
