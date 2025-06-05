import { configureStore } from "@reduxjs/toolkit";

import { dogApi } from "@/utils/api/dogApi";

export const store = configureStore({
    reducer: {
        [dogApi.reducerPath]: dogApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dogApi.middleware),
})

export default store   