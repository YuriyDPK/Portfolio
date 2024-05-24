"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-5 flex justify-between items-center w-9/10 mx-auto ">
      <Link
        href="/"
        className="text-3xl hover:text-yellow-600"
        style={{ fontFamily: "Viaoda Libre", fontWeight: 100 }}
      >
        Y.P.
      </Link>
      <nav className="hidden md:flex gap-10">
        <Link
          href="/"
          className="text-2xl hover:text-yellow-600"
          style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
        >
          Главная
        </Link>
        <Link
          href="/portfolio"
          className="text-2xl hover:text-yellow-600"
          style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
        >
          Работы
        </Link>
        <Link
          href="/market"
          className="text-2xl hover:text-yellow-600"
          style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
        >
          Магазин
        </Link>
        <Link
          href="/about"
          className="text-2xl hover:text-yellow-600"
          style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
        >
          Обо мне
        </Link>
      </nav>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none hover:text-yellow-600"
        >
          &#9776;
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white absolute top-5 right-5 focus:outline-none hover:text-yellow-600"
          >
            &times;
          </button>
          <nav className="flex flex-col gap-10 text-center">
            <Link
              href="/"
              className="text-2xl text-white hover:text-yellow-600"
              onClick={toggleMenu}
              style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
            >
              Главная
            </Link>
            <Link
              href="/"
              className="text-2xl text-white hover:text-yellow-600"
              onClick={toggleMenu}
              style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
            >
              Работы
            </Link>
            <Link
              href="/"
              className="text-2xl text-white hover:text-yellow-600"
              onClick={toggleMenu}
              style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
            >
              Магазин
            </Link>
            <Link
              href="/"
              className="text-2xl text-white hover:text-yellow-600"
              onClick={toggleMenu}
              style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
            >
              Обо мне
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
