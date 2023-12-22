// import Image from 'next/image'
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import HomeContent from "@/components/Home/HomeContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <HomeContent />
    </main>
  );
}
