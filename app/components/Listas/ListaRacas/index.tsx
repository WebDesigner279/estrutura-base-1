"use client"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useGetRacasQuery }  from "@/utils/api/dogApi";
import { setRacas } from "@/store/reducer/tarefa";
import RacaCard from "@components/Card/Racas";
import style from "./ListaRacas.module.scss";

export default function ListasRacas( ) {   
    const dispatch = useDispatch();
    const [listaRacas, setListaRacas] = useState<any[]>([])
    const [page, setPage] = useState(0);
    const limit = 9;
    const {data: racas, isLoading, error, isFetching} = useGetRacasQuery( { page, limit });

    useEffect(() => {
        if(racas) {
            setListaRacas(prev => [...prev, ...racas])

            const raçasComFavorito = racas.map((r) => ({
                id: r.id,
                nome: r.name,
                imagem: r.reference_image_id,
                original: r.origin,
                tamanho: r.height.metric,
                temperamento: r.temperament,
                vida_util: r.life_span,
                favorito: false
              }));
          
              dispatch(setRacas(raçasComFavorito));
            }
    }, [racas])
        

    const proximaPage = () => {
        setPage(prev => prev + 1);
    }

    const voltaPage = () => {
        setPage(prev => prev - 1);
    }


    return(
        <>
        
            {listaRacas.length === 0 && isLoading && <h2>Buscando informações...</h2>}
            {error && <p>Erro ao carregar as informações!</p>}
            <ul className="lista">
                {racas?.map((raca) => {
                    return(
                        <RacaCard 
                        key={raca.id}
                        id={raca.id}
                        nome={raca.name}
                        imagem={raca.reference_image_id}
                        original={raca.origin}
                        tamanho={raca.height.metric}
                        temperamento={raca.temperament}
                        vida_util={raca.life_span}
                        favorito= {true}
                        />
                    )
                })}
            </ul>  
            <div className={`${isLoading ? style.hidden : style.divBotao}`}>
                <button className={`${page === 0 ? style.hidden : 'botao'}`} onClick={voltaPage} disabled={isFetching}>
                    {isFetching ? "Carregando..." : "Voltar"}
                </button>
                <button className="botao" onClick={proximaPage} disabled={isFetching}>
                    {isFetching ? "Carregando..." : "Próxima"}
                </button>
           
            </div>
        </>
    )
}