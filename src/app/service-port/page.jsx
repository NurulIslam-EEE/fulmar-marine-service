import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import React from "react";

function page() {
  return (
    <div className="container service_ports">
      <Banner
        config={{
          show: true,
          img: "/images/service-port.jpg",
        }}
      />
      <Breadcrumbs data={{ one: "Service Ports" }} />
      <div className="port_item_container">
        <div className="icon">&gt;</div>
        Chattogram Port
      </div>
      <div className="port_item_container">
        <div className="icon">&gt;</div>
        Mongla Port
      </div>
      <div className="port_item_container">
        <div className="icon">&gt;</div>
        Payra Port including OPL
      </div>
      <div className="port_item_container">
        <div className="icon">&gt;</div>
        Matarbari Port
      </div>
    </div>
  );
}

export default page;
