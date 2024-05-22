
"use client";
import React from "react";
import {Navbar, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function HomeNavbar() {
  return (
    <div className="bg-black">
      <Navbar shouldHideOnScroll className="flex flex-row  align-center justify-center my-7 ">
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:bg-green-300 hover:text-black ease-out duration-500 p-6 rounded-full" color="foreground" href="/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
