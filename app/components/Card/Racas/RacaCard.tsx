import styles from "./RacaCards.module.scss";

type Props = {
    nome:string,
    original: string,
    temperamento: string ,
    vida_util: string,
    tamanho: string,
}

export default function RacaCard({
    nome,
    original,
    temperamento,
    vida_util,
    tamanho
} : Props) {
	return (
            <li className={styles.listaItem}>
                {/* <img className={styles.imagens} src={imagem} alt={nome} /> */}
                <div className={styles.listaTexto}>
                    <h3 className={styles.titulo}>Raça: {nome}</h3>
                    <ul className={styles.listaDescricao}>
                        <li className={styles.listaDescricaoItem}>Tempo de vida: {vida_util}</li>
                        <li className={styles.listaDescricaoItem}>Origem: {original}</li>
                        <li className={styles.listaDescricaoItem}>Temperamento: {temperamento}</li>
                        <li className={styles.listaDescricaoItem}>Altura: {tamanho}</li>
                    </ul>
                </div>
            </li>
	);
}