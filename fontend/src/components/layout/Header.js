import React from "react";
import Navbar from "../Nav/Navbar";
import styles from "../../style";

const Header = () => {
  return (
    <header className={`${styles.boxWidth}`}>
      <Navbar />
    </header>
  );
};

export default Header;
