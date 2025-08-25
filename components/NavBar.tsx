"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathName = usePathname();
  return (
    <div>
        <nav>
            <Link href="/" className={pathName === "/" ? "bg-amber-400" : "px-3 py-2"}>Home</Link>
            <Link href="/dashboard" className={pathName === "/dashboard" ? "bg-amber-400" : "px-3 py-2"}>Dashboard</Link>
            <Link href="/contacto" className={pathName === "/contacto" ? "bg-amber-400" : "px-3 py-2"}>Contacto</Link>
            <Link href="/blogPost" className={pathName === "/blogPost" ? "bg-amber-400" : "px-3 py-2"}>BlogPosts</Link>
            <Link href="/producto" className={pathName === "/producto" ? "bg-amber-400" : "px-3 py-2"}>Productos</Link>
            <Link href="/tarea" className={pathName === "/tarea" ? "bg-amber-400" : "px-3 py-2"}>Tareas</Link>
            <Link href="/articulo" className={pathName === "/articulo" ? "bg-amber-400" : "px-3 py-2"}>Articulo</Link>
            <Link href="/usuarios/carlospiedra" className={pathName === "/usuarios/carlospiedra" ? "bg-amber-400" : "px-3 py-2"}>Mi Perfil</Link>
        </nav>
    </div>
  )
}