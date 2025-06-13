
import item from "@/models/Servicos";
import ProdutosCards from "../Card/ProdutosCards";

export type Props = {
    itens: item[]
    
}

export default function ListasRacas( { itens }: Props ) {   

    return (

        <ul className="lista">
            {itens.map((servico) => (
                <ProdutosCards
                key={servico.id}
                imagem={servico.imagem}
                titulo={servico.titulo}
                categoria={servico.categoria}
                descricao={servico.descricao}
                preco={servico.preco}
                />
            ))}    
        </ul>
    )
}