import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="p-5 flex justify-between align-middle w-9/10 mx-auto">
      <Link
        href="/"
        className="text-3xl"
        style={{ fontFamily: "Viaoda Libre", fontWeight: 100 }}
      >
        Y.P.
      </Link>
      <div className="flex gap-10">
        <Link
          href="/"
          className="text-2xl"
          style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
        >
          Главная
        </Link>
        <Link
          href="/"
          className="text-2xl"
          style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
        >
          Работы
        </Link>
        <Link
          href="/"
          className="text-2xl"
          style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
        >
          Магазин
        </Link>
        <Link
          href="/"
          className="text-2xl"
          style={{ fontFamily: "Roboto Flex", fontWeight: 100 }}
        >
          Обо мне
        </Link>
      </div>
    </div>
  );
}
