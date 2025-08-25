import { GetProductById } from "@/data/ProductoData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
    params: Promise<{
        id: string
    }>
}

export default async function ProductoIdPage({params}: Params) {
    const paramValues = await params;
    const id = paramValues.id;
    const producto = await GetProductById(id);
    if(!producto) return notFound();
  return (
    <div>
      <h1 className="text-center text-3xl">Producto Detail</h1>
      <Image src={producto.image} alt="Producto Imagen" width={200} height={200} className="rounded-lg shadow-md mx-auto"/>
      <h1 className="text-2xl ml-2">
        <p className="font-bold">Title: </p>
        {producto.title}
      </h1>
      <h1 className="text-2xl ml-2">
        <p className="font-bold">Description: </p>
        {producto.description}
      </h1>
      <h1 className="text-2xl ml-2">
        <p className="font-bold">Price: </p>
        $ {producto.price}
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 ml-2 py-2 px-4 rounded-2xl">
        <Link href="/producto">Regresar</Link>
      </button>
    </div>
  );
}