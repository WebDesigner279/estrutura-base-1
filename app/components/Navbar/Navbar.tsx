"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo visível apenas em telas maiores e pequenas */}
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className={styles.logoImage}
        />
        <span className={styles.empresa}>
          ATI - Academia Técnica Interna
          <span className={styles.slogan}>
            Performance, acessibilidade e UX.
          </span>
        </span>
      </div>
      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? FaTimes({}) : FaBars({})}
      </button>

      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link
            href="/home"
            className={`${styles.link} ${pathname === "/home" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            href="/sobre"
            className={`${styles.link} ${pathname === "/sobre" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            href="/contato"
            className={`${styles.link} ${pathname === "/contato" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
