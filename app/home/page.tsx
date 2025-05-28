import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h1>Bem-vindo à ATI — Academia Técnica Interna</h1>
        <p>
          Este é o seu projeto base construído com <strong>Next.js</strong> e
          estilizado com <strong>SCSS modular</strong>. A estrutura está
          preparada para escalar com qualidade e performance.
        </p>

        <p>
          Utilize esta aplicação como ponto de partida para desenvolver
          aplicações modernas, responsivas e otimizadas.
        </p>

        <ul>
          <li>🚀 Estrutura de pastas otimizada</li>
          <li>🎨 Estilização com SCSS modular</li>
          <li>🧱 Componentização organizada</li>
          <li>📱 Suporte completo a PWA (instalável, offline, responsivo)</li>
          <li>📦 Pronto para deploy na Vercel</li>
        </ul>

        <p>
          Comece agora a desenvolver seu projeto. Edite os componentes, integre
          APIs e entregue aplicações incríveis!
        </p>
      </div>
    </section>
  );
}
