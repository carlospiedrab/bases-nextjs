import { ProductoType } from "@/types/ProductoType";

export async function GetProductos() {
    const res = await fetch("https://fakestoreapi.com/products",
        {
            next: {revalidate: 300}
        }
    );
    const productos: ProductoType[] = await res.json();
    return productos;
}

export async function GetProductById(id: string){
    const res = await fetch(`https://fakestoreapi.com/products/${id}`,
        {
            next: {revalidate: 300}
        }
    );
    const producto: ProductoType = await res.json();
    return producto;
}