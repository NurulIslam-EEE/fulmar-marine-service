"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

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
            <p>
              SERVICES{" "}
              {/* <MdKeyboardArrowDown
                style={{
                  marginLeft: "4px",
                  fontSize: "20px",
                }}
              /> */}
              {/* <span style={{}}>&#8964;</span> */}
              {/* <svg
                viewBox="0 0 330 512"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
              >
                <path d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515z"></path>
              </svg> */}
            </p>
          </Link>
          {/* <div className={styles.drop_down_item}>
            <p> Provision Stores</p>
            <p> Deck & Engine Stores</p>
            <p> Stationery & Computer Equipment</p>
            <p> Medical Store & Hospital Equipment</p>
            <p> Cabin Store & Safety Equipment</p>
            <p> Hardware Tools, Rope & Lifting Tackles</p>
            <p>Marine Paints & Chemicals</p>
            <p> Other Services</p>
          </div> */}
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
          <Link href="/">
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
