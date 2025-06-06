import { Raca } from "@/components/Card/Racas"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type TarefaState = {
    dog: Raca[]
}

const initialState: TarefaState = {
    dog: [],
}

const tarefaSlice = createSlice({
    name:'tarefa',
    initialState,
    reducers: {
        carregaRacas:(state, action: PayloadAction<Raca[]>) =>{
            state.dog = action.payload
        },
        favoritar: (
            state, 
            action: PayloadAction<{ id: string; favorito: boolean }>
        )=> {
            const indexDaTarefa = state.dog.findIndex(
                (f) => f.id === action.payload.id
            )     

            if(indexDaTarefa >= 0){
                state.dog[indexDaTarefa].favorito = action.payload.favorito 
            }
        }
    }
})

export const { favoritar, carregaRacas } = tarefaSlice.actions

export default tarefaSlice.reducer