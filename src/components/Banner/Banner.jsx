"use client";
import CarouselComp from "../Carousel/CarouselComp";
import Navbar from "../Navbar/Navbar";
import styles from "./Banner.module.css";

function Banner({ config }) {
  return (
    <div className={styles.banner}>
      <div className="container">
        {/* <Navbar /> */}

        {config?.show && (
          <>
            <div className={styles.bannerImg}>
              <img src="/images/banners-slide-02.jpg" alt="" />
            </div>
          </>
        )}
        {/* <img className={styles.bg} src="/images/body-bg.png" alt="" /> */}

        <CarouselComp />
      </div>
    </div>
  );
}

export default Banner;
