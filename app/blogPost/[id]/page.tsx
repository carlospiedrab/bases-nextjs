import { getBlogPostById } from "@/data/BlogPostData";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
    params: Promise<{
        id: string;
    }>;
}

export default async function BlogPostIdPage({params}: Params) {
    const paramValues = await params;
    const id = paramValues.id;
    const post = getBlogPostById(id);
    if(!post) return notFound();
  return (
    <div>
      <h1 className="text-center text-3xl">Post Detalle</h1>
      <h1 className="text-2xl ml-2">
        <p className="font-bold">Titulo:</p>
        {post.titulo}
      </h1>
      <h1 className="text-2xl ml-2">
        <p className="font-bold">Contenido:</p>
        {post.contenido}
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 ml-2 py-2 px-4 rounded-2xl">
        <Link href="/blogPost">Regresar</Link>
      </button>
    </div>
  );
}