"use client";
import Link from "next/link";
import { useState, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import clsx from "clsx"; // Used for conditional class additions
import js from "../../public/js.svg";
const images = [js, js, js, js, js, js]; // замените на пути к вашим изображениям

export default function Market() {
  const [hoveringLink, setHoveringLink] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseEnter = (link: string) => () => setHoveringLink(link);
  const handleMouseLeave = () => setHoveringLink(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative flex justify-center">
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
          "relative z-10 text-center w-full tablet:w-60 min-h-screen transition-transform duration-1000 ease-out",
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
              "mt-1/4 tablet:mt-1/4 w-full desktop2:w-2/3 flex justify-center flex-col bg-white border rounded-lg p-6 transition-transform duration-1000 ease-out",
              {
                "translate-y-full opacity-0": !isLoaded,
                "translate-y-0 opacity-100": isLoaded,
              }
            )}
          >
            <h3 className="text-[.9em] smartphone:text-[1em] tablet:[text:1.3em] laptop:text-[1.5em] desktop:[1.6em] font-semibold mb-4 text-center">
              Добро пожаловать на мой сайт! Меня зовут Юрий, и я веб-программист
            </h3>
            <div className=" flex items-center justify-center w-[400px] h-[400px] circle-animation">
              <div className=" flex items-center justify-center w-[400px] h-[400px] ">
                {images.map((image, index) => (
                  <div key={index} className={`block w-[100px] h-[100px] `}>
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      alt={`image-${index}`}
                      className="rounded-[10em] object-cover "
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
          "absolute bottom-minus_eight desktop:left-20 left-0 smartphone:p-4 p-0 text-center desktop:text-left hover:text-yellow-700 text-[.9em] smartphone:text-xl tablet:text-xxm desktop:w-half_past w-full transition-transform duration-1000 ease-out ",
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
          "absolute bottom-minus_five  desktop:right-20 right-0 p-4 center transition-transform duration-1000 ease-out desktop:w-auto w-full ",
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
