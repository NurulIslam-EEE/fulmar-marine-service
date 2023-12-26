import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import React from "react";

function AboutUs() {
  return (
    <div className="container about-us">
      <Banner config={{ show: true, img: "/images/about-us-banner.png" }} />
      <Breadcrumbs />
      <p>
        Fulmar marine services established in 2021 in Bangladesh. <br /> <br />
        We are providing best quality supplies that modern ship owner/operators
        require through the utilization of an audacious import strategy, and
        aligning this with our customer focused service ethics. Fulmar marine
        services are shaping the future of the ship-supply industry in
        Bangladesh. <br /> <br />
        Utilizing our extensive inventory in excess of 45,000 marine store
        items, and combining this with our qualified efficient workers and the
        latest technology, FMS thus is able to offer, what we believe to be
        market-leading performance service to our customers. <br /> <br />
        Our ultimate satisfaction is to fulfill our customers requirements.
      </p>
    </div>
  );
}

export default AboutUs;
