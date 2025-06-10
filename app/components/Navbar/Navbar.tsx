"use client";
import Link from "next/link";

import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";

interface Props {
  isOpen: boolean;
}

export default function Navbar({ isOpen } : Props) {
  const pathname = usePathname()

  return (
    <nav className={`${styles.navbar}`}>

        <ul className={`${isOpen ? styles.show : ''} ${styles.lista}`}>
          {pathname === '/home' ? ('') : (
            <li className={styles.listaItem}>  
            <Link href="/">Home</Link>
            </li>
          )}
          <li className={styles.listaItem}> 
          <Link href="/listaProdutos">Produtos</Link>
          </li>
          <li className={styles.listaItem}> 
          <Link href="/infoRacas">Raças</Link>
          </li>
          <li className={styles.listaItem}> 
          <Link href="/listaFavoritos">Favoritos</Link>
          </li>
          <li className={styles.listaItem}> 
          <Link href="/sobre">Sobre nós</Link>
          </li>
          <li className={styles.listaItem}> 
          <Link href="/contato">Contato</Link>
          </li>
          
        </ul>


    </nav>
  );
}
