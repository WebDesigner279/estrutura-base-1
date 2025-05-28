"use client";

import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} ATI. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
