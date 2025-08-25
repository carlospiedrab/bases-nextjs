import { BlogPostType } from "@/types/BlogPostType";

const posts: BlogPostType[] = [
    {
        id: "1",
        titulo: "Entendiendo Next.js",
        contenido: "Estrategias de Renderizado ....."
    },
     {
        id: "2",
        titulo: "Optimizando el desempeno Next.js",
        contenido: "Mejores practicas ........."
    }
];

export function getBlogPosts() {
    return posts;
}

export function getBlogPostById(id: string){
    const post = posts.find(p => p.id === id);
    return post;
}