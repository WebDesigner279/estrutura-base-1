import item from "@/models/Servicos";
import PetCard from "@/components/Card/PetCards";

export type Props = {
    itens: item[]
}

export default function Listas ({itens} : Props) {
    return(
        <ul className="lista">
            {itens.map((servico) => (
                <PetCard
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