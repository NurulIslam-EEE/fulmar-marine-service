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
        </div>
      </div>
    </>
  );
}

export default Services;
