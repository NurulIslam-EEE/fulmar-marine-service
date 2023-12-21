import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="logo"></div>
        <div className="contactinfo"></div>
      </div>
    </div>
  );
}

export default Header;
