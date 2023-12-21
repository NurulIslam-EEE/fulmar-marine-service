import React from "react";

import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>
        <div className={styles.address}>
          <p>
            Affiliated Companies : Adamallys Marine | Adamallys Marine and Ship
            Chandling
            <br />
            <span>P.O.Box 4684 Dubai UAE E-mail info@adamallys.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
