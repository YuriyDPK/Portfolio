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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = (link: string) => () => setHoveringLink(link);
  const handleMouseLeave = () => setHoveringLink(null);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

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
      <div className="absolute bottom-0 left-0 smartphone:w-full smartphone:h-full w-150 h-150 ">
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
        <div
          className="desktop3:absolute desktop3:w-[1300px] desktop3:h-[1300px] desktop3:bottom-0 desktop2:w-[1100px] desktop2:h-[1100px] desktop:w-[1000px] desktop:h-[1000px] laptop:w-[900px] laptop:h-[900px] tablet:w-[850px] tablet:h-[850px] smartphone:w-[750px] smartphone:h-[750px] w-[750px] h-[750px] absolute bottom-minus_seventeen left-minus_tritdteen smartphone:left-auto "
          ref={personRef}
        >
          <Image
            src="/img/image.svg"
            alt="Person"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button
          className="absoulte block smartphone:hidden mx-auto mt-200 py-1 px-5 text-xxl border border-black rounded-lg font-medium"
          onClick={handleModalOpen}
        >
          Мои соц.сети
        </button>
        <h1
          className="smartphone:text-xxx absolute smartphone:left-0 smartphone:top-10 font-light hover:text-gray-800 text-xxxsm right-8/10 bottom-30"
          ref={firstRef}
        >
          01
        </h1>
        <p
          className="smartphone:text-xxo mt-4 absolute smartphone:right-5 smartphone:bottom-30 smartphone:w-1/4 smartphone:text-left tracking-tight leading-tight hover:text-gray-800 w-full text-center text-xxlg top-0 smartphone:top-auto"
          style={{ fontFamily: "Roboto Flex", fontWeight: 400 }}
          ref={textRef}
        >
          Совмещаю ваши идеи и свои возможности
        </p>
      </div>
      <div
        className={clsx(
          "absolute smartphone:bottom-0 top-35 smartphone:top-auto smartphone:left-20 left-0 smartphone:p-4 p-0 text-center smartphone:text-left hover:text-yellow-700 smartphone:text-xl text-xxm smartphone:w-half_past w-full transition-transform duration-1000 ease-out ",
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
          "absolute top-50 left-20 center border h-7/10 border-black transition-transform duration-1000 ease-out laptop:block hidden",
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
        <div className="smartphone:flex flex-col items-center space-y-4 hidden">
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
          "absolute smartphone:bottom-0 top-10 smartphone:top-auto smartphone:right-20 right-0 p-4 center transition-transform duration-1000 ease-out smartphone:w-auto w-full",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <div className="flex items-center align-middle justify-center smartphone:gap-10 gap-7/10">
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-8 rounded-smartphone shadow-smartphone">
            <h2 className="text-2xl mb-4 text-center">Мои соц.сети</h2>
            <div className="flex space-x-4">
              {["vk", "inst", "tg"].map((link) => (
                <Link key={link} href="#">
                  <Image
                    src={`/img/${link}.svg`}
                    alt={link}
                    width={50}
                    height={50}
                  />
                </Link>
              ))}
            </div>
            <button
              className="mt-4 py-2 px-4 bg-red-500 text-white rounded-smartphone w-full"
              onClick={handleModalClose}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
