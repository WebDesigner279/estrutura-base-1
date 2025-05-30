import styles from "./Home.module.scss";

import Banner from "../components/Banner";


export default function Home() {
  return (
    <section className={styles.home}>
      <Banner />
    </section>
  );
}
