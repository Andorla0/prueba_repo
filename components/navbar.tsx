
"use client";
import React from "react";
import {Navbar, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function HomeNavbar() {
  return (
    <div className="bg-blue-400">
      <Navbar shouldHideOnScroll className="flex flex-row  align-center justify-center my-7 ">
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="hover:bg-white" color="foreground" href="/skills">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="projects" aria-current="page">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
