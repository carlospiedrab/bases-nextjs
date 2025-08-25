import { getBlogPosts } from "@/data/BlogPostData";

export async function GET(){

   const blogPosts = await getBlogPosts();

   return new Response(JSON.stringify(blogPosts), {
    status: 200,  // OK
    headers: { 'Content-Type': 'application/json'}
   });

}