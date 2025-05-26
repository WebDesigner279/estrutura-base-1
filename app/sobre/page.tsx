import styles from "./Sobre.module.scss";

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.container}>
        <h1>Sobre Nós</h1>
        <p>Informações sobre a empresa ou o projeto.</p>
      </div>
    </section>
  );
}
