"use client";
import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

function Certifications() {
  return (
    <>
      <Banner config={{ show: true, img: "/images/about-us-banner.png" }} />
      <div className="container">
        <Breadcrumbs data={{ one: "Certifications" }} />
      </div>
    </>
  );
}

export default Certifications;
