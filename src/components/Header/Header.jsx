"use client";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content + ` container`}>
        <div className={styles.logo}>
          <img src="/images/FINAL LOGO 2.png" alt="" />
        </div>
        <div className={styles.contactinfo}>
          <p>018189387673</p>
          <p>info@gmail.comn</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
