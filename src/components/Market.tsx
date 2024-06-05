"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx"; // Used for conditional class additions

export default function Market() {
  const [hoveringLink, setHoveringLink] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseEnter = (link: string) => () => setHoveringLink(link);
  const handleMouseLeave = () => setHoveringLink(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
          "relative z-10 text-center w-full tablet:w-60 h-full transition-transform duration-1000 ease-out",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <h1 className="left-0 tablet:left-minus_eight top-0  tablet:top-0 laptop:top-0 text-[4em] smartphone:text-xxolg laptop:text-xxolg desktop:text-xxolg desktop2:text-xxx_8 absolute font-light hover:text-gray-800">
          03
        </h1>
        <h2 className=" right-0 tablet:right-minus_eight top-5 tablet:top-10 desktop:top-20 text-[2.5em] smartphone:text-[3em] laptop:text-xxolg desktop:text-xxolg desktop2:text-xxolg absolute font-light hover:text-gray-800">
          Магазин
        </h2>
        <div className="flex justify-center items-center min-h-screen ">
          <div
            className={clsx(
              "relative top-1/4 w-full laptop:w-2/3 flex justify-center flex-col bg-white border rounded-lg p-6 transition-transform duration-1000 ease-out",
              {
                "translate-y-full opacity-0": !isLoaded,
                "translate-y-0 opacity-100": isLoaded,
              }
            )}
          >
            <h2 className="text-[1.5em] tablet:text-[1.5em] laptop:text-[1.7em] desktop:text-[2em] desktop2:text-[2.3em] desktop3:text-[2.5em] font-semibold mb-4">
              Прайс-лист
            </h2>
            <ul className="mb-4 flex flex-col text-left gap-4">
              <li className="text-[1em] tablet:text-[1.1em] laptop:text-[1.3em] desktop:text-[1.5em] desktop2:text-[1.7em] desktop3:text-[2em]">
                Одностраничный сайт: <b>15.000 руб.</b>
              </li>
              <li className="text-[1em] tablet:text-[1.1em] laptop:text-[1.3em] desktop:text-[1.5em] desktop2:text-[1.7em] desktop3:text-[2em]">
                Многостраничный сайт: <b>35.000 руб.</b> (8 страниц) за каждую
                следующую +3.000 руб.
              </li>
              <li className="text-[1em] tablet:text-[1.1em] laptop:text-[1.3em] desktop:text-[1.5em] desktop2:text-[1.7em] desktop3:text-[2em]">
                Админ-панель: <b>10.000 руб.</b>
              </li>
              <li className="text-[1em] tablet:text-[1.1em] laptop:text-[1.3em] desktop:text-[1.5em] desktop2:text-[1.7em] desktop3:text-[2em]">
                Личный проект: от <b>45.000 руб.</b>
              </li>
              <li className="text-[1em] tablet:text-[1.1em] laptop:text-[1.3em] desktop:text-[1.5em] desktop2:text-[1.7em] desktop3:text-[2em]">
                Телеграмм бот: от <b>10.000 руб.</b>
              </li>
            </ul>
            <Link
              href="/request"
              className="block bg-yellow-500 text-black py-2 px-4 rounded mb-2 text-center hover:bg-yellow-600"
            >
              Перейти к заявке
            </Link>
            <button className="block bg-white text-black py-2 px-4 rounded text-center hover:bg-gray-100">
              Редактировать
            </button>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "absolute bottom-0 desktop:left-20 left-0 smartphone:p-4 p-0 text-center desktop:text-left hover:text-yellow-700 text-[1em] desktop:w-half_past w-full transition-transform duration-1000 ease-out",
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
          "absolute bottom-10 laptop:bottom-0 desktop:right-20 right-0 p-4 center transition-transform duration-1000 ease-out desktop:w-auto w-full",
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
