"use client";

import styles from "./services.module.css";

import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

function Services() {
  return (
    <>
      <Banner config={{ show: true, img: "/images/about-us-banner.jpg" }} />
      <div className={styles.services}>
        <div className="container">
          <Breadcrumbs data={{ one: "Services" }} />
          <div className="d-flex align-items-center">
            <div className={styles.circle}>1</div> <h5> Provision Stores</h5>
          </div>
          <div className="d-flex align-items-center">
            {" "}
            <div className={styles.circle}>2</div>
            <h5> Deck & Engine Stores</h5>
          </div>
          <div className="d-flex align-items-center">
            {" "}
            <div className={styles.circle}>3</div>{" "}
            <h5> Stationery & Computer Equipment</h5>
          </div>
          <div className="d-flex align-items-center">
            {" "}
            <div className={styles.circle}>4</div>
            <h5> Medical Store & Hospital Equipment</h5>
          </div>
          <div className="d-flex align-items-center">
            {" "}
            <div className={styles.circle}>5</div>
            <h5> Cabin Store & Safety Equipment</h5>
          </div>
          <div className="d-flex align-items-center">
            {" "}
            <div className={styles.circle}>6</div>
            <h5> Hardware Tools, Rope & Lifting Tackles</h5>
          </div>
          <div className="d-flex align-items-center">
            {" "}
            <div className={styles.circle}>7</div>
            <h5>Marine Paints & Chemicals</h5>
          </div>
          <div className="d-flex align-items-center">
            {" "}
            <div className={styles.circle}>8</div>
            <h5> Other Services</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
