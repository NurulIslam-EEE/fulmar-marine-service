"use client";
import Navbar from "../Navigation/Navigation";
import styles from "./header.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content + ` container`}>
        <div className={styles.logo}>
          <img src="/images/FINAL LOGO 2.png" alt="" />
        </div>
        <div className={styles.contactinfo}>
          <p>
            {" "}
            <FaPhoneAlt className={styles.icon} />
            +880-2333313030
          </p>
          <p>
            {" "}
            <MdEmail className={styles.icon} />
            info@fmscgp.com
          </p>
          {/* <Navbar /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
