import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h1>Bem-vindo à Página Inicial</h1>
        <p>Esta é a sua aplicação Next.js com estrutura modular usando SCSS.</p>
      </div>
    </section>
  );
}
