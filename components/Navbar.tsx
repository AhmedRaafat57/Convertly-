"use client";

import React, { useState } from "react";
// usePathname removed: navbar will not vary blur by route
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // Use the same semi-transparent background & no blur on all pages
  const bgClass = "bg-background/85";
  const blurClass = "backdrop-blur-lg";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between h-20 shadow-sm ${bgClass} ${blurClass} px-4 md:px-8`}
    >
      <Logo />

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/"
              className="hover:text-red-700 duration-300 hover:font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-red-700 duration-300 hover:font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className="hover:text-red-700 duration-300 hover:font-semibold"
            >
              Privacy policy
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-red-700 duration-300 hover:font-semibold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right actions (desktop) */}
      <div className="hidden md:flex items-center gap-2">
        <Button>
          <Link href="/auth/login" className="flex items-center gap-2">
            <Github />
            Github
          </Link>
        </Button>
      </div>

      {/* Mobile: menu button */}
      <div className="md:hidden">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 inline-flex items-center justify-center hover:bg-accent/50"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute left-4 right-4 top-20 bg-background/95 border rounded-lg shadow-lg p-4 md:hidden">
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded hover:bg-accent/40"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded hover:bg-accent/40"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded hover:bg-accent/40"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded hover:bg-accent/40"
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/auth/login"
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded bg-primary text-primary-foreground text-center"
              >
                Login / Github
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
