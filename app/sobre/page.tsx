import styles from "./Sobre.module.scss";

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.container}>
        <h1>Sobre Nós</h1>
        <p>
          A <strong>ATI — Academia Técnica Interna</strong> nasceu com o
          propósito de transformar ideias em soluções digitais inteligentes e
          eficientes. Especializada no desenvolvimento de aplicações web
          modernas, nossa atuação é orientada por três pilares fundamentais:
          performance, acessibilidade e experiência do usuário.
        </p>
        <p>
          Trabalhamos com uma arquitetura modular baseada em Next.js e SCSS,
          proporcionando projetos escaláveis, organizados e prontos para
          integração com APIs, bancos de dados e tecnologias avançadas como
          Progressive Web Apps (PWA).
        </p>
        <p>
          Nosso compromisso é com a excelência técnica, a manutenibilidade do
          código e a entrega de valor real ao usuário final — sempre alinhados
          às melhores práticas do desenvolvimento contemporâneo.
        </p>
      </div>
    </section>
  );
}
