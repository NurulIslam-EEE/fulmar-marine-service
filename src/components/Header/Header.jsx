"use client";
import Navbar from "../Navbar/Navbar";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content + ` container`}>
        <div className={styles.logo}>
          <img src="/images/FINAL LOGO 2.png" alt="" />
        </div>
        <div className={styles.contactinfo}>
          <p>+880-2333313030</p>
          <p>info@fmscgp.com</p>
          {/* <Navbar /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
