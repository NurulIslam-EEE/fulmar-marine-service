"use client";

import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

function Services() {
  return (
    <>
      <Banner config={{ show: true, img: "/images/about-us-banner.jpg" }} />
      <div className="">
        <div className="container">
          <Breadcrumbs data={{ one: "Services" }} />
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
    </>
  );
}

export default Services;
