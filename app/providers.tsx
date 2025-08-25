"use client"

import { persistor, store } from "@/store/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

export function Providers({ children }: { children: React.ReactNode}) {
    return (
    <Provider store={store}>
        <PersistGate loading={<div>Cargando ...</div>} persistor={persistor}>
            {children}
        </PersistGate>
        
    </Provider>
    )
}