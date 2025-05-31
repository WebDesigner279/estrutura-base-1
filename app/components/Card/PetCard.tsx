import styles from "./PetCard.module.scss";

type Props = {
    titulo: string
    paragrafo:string
    imagem:string
}

export default function PetCard({
    titulo,
    paragrafo,
    imagem
} : Props) {
	return (
            <li className={styles.listaItem}>
                <img className={styles.imagens} src={imagem} alt={titulo} />
                <div className={styles.listaTexto}>
                    <h3 className={styles.titulo}>{titulo}</h3>
                    <p>{paragrafo}</p>
                </div>
                <button className={styles.botao}>Ver mais</button>
            </li>
	);
}
