"use client";
import React from "react";
import Link from 'next/link'

// (Inicio, Mis Películas, Añadir Película, Perfil, Cerrar Sesión)
export default function HomeNavbar() {
  return (
    <div className="bg-black flex justify-center items-center">
      <div className=" flex flex-row justify-around gap-20 py-8 ">
        <div className="flex gap-4 justify-center">
          <div>
            <Link href="/" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full">
            Home
            </Link>
          </div>
          <div >
            <Link href="/my-movies" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full">
            My movies
            </Link>
          </div>
          <div>
            <Link href="/add-movies" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full" color="foreground" >
            Add movies
            </Link>
          </div>
          <div>
            <Link href="/profile" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full" color="foreground" >
            Profile
            </Link>
          </div>
          <div>
            <Link href="/login" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full" color="foreground" >
            Login
            </Link>
          </div>
        </div>

      
      </div>
    </div>
  );
}
