"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./ListaRacas.module.scss";
import { useGetRacasQuery }  from "@/utils/api/dogApi";
import { carregaRacas } from "@store/reducer/tarefa";
import RacaCard from "@/components/Card/RacaCards";
import { RootReducer } from "@/store";

export default function ListasRacas( ) {   
    const limit = 9;
    const [page, setPage] = useState(0);
    const {data: racas, isLoading, error, isFetching} = useGetRacasQuery( { page, limit });
    const dispatch = useDispatch();
    const racaComStatus = useSelector((state: RootReducer) => state.tarefa.dog)

    useEffect(() => {
        if(racas) {
            dispatch(carregaRacas(racas))
            // setListaRacas(prev => [...prev, ...racas])  
        }
    }, [dispatch, racas])
    if (isLoading) return <h2>Buscando informações...</h2>
    if (error) return <p>Erro ao carregar as informações!</p>

    const proximaPage = () => {
        setPage(prev => prev + 1);
    }
    const voltaPage = () => {
        setPage(prev => prev - 1);
    }

    const filtrarTarefas = () => {
        if (!racas) return []

        const racasCombinadas = racas.map((raca) => {
            const encontrado = racaComStatus.find((r) => r.id === raca.id)

            return{
                ...raca,
                favorito: encontrado?.favorito || false
            }
        });
        const filtrados = racasCombinadas
        return filtrados
    }

    const racasFiltradas = filtrarTarefas()
    

    return(
        <ul className="lista">
            {racasFiltradas?.length === 0 ? (
                <p>Lista vazia.</p>
            ) : (racasFiltradas?.map((raca) => {
                console.log(racasFiltradas)
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
                        favorito= {raca.favorito}
                        />
                    )
                })  
            )}
            <div className={`${isLoading ? style.hidden : style.divBotao}`}>
                <button className={`${page === 0 ? style.hidden : 'botao'}`} onClick={voltaPage} disabled={isFetching}>
                    {isFetching ? "Carregando..." : "Voltar"}
                </button>
                <button className="botao" onClick={proximaPage} disabled={isFetching}>
                    {isFetching ? "Carregando..." : "Próxima"}
                </button>
           
            </div>
            
        </ul>
    )
}
