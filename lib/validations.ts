import { z } from "zod";

export const clienteSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.email("Debe ser un email valido"),
  telefono: z.string().optional(),
});
