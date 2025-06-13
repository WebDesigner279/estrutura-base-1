import styles from "./PetCards.module.scss";

type Props = {
    titulo: string
    imagem:string
    categoria?: string
    preco?:string
    descricao: string
}

export default function ProdutosCards({
    titulo,
    descricao,
    imagem,
    categoria,
    preco
} : Props) {
	return (
            <li className={styles.listaItem}>
                <div>
                    <img className={styles.imagens} src={imagem} alt={titulo} />
                    <h3 className={styles.titulo}>{titulo}</h3>
                </div>
                <p className="paragrafo"><strong>Categoria:</strong> {categoria}</p>
                <p className="paragrafo"><strong>Descrição:</strong> {descricao}</p>
                <p className="paragrafo"><strong>Preço:</strong> R$ {preco}</p>
                <div>
                    <button className={styles.botao}>Adicionar ao carrinho</button>
                </div>
            </li>
	);
}
