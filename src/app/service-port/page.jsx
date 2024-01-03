import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import React from "react";

function page() {
  return (
    <div className="container">
      <Banner
        config={{
          show: true,
          img: "/images/service-port.jpg",
        }}
      />
      <Breadcrumbs />
    </div>
  );
}

export default page;
