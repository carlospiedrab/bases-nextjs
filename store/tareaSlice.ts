import { TareaStateType } from "@/types/TareaType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: TareaStateType = {
    tareas: []
}

export const tareaSlice = createSlice({
    name: "Tarea",
    initialState,
    reducers: {
        agregarTarea: (state, action: PayloadAction<string>) => {
            state.tareas.push({
                id: crypto.randomUUID(),
                texto: action.payload,
                completado: false
            })
        },
        cambiarEstadoTarea: (state, action: PayloadAction<string>) => {
            const tarea = state.tareas.find((t) => t.id === action.payload);
            if(tarea) {
                tarea.completado = !tarea.completado;
            }
        },
        removerTarea: (state, action: PayloadAction<string>) => {
            state.tareas = state.tareas.filter((t) => t.id !== action.payload);
        }
    }
});

export const { agregarTarea, cambiarEstadoTarea, removerTarea } = tareaSlice.actions;
export default tareaSlice.reducer;