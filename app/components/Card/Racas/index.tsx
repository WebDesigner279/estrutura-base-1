import { useGetImagesByIdQuery } from "@/utils/api/dogApi";
import styles from "./RacaCards.module.scss";

type Props = {
  nome: string;
  imagem: string;
  original: string;
  temperamento: string;
  vida_util: string;
  tamanho: string;
};

export default function RacaCard({
  nome,
  imagem,
  original,
  temperamento,
  vida_util,
  tamanho,
}: Props) {
  const { data, isLoading } = useGetImagesByIdQuery(imagem);
  const imageUrl = data?.url;

  return (
    <li className={styles.listaItem}>
      {isLoading ? (
        <p>Carregando imagem...</p>
      ) : (
        <img className={styles.imagens} src={imageUrl} alt={nome} />
      )}
      <div className={styles.listaTexto}>
        <h3 className={styles.titulo}>
          <strong>Raça:</strong> {nome}
        </h3>
        <ul className={styles.listaDescricao}>
          <li className={styles.listaDescricaoItem}>
            <strong>Tempo de vida:</strong> {vida_util}
          </li>
          <li className={styles.listaDescricaoItem}>
            <strong>Origem:</strong> {original}
          </li>
          <li className={styles.listaDescricaoItem}>
            <strong>Temperamento:</strong> {temperamento}
          </li>
          <li className={styles.listaDescricaoItem}>
            <strong>Altura: </strong>
            {tamanho}
          </li>
        </ul>
      </div>
    </li>
  );
}
