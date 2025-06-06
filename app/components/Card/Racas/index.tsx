import { useDispatch, useSelector } from "react-redux";

import { useGetImagesByIdQuery } from "@/utils/api/dogApi";
import styles from "./RacaCards.module.scss";
import { RootReducer } from "@store/index";
import { favoritar } from "@/store/reducer/tarefa";

export interface Raca {
    id: string
    nome:string,
    imagem:string,
    original: string,
    temperamento: string ,
    vida_util: string,
    tamanho: string,
    favorito: boolean
}

export default function RacaCard({
    id,
    nome,
    imagem,
    original,
    temperamento,
    vida_util,
    tamanho
} : Raca) {
    const dispatch = useDispatch();
    const { data, isLoading } = useGetImagesByIdQuery(imagem)
    const imageUrl = data?.url;

    const favoritoAtual = useSelector(
        (state: RootReducer) =>
          state.tarefa.dog.find((raca) => raca.id === id)?.favorito ?? false
    );
    
    const clickFavoritar = () => {
        console.log(dispatch(favoritar({ id: id, favorito: !favoritoAtual })))
    }


	return (
        <li className={styles.listaItem}>
            {isLoading ? (
                <p>Carregando imagem...</p>
            ) : (
            <img className={styles.imagens} src={imageUrl} alt={nome} /> 
            )}
            <div className={styles.listaTexto}>
                <div className={styles.div}>
                    <h3 className={styles.titulo}><strong>Raça:</strong> {nome}</h3>
                    <button 
                        className={styles.botao}
                        id={id}
                        onClick={clickFavoritar}
                    >
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={favoritoAtual ? 'red' : 'none'}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="red"
                            width={25}

                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                        </svg>
                    </button>
                </div>
                <ul className={styles.listaDescricao}>
                    <li className={styles.listaDescricaoItem}><strong>Tempo de vida:</strong> {vida_util}</li>
                    <li className={styles.listaDescricaoItem}><strong>Origem:</strong> {original}</li>
                    <li className={styles.listaDescricaoItem}><strong>Temperamento:</strong> {temperamento}</li>
                    <li className={styles.listaDescricaoItem}><strong>Altura: </strong>{tamanho}</li>
                </ul>
            </div>
        </li>
	);
}