import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import styles from "./footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>
        <div className={styles.address}>
          {/* <p>
            Affiliated Companies : Adamallys Marine | Adamallys Marine and Ship
            Chandling
            <br />
            <span>P.O.Box 4684 Dubai UAE E-mail info@adamallys.com</span>
          </p> */}
          <strong>Fulmar Marine Service</strong>

          <p>
            <MdEmail className={styles.icon} /> info@fmscgp.com
          </p>

          <p>
            <FaPhoneAlt className={styles.icon} />
            +880-2333313030
          </p>

          <p>
            <FaLocationDot className={styles.icon} /> House 7, Lane 2, Road 2,
            Block L. Port Connecting Road, Halishahar, Chittagong.
          </p>
        </div>
        <div className={styles.contact}></div>
        <div className={styles.copyright}>
          © Copyright {new Date().getFullYear()} Fulmar Marine Service. All
          Rights Reserved.
          <div className={styles.social}>
            <div className={styles.social_container}>
              <FaLinkedinIn />
            </div>
            <div className={styles.social_container}>
              <AiOutlineWechat />
            </div>
            <div className={styles.social_container}>
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
