'use client';

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  agregarTarea,
  cambiarEstadoTarea,
  removerTarea,
} from "@/store/tareaSlice";
import { useState } from "react";

export default function TareaPage() {
  const [input, setInput] = useState("");
  const tareas = useAppSelector((state) => state.tarea.tareas);
  const dispatch = useAppDispatch();

  const handleAgregar = () => {
    if (input.trim() === "") return;
    dispatch(agregarTarea(input));
    setInput("");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-6">
      <h1 className="text-3xl font-bold">Lista de Tareas con Redux Toolkit</h1>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe una Tarea ..."
          className="border px-4 py-2 rounded"
        />
        <button
          onClick={handleAgregar}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Agregar Tarea
        </button>
      </div>

      <ul className="w-full max-w-md mt-6">
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span
              onClick={() => dispatch(cambiarEstadoTarea(tarea.id))}
              className={`cursor-pointer ${
                tarea.completado ? "line-through text-gray-500" : ""
              }`}
            >
              {tarea.texto}
            </span>
            <button
              onClick={() => dispatch(removerTarea(tarea.id))}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
