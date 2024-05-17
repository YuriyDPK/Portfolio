"use client";
import Link from "next/link";
import { useState, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import clsx from "clsx"; // Используется для условного добавления классов

export default function MainSection() {
  const personRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [hoveringLink, setHoveringLink] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseEnter = (link: string) => () => setHoveringLink(link);
  const handleMouseLeave = () => setHoveringLink(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if (personRef.current && firstRef.current && textRef.current) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const xOffset = (clientX - innerWidth / 2) * 0.02;
        const yOffset = (clientY - innerHeight / 2) * 0.02;
        personRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        firstRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        textRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove as any);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as any);
    };
  }, []);

  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/img/bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className={clsx(
          "relative z-10 text-center w-60 h-full transition-transform duration-1000 ease-out",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <div className="relative w-[1100px] h-[1100px] mx-auto" ref={personRef}>
          <Image
            src="/img/image.svg"
            alt="Person"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1
          className="text-xxx absolute left-0 top-10 font-light"
          ref={firstRef}
        >
          01
        </h1>
        <p
          className="text-xxo mt-4 absolute right-5 bottom-30 w-1/4 text-left tracking-tight leading-tight"
          style={{ fontFamily: "Roboto Flex", fontWeight: 400 }}
          ref={textRef}
        >
          Совмещаю ваши идеи и свои возможности
        </p>
      </div>
      <div
        className={clsx(
          "absolute bottom-0 left-20 p-4 hover:text-yellow-700 text-l w-half_past transition-transform duration-1000 ease-out",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        Все работы представленные на этом сайте защищены авторским правом
      </div>
      <div
        className={clsx(
          "absolute top-50 left-20 center border h-7/10 border-black transition-transform duration-1000 ease-out",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      ></div>
      <div
        className={clsx(
          "absolute top-50 right-20 p-4 center transition-transform duration-1000 ease-out",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          {["vk", "inst", "tg"].map((link) => (
            <Link
              key={link}
              href="#"
              className="text-2xl"
              onMouseEnter={handleMouseEnter(link)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={`/img/${link}${hoveringLink === link ? "Hover" : ""}.svg`}
                alt={link}
                width={60}
                height={60}
              />
            </Link>
          ))}
        </div>
      </div>
      <div
        className={clsx(
          "absolute bottom-0 right-20 p-4 center transition-transform duration-1000 ease-out",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <div className="flex items-center align-middle justify-center gap-10">
          {["back", "next"].map((link) => (
            <Link
              key={link}
              href="#"
              className="text-2xl"
              onMouseEnter={handleMouseEnter(link)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={`/img/${link}${hoveringLink === link ? "Hover" : ""}.svg`}
                alt={link}
                width={50}
                height={50}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
