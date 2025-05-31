import item from '@/models/Servicos'
import PetCard from '../Card/PetCard'
import style from './ListaCard.module.scss'

export type Props = {
    itens: item[]
}

export default function Listas ({itens} : Props) {
    return(
        <ul className={style.lista}>
            {itens.map((servico) => (
                <PetCard
                key={servico.id}
                imagem={servico.imagem}
                titulo={servico.titulo}
                paragrafo={servico.paragrafo}
                />
            ))}    
        </ul>
    )
    
}