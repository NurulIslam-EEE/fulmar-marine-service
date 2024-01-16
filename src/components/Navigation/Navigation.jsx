"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

import { usePathname } from "next/navigation";

function Navigation() {
  // useEffect(() => {}, []);

  const pathname = usePathname();
  // console.log(pathname);

  return (
    <>
      <div className={styles.nav_container}>
        <div
          className={
            pathname === "/" ? styles.nav_item_active : styles.nav_item
          }
        >
          <Link href="/">
            <p>HOME</p>
          </Link>
        </div>
        <div
          className={
            pathname === "/about-us" ? styles.nav_item_active : styles.nav_item
          }
        >
          <Link href="/about-us">
            {" "}
            <p>ABOUT US</p>
          </Link>{" "}
        </div>
        <div
          className={
            pathname === "/services"
              ? styles.nav_item_active + " " + styles.drop_down_container
              : styles.nav_item + " " + styles.drop_down_container
          }
        >
          <Link href="/services">
            <p>SERVICES</p>
          </Link>
          <div className={styles.drop_down_item}>
            <p> Provision Stores</p>
            <p> Deck & Engine Stores</p>
            <p> Stationery & Computer Equipment</p>
            <p> Medical Store & Hospital Equipment</p>
            <p> Cabin Store & Safety Equipment</p>
            <p> Hardware Tools, Rope & Lifting Tackles</p>
            <p>Marine Paints & Chemicals</p>
            <p> Other Services</p>
          </div>
        </div>
        <div
          className={
            pathname === "/service-ports"
              ? styles.nav_item_active
              : styles.nav_item
          }
        >
          {" "}
          <Link href="/service-ports">
            <p>SERVICE PORTS</p>
          </Link>{" "}
        </div>
        <div
          className={
            pathname === "/certifications"
              ? styles.nav_item_active
              : styles.nav_item
          }
        >
          <Link href="/certifications">
            <p>CERTIFICATIONS</p>
          </Link>
        </div>

        <div
          className={
            pathname === "/contact-us"
              ? styles.nav_item_active
              : styles.nav_item
          }
        >
          {" "}
          <Link href="/contact-us">
            {" "}
            <p>CONTACT US</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
