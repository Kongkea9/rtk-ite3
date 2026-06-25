import counterReducer from "./features/counter/counterSlice"
import { configureStore } from '@reduxjs/toolkit'


import { ecommerceApi } from "./features/api/ecommerceApi"


export const makeStore = () => {
  return configureStore({
    reducer: {
        counter : counterReducer,
       
         [ecommerceApi.reducerPath]: ecommerceApi.reducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ecommerceApi.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']









