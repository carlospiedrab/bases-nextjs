import prisma from "@/lib/prisma";
import { clienteSchema } from "@/lib/validations";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function GET() {
    const clientes = await prisma.cliente.findMany();
    return NextResponse.json(clientes, {status: 200});
}

export async function POST(request: Request){
    try {
    const data = await request.json();
    
    // Validar con Zod
    const validData = clienteSchema.parse(data);

    const nuevoCliente = await prisma.cliente.create({
        data: validData
    });
    return NextResponse.json(nuevoCliente, {status: 201});
    } catch (error) {
        if(error instanceof ZodError){
            return NextResponse.json(
                {error: error.issues},
                { status: 400 }
            );
        }
    }    
}