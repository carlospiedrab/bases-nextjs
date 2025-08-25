import prisma from "@/lib/prisma";
import { clienteSchema } from "@/lib/validations";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

// Obtener un Cliente por Id
export async function GET(request: NextRequest, { params }: Params) {
  const paramValues = await params;
  const id = paramValues.id;
  const cliente = await prisma.cliente.findUnique({
    where: { id: Number(id) },
  });
  return NextResponse.json(cliente, { status: 200 });
}

//Actualizar un cliente

export async function PUT(request: NextRequest, { params }: Params) {
  const paramValues = await params;
  const id = paramValues.id;
  
  try {
      const data = await request.json();
      
      // Validar con Zod
      const validData = clienteSchema.partial().parse(data);

      const cliente = await prisma.cliente.update({
        where: { id: Number(id) },
        data: validData,
  });
  return NextResponse.json(cliente, { status: 200 });
  } catch (error) {
    if(error instanceof Error){
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        )
    }
  }
}

// Eliminar un cliente
export async function DELETE(request: NextRequest, { params }: Params) {
  const paramValues = await params;
  const id = paramValues.id;
  await prisma.cliente.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ mensaje: "Cliente Eliminado" });
}
