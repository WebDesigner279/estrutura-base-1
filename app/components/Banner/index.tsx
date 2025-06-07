import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <>
      <img
        className={styles.banner}
        src="/images/banner.jpg"
        alt="Banner pets"
      />
      <p className={styles.slogan}>
        {" "}
        Amor em cada latido, carinho em cada miado.
      </p>
    </>
  );
}
