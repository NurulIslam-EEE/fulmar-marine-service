"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_item}>
        <Link href="/">
          <p>HOME</p>
        </Link>
      </div>
      <div className={styles.nav_item}>
        <Link href="/about-us">
          {" "}
          <p>ABOUT US</p>
        </Link>{" "}
      </div>
      <div className={styles.nav_item}>
        {" "}
        <p>SERVICES</p>
      </div>
      <div className={styles.nav_item}>
        {" "}
        <Link href="/service-port">
          <p>SERVICE PORT</p>
        </Link>{" "}
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
