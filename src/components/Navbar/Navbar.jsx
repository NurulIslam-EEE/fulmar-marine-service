"use client";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav_container + " container"}>
      <div className={styles.nav_item}>
        <p>HOME</p>
      </div>
      <div className={styles.nav_item}>
        {" "}
        <p>ABOUT</p>
      </div>
      <div className={styles.nav_item}>
        {" "}
        <p>SERVICES</p>
      </div>

      <div className={styles.nav_item}>
        {" "}
        <p>CONTACT </p>
      </div>
    </div>
  );
}

export default Navbar;
