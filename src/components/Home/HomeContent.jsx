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
        <img src="/images/quote.jpg" alt="" />
      </div>

      <h4>In Association with.</h4>
      <div>
        <img src="/images/euramco-safety-logo-small.jpg" alt="" />
        <img src="/images/anest-iwata-logo-small.jpg" alt="" />
        <img src="/images/teufelberger-logo-small.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomeContent;
