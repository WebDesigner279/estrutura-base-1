"use client";
import styles from "./Contato.module.scss";

export default function Contato() {
  return (
    <section className={styles.contato}>
      <div className={styles.container}>
        <h1>Contato</h1>
        <p>Entre em contato conosco.</p>

        <form className={styles.form}>
          <label>
            Nome
            <input type="text" name="nome" required placeholder="Seu nome" />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              required
              placeholder="Seu e-mail"
            />
          </label>

          <label>
            Mensagem
            <textarea
              name="mensagem"
              rows={5}
              required
              placeholder="Digite sua mensagem"
            ></textarea>
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
