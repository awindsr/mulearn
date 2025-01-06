import React from "react";
import ContentsMenu from "../components/menu";
import styles from "./index.module.css";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import InterestGroupPage from "../InterestGroupPage";

const InterestGroupDetails = () => {
  return (
    <div className=" flex flex-col overflow-hidden w-screen">
      <Navbar />
      <div
        className={`${styles.roboto_font} flex items-start justify-start bg-[rgba(255,255,255,1)] `}
      >
        <ContentsMenu />
        <div className="w-full overflow-hidden">
          <InterestGroupPage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterestGroupDetails;
