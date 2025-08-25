
interface Params {
    params: Promise<{
        slug: string[];
    }>
}

export default async function BlogPage({params}: Params) {
    const paramValues = await params;
    const slug = paramValues.slug;
  return (
    <div>
      <h1 className="text-3xl">Blog Ruta: {slug.join(" / ")}</h1>
    </div>
  );
}