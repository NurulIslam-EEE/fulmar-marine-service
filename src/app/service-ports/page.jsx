"use client";

import Banner from "@/components/Banner/Banner";
import styles from "./service-ports.module.css";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

function ServicePorts() {
  return (
    <>
      <Banner
        config={{
          show: true,
          banner: true,
          img: "/images/service-port.jpg",
        }}
      />
      <div className="container">
        <div className={styles.service_ports}>
          <Breadcrumbs data={{ one: "Service Ports" }} />
          <div className={styles.port_item_container}>
            <div className={styles.icon}>&gt;</div>
            Chattogram Port
          </div>
          <div className={styles.port_item_container}>
            <div className={styles.icon}>&gt;</div>
            Mongla Port
          </div>
          <div className={styles.port_item_container}>
            <div className={styles.icon}>&gt;</div>
            Payra Port including OPL
          </div>
          <div className={styles.port_item_container}>
            <div className={styles.icon}>&gt;</div>
            Matarbari Port
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePorts;
