"use client";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_item}>
        <p>HOME</p>
      </div>
      <div className={styles.nav_item}>
        {" "}
        <p>ABOUT US</p>
      </div>
      <div className={styles.nav_item}>
        {" "}
        <p>SERVICES</p>
      </div>
      <div className={styles.nav_item}>
        {" "}
        <p>SERVICE PORT</p>
      </div>
      <div className={styles.nav_item}>
        {" "}
        <p>CERTIFICATIONS</p>
      </div>

      <div className={styles.nav_item}>
        {" "}
        <p>CONTACT US</p>
      </div>
    </div>
  );
}

export default Navbar;
