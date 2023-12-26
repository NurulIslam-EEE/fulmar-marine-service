"use client";
import CarouselComp from "../Carousel/CarouselComp";
import Navbar from "../Navbar/Navbar";
import styles from "./Banner.module.css";

function Banner({ config }) {
  return (
    <div className={styles.banner}>
      <div className="container">
        <Navbar />

        {config?.show && (
          <>
            <div className={styles.bannerImg}>
              <img src={config?.img} alt="" />
            </div>
          </>
        )}
        {/* <img className={styles.bg} src="/images/body-bg.png" alt="" /> */}

        {!config?.show && <CarouselComp />}
      </div>
    </div>
  );
}

export default Banner;
