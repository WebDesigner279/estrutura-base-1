"use client"

import { useGetRacasQuery }  from "@/utils/api/dogApi";
import RacaCard from "@/components/Card/Racas";

export interface Raca {
    id:number;
    origin: string;
    temperament: string ;
    life_span: string;
    name: string;
    height: {
        metric: string;
    };
};

export default function ListasRacas( ) {
    const {data: racas, isLoading, error} = useGetRacasQuery();

    if(isLoading) return <h2>Buscando informações...</h2>
    if(error) return <p>Erro ao carregar as informações!</p>

    return(
        <ul className="lista">
            {racas?.map((raca) => {
                return(
                    <RacaCard 
                    key={raca.id}
                    nome={raca.name}
                    original={raca.origin}
                    tamanho={raca.height.metric}
                    temperamento={raca.temperament}
                    vida_util={raca.life_span}
                    
                    />
                )
            })}
        </ul>
    )
}