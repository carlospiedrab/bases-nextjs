
export type TareaType = {
    id: string;
    texto: string;
    completado: boolean;
};

export type TareaStateType = {
    tareas: TareaType[];
}