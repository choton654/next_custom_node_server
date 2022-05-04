import { configureStore } from '@reduxjs/toolkit'
import counter from "../features/counterSlice"
import { pokemonApi } from "../services/query"
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        counter,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)