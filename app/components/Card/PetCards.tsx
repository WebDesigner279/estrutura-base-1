import Link from "next/link";
import styles from "./PetCards.module.scss";

type Props = {
    titulo: string
    imagem:string
    categoria?: string
    preco?:string
    descricao: string
}

export default function PetCard({
    titulo,
    descricao,
    imagem
} : Props) {
	return (
            <li className={styles.listaItem}>
                <div className={styles.listaTexto}>
                    <img className={styles.imagens} src={imagem} alt={titulo} />
                    <h3 className={styles.titulo}>{titulo}</h3>
                </div>
                    <p className={styles.listaTexto}>{descricao}</p>
            </li>
	);
}
