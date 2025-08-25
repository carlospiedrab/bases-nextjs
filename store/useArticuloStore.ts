import { ArticuloStateType } from "@/types/ArticuloType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useArticuloStore = create<ArticuloStateType>()(
    persist(
        (set) => ({
            articulos: [],
            agregarArticulo: (articulo) =>
                set((state) => ({
                    articulos: [
                        ...state.articulos,
                        {
                            id: crypto.randomUUID(),
                            descripcion: articulo.descripcion,
                            cantidad: articulo.cantidad,
                            tipoCantidad: articulo.tipoCantidad,
                            completado: articulo.completado
                        }
                    ]
                })),
            cambiarEstadoArticulo: (id) =>
                set((state) => ({
                    articulos: state.articulos.map((articulo) =>
                        articulo.id === id ? {...articulo, completado: !articulo.completado}: articulo
                    )
                })),   
            removerArticulo: (id) => 
                set((state) => ({
                    articulos: state.articulos.filter((articulo) => articulo.id !==id)
                })), 
        }),
        {
            name: "articulo-storage"
        }
    )
);