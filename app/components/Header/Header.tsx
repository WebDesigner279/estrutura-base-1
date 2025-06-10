'use client'
import { useState } from "react";

import styles from './Header.module.scss'
import Navbar from "@/components/Navbar";
import MenuHamburguer from "@components/MenuHamburguer";

import { IoCartOutline  } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const abrirMenu = () => setIsOpen(!isOpen);

    return(
        <header className={styles.cabecalho}>
            <div>
                <h1 className={styles.titulo}> AuMiau Store </h1>
                <span> Loja de Pets e Adoção </span>
            </div>
            <Navbar isOpen={isOpen} />
            <div className={styles.topo}>
                <ul className={`${styles.navIcon}`}>
                    <li> 
                        <IoIosSearch />
                    </li>
                    <li> 
                        <IoCartOutline />
                    </li>
                    <li>
                        <MenuHamburguer isOpen={isOpen} abrirMenu={abrirMenu} />
                    </li>
                </ul>
            </div>

        </header>
    )
}