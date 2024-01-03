import Link from "next/link";
import styles from "./home.module.css";

function HomeContent() {
  return (
    <div className={styles.homeContent + " container"}>
      <h3>Company Profile</h3>
      <div className={styles.about}>
        <p>
          Fulmar marine services established in 2021 in Bangladesh. We are
          providing best quality supplies that modern ship owner/operators
          require through the utilization of an audacious import strategy, and
          aligning this with our customer focused service ethics. Fulmar marine
          services are shaping the future of the ship-supply industry in
          Bangladesh. <br /> <br />
          Utilizing our extensive inventory in excess of 45,000 marine store
          items, and combining this with our qualified efficient workers and the
          latest technology, FMS thus is able to offer, what we believe to be
          market-leading performance service to our customers. <br /> <br /> Our
          ultimate satisfaction is to fulfill our customers requirements.
        </p>
        <img src="/images/quote.png" alt="" />
      </div>
      <h3>Click here for brochure</h3>
      <Link
        href="/fulmar.pdf"
        download="Fulmar Marine Services"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.adobe}>
          {" "}
          <img src="/images/adobe.png" alt="" />
        </div>
      </Link>

      <h4>In Association with.</h4>
      <div className={styles.association}>
        <img src="/images/cpa.png" alt="" />
        <img src="/images/bc.png" alt="" />
        <img className={styles.mespas} src="/images/mespas.png" alt="" />
        <img className={styles.procure} src="/images/procure.svg" alt="" />
        <img className={styles.procure} src="/images/Shipserv.png" alt="" />
      </div>
    </div>
  );
}

export default HomeContent;
