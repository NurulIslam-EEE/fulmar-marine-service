import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import styles from "./footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer + " container"}>
        <div className={styles.address}>
          {/* <p>
            Affiliated Companies : Adamallys Marine | Adamallys Marine and Ship
            Chandling
            <br />
            <span>P.O.Box 4684 Dubai UAE E-mail info@adamallys.com</span>
          </p> */}
          <strong>Fulmar Marine Services</strong>

          <p>
            <MdEmail className={styles.icon} /> info@fmscgp.com
          </p>

          <p>
            <FaPhoneAlt className={styles.icon} />
            +880-2333313030
          </p>

          <p>
            <FaLocationDot className={styles.icon} /> House 7, Lane 2, Road 2,
            Block L. Port Connecting Road, Halishahar, Chittagong, Bangladesh
          </p>
        </div>
        <div className={styles.contact}></div>
        <div className={styles.copyright}>
          <p>
            © Copyright {new Date().getFullYear()} Fulmar Marine Services. All
            Rights Reserved.
          </p>

          <div className={styles.social}>
            <Link
              href="https://linkedin.com/in/fulmar-marine-services-60ab9528a"
              target="_blank"
              className={styles.social_container}
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="Wechat - fms_Chittagong"
              target="_blank"
              className={styles.social_container}
            >
              <AiOutlineWechat />
            </Link>
            <Link
              href="whatsapp://send?8801919051677"
              target="_blank"
              className={styles.social_container}
            >
              <IoLogoWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
