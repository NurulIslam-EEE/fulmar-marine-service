"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <>
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
      {/* <Navbar expand="lg" className={styles.nav_container + " bg-transparent"}>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} href="/" className={styles.nav_item}>
                {" "}
                <p>HOME</p>
              </Nav.Link>
              <Nav.Link as={Link} href="/about-us" className={styles.nav_item}>
                {" "}
                <p>ABOUT US</p>
              </Nav.Link>
              <Nav.Link as={Link} href="#action2" className={styles.nav_item}>
                {" "}
                <p>SERVICES</p>
              </Nav.Link>
              <Nav.Link as={Link} href="#action2" className={styles.nav_item}>
                {" "}
                <p>SERVICE PORT</p>
              </Nav.Link>
              <Nav.Link as={Link} href="#action2" className={styles.nav_item}>
                {" "}
                <p>CERTIFICATIONS</p>
              </Nav.Link>
              <Nav.Link as={Link} href="#action2" className={styles.nav_item}>
                {" "}
                <p>CONTACT US</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
}

export default Navigation;
