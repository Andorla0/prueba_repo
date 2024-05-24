"use client";
import React from "react";
import Link from 'next/link'

import {Navbar, NavbarContent, NavbarItem} from "@nextui-org/react";
// (Inicio, Mis Películas, Añadir Película, Perfil, Cerrar Sesión)
export default function HomeNavbar() {
  return (
    <div className="bg-black">
      <Navbar shouldHideOnScroll className="flex flex-row  align-center justify-center my-7 ">
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/home" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full">
            Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/my-movies" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full">
            My movies
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/add-movies" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full" color="foreground" >
            Add movies
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/profile" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full" color="foreground" >
            Profile
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/login" className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full" color="foreground" >
            Login
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
