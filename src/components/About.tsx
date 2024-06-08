"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx"; // Used for conditional class additions
import js from "../../public/js.svg";
import ts from "../../public/ts.svg";
import sql from "../../public/sql.svg";
import docker from "../../public/docker.svg";
import react from "../../public/react.svg";
import next from "../../public/next.svg";

const images = [js, ts, docker, sql, react, next]; // замените на пути к вашим изображениям
const animationDelaysDesktop = ["0s", "5s", "10s", "15s", "20s", "25s"];
const animationDelaysMobile = ["0s", "3.3s", "6.6s", "9.9s", "13.2s", "16.6s"]; // Начальные позиции для каждого элемента
const techDetails = [
  {
    name: "JavaScript",
    description:
      "JavaScript — это язык программирования, используемый для веб-разработки.",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript — это надмножество JavaScript, которое добавляет статическую типизацию.",
  },
  {
    name: "Docker",
    description:
      "Docker — это платформа для разработки, доставки и запуска приложений в контейнерах.",
  },
  {
    name: "SQL",
    description:
      "SQL — это стандартный язык для доступа и управления базами данных.",
  },
  {
    name: "React",
    description:
      "React — это библиотека JavaScript для создания пользовательских интерфейсов.",
  },
  {
    name: "Next.js",
    description:
      "Next.js — это фреймворк для React, предназначенный для серверного рендеринга и статической генерации сайтов.",
  },
];
const linksArrow: { [key: string]: string } = {
  back: "/market",
  next: "/",
};
export default function Market() {
  const [hoveringLink, setHoveringLink] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalContent, setModalContent] = useState<{
    name: string;
    description: string;
  } | null>(null);
  const [animationClass, setAnimationClass] = useState(
    "circle-animation-desktop"
  );
  const [animationDelays, setAnimationDelays] = useState(
    animationDelaysDesktop
  );

  const handleMouseEnter = (link: string) => () => setHoveringLink(link);
  const handleMouseLeave = () => setHoveringLink(null);

  const handleImageClick = (index: number) => {
    setModalContent(techDetails[index]);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    setIsLoaded(true);
    const updateAnimationClass = () => {
      if (window.innerWidth >= 1024) {
        setAnimationClass("circle-animation-desktop");
        setAnimationDelays(animationDelaysDesktop);
      } else {
        setAnimationClass("circle-animation-mobile");
        setAnimationDelays(animationDelaysMobile);
      }
    };

    updateAnimationClass();
    window.addEventListener("resize", updateAnimationClass);

    return () => {
      window.removeEventListener("resize", updateAnimationClass);
    };
  }, []);

  return (
    <main className="relative flex justify-center">
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{modalContent.name}</h2>
            <p>{modalContent.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
      <div className="absolute top-0 desktop2:top-5 right-0 desktop2:right-[10em] left-auto desktop3:w-[300px] desktop3:h-[300px] desktop2:w-[300px] desktop2:h-[300px] desktop:w-[300px] desktop:h-[300px] laptop:w-[300px] laptop:h-[300px] tablet:w-[300px] tablet:h-[300px] w-[300px] h-[300px]">
        <Image
          src="/img/bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className={clsx(
          "relative z-10 text-center w-full tablet:w-60 laptop:min-h-screen transition-transform duration-1000 ease-out",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <h1 className="left-0 tablet:left-minus_eight top-0 smartphone:top-20 text-[3em] smartphone:text-xxolg laptop:text-xxolg desktop:text-xxolg desktop2:text-xxx_8 absolute font-light hover:text-gray-800">
          04
        </h1>
        <h2 className=" right-0 tablet:right-minus_eight top-0 smartphone:top-20 text-[2.5em] smartphone:text-[3em] laptop:text-xxolg desktop:text-xxolg desktop2:text-xxolg absolute font-light hover:text-gray-800">
          Обо мне
        </h2>
        <div className="w-full flex justify-center align-top">
          <div
            className={clsx(
              "mt-1/4 tablet:mt-1/4 w-full desktop2:w-2/3 mx-auto flex justify-center flex-col bg-white border rounded-lg p-6 transition-transform duration-1000 ease-out",
              {
                "translate-y-full opacity-0": !isLoaded,
                "translate-y-0 opacity-100": isLoaded,
              }
            )}
          >
            <h3 className="text-[.9em] smartphone:text-[1em] tablet:[text:1.3em] laptop:text-[1.5em] desktop:[1.6em] font-semibold mb-4 text-center">
              Добро пожаловать на мой сайт! Меня зовут Юрий, и я веб-программист
            </h3>
            <div className="relative flex items-center justify-center w-full laptop:w-[400px] h-[200px] laptop:h-[400px]">
              <div className="relative flex pt-10 justify-center mr-20 laptop:mr-auto w-full laptop:w-[400px] h-[200px] laptop:h-[400px]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "absolute w-[50px] h-[50px] tablet:w-[75px] tablet:h-[75px] laptop:w-[100px] laptop:h-[100px] transform transition-transform duration-300 hover:scale-110",
                      animationClass
                    )}
                    style={{ animationDelay: animationDelays[index] }}
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      alt={`image-${index}`}
                      className="rounded-[10em] cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/auth"
              className="block bg-yellow-100 text-black py-2 px-4 rounded mb-2 text-center hover:bg-yellow-200"
            >
              Для меня
            </Link>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "absolute bottom-minus_ten desktop:left-20 left-0 smartphone:p-4 p-0 text-center desktop:text-left hover:text-yellow-700 text-[.9em] smartphone:text-xl tablet:text-xxm desktop:w-half_past w-full transition-transform duration-1000 ease-out ",
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
          "absolute bottom-minus_five desktop:right-20 right-0 p-4 center transition-transform duration-1000 ease-out desktop:w-auto w-full ",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <div className="flex items-center align-middle justify-center desktop:gap-10 gap-7/10">
          <button
            onMouseEnter={handleMouseEnter("back")}
            onMouseLeave={handleMouseLeave}
            className="text-2xl"
          >
            <Image
              src={`/img/back${hoveringLink === "back" ? "Hover" : ""}.svg`}
              alt="back"
              width={50}
              height={50}
            />
          </button>
          <button
            onMouseEnter={handleMouseEnter("next")}
            onMouseLeave={handleMouseLeave}
            className="text-2xl"
          >
            <Image
              src={`/img/next${hoveringLink === "next" ? "Hover" : ""}.svg`}
              alt="next"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </main>
  );
}
