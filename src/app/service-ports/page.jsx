import Banner from "@/components/Banner/Banner";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./service-ports.module.css";

function page() {
  return (
    <div className={styles.service_ports + " container"}>
      <Banner
        config={{
          show: true,
          img: "/images/service-port.jpg",
        }}
      />
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
  );
}

export default page;
