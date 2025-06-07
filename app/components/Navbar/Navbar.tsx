"use client";
import Link from "next/link";

import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo visível apenas em telas maiores e pequenas */}
      <div>
        <h1 className={styles.titulo}> AuMiau Store </h1>
        <span className={styles.span}> Loja de Pets e Adoção </span>
      </div>

      <ul className={styles.lista}>
        <li className={styles.listaItem}>
          <a href="#">Home</a>
        </li>
        <li className={styles.listaItem}>
          <a href="#">Produtos</a>
        </li>
        <li className={styles.listaItem}>
          <a href="#">Adoção</a>
        </li>
        <li className={styles.listaItem}>
          <Link href="/infoRacas">Racas</Link>
        </li>
        <li className={styles.listaItem}>
          <a href="#">Favoritos</a>
        </li>
        <li className={styles.listaItem}>
          <a href="#">Sobre Nós</a>
        </li>
        <li className={styles.listaItem}>
          <a href="#">Contato</a>
        </li>
      </ul>

      <ul className={`${styles.lista} ${styles.navIcon}`}>
        <li>
          <IoIosSearch />
        </li>
        <li>
          <IoCartOutline />
        </li>
      </ul>
    </nav>
  );
}
