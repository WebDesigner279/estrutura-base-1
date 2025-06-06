import { configureStore } from "@reduxjs/toolkit";

import { dogApi } from "@/utils/api/dogApi";
import tarefaReducer from "./reducer/tarefa"

export const store = configureStore({
    reducer: {
        [dogApi.reducerPath]: dogApi.reducer,
        tarefa: tarefaReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dogApi.middleware),
})

export type RootReducer = ReturnType<typeof store.getState>
export default store   