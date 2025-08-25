
interface Params {
    params: Promise<{
        username: string;
    }>;
}

export default async function UsuarioPage({params}: Params) {
    const paramValues = await params;
    const username = paramValues.username;
  return (
    <div>
      <h1 className="text-2xl">Hola {username}</h1>
    </div>
  );
}