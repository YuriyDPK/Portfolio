"use client";
import Link from "next/link";
import { useState, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import clsx from "clsx"; // Используется для условного добавления классов

export default function MainSection() {
  const personRef = useRef<HTMLDivElement>(null);

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
      if (personRef.current) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const xOffset = (clientX - innerWidth / 2) * 0.02;
        const yOffset = (clientY - innerHeight / 2) * 0.02;

        personRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove as any);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as any);
    };
  }, []);
  const links: { [key: string]: string } = {
    vk: "https://vk.com/ichsvboy",
    inst: "https://www.instagram.com/julprocesar/",
    tg: "https://web.telegram.org/k/#@thecleverest1",
  };
  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-auto desktop3:w-full desktop3:h-full desktop2:w-full desktop2:h-full desktop:w-9/10 desktop:h-9/10 laptop:w-8/10 laptop:h-8/10 tablet:w-7/10 tablet:h-7/10 w-150 h-150">
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
          className=" desktop3:absolute desktop3:w-[1300px] desktop3:h-[1300px] desktop3:bottom-0 desktop2:w-[1100px] desktop2:h-[1100px]  desktop:w-[1000px] desktop:h-[1000px] laptop:w-[900px] laptop:h-[800px] tablet:w-[850px] tablet:h-[750px] smartphone:w-[750px] smartphone:h-[750px] w-[750px] h-[750px] absolute desktop3:left-minus_tritdteen desktop2:left-minus-five desktop:left-0 laptop:left-minus-ten tablet:left-minus_eight left-0 bottom-minus_seventeen smartphone_mini:left-minus_tritdteen "
          ref={personRef}
        >
          <Image
            src="/img/imge.svg"
            alt="Person"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button
          className="absoulte block smartphone:hidden mx-auto mt-hundred py-1 px-5 text-xxm2 border border-black rounded-lg font-medium"
          onClick={handleModalOpen}
        >
          Мои соц.сети
        </button>
        <h1 className="right-8/10 bottom-30 desktop:left-0 desktop:top-10 text-xxx_8 smartphone:text-xxx_9 laptop:text-xxx_10 desktop:text-xxx_12 desktop2:text-xxx_13 absolute font-light hover:text-gray-800 ">
          01
        </h1>
        <p
          className="text-xxm tablet:text-xxo laptop:text-xxo desktop:text-xxo desktop2:text-xxo desktop3:text-xxo mt-4 absolute laptop:right-5 smartphone:bottom-auto smartphone:text-center top-5 smartphone:top-six tablet:top-20 tablet:w-full desktop:w-1/4 desktop:bottom-30 desktop:text-left desktop:top-auto tracking-tight leading-tight hover:text-gray-800 w-full text-center "
          style={{ fontFamily: "Roboto Flex", fontWeight: 400 }}
        >
          Совмещаю ваши идеи и свои возможности
        </p>
      </div>
      <div
        className={clsx(
          "absolute laptop:bottom-0 top-30 laptop:top-hundred_half desktop:top-auto desktop:left-20 left-0 smartphone:p-4 p-0 text-center desktop:text-left hover:text-yellow-700 smartphone:text-xl text-xxm2 desktop:w-half_past w-full transition-transform duration-1000 ease-out ",
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
          "absolute desktop:top-1/3 desktop:right-20 smartphone:right-auto smartphone:top-0 p-4 center transition-transform duration-1000 ease-out",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <div className="hidden smartphone:flex laptop:flex-row desktop:flex-col desktop:items-start items-baseline space-y-4 space-x-1">
          {Object.keys(links).map((link) => (
            <Link
              key={link}
              href={links[link]}
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
          "absolute desktop:bottom-0 top-10 desktop:top-auto desktop:right-20 right-0 p-4 center transition-transform duration-1000 ease-out desktop:w-auto w-full ",

          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <div className="flex items-center align-middle justify-center desktop:gap-10 gap-7/10">
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
              {Object.keys(links).map((link) => (
                <Link key={link} href={links[link]}>
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
