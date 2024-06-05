"use client";
import Link from "next/link";
import { useState, useEffect, useRef, MouseEvent } from "react";
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
    <main className="relative min-h-screen flex justify-center overflow-hidden">
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
        <div className="w-full">
          <div
            className={clsx(
              "mt-1/4 tablet:mt-1/4 w-full desktop2:w-2/3 flex justify-center flex-col bg-white border rounded-lg p-6 transition-transform duration-1000 ease-out",
              {
                "translate-y-full opacity-0": !isLoaded,
                "translate-y-0 opacity-100": isLoaded,
              }
            )}
          >
            <h3 className="text-[.9em] smartphone:text-[1em] tablet:[text:1.3em] laptop:text-[1.5em] desktop:[1.6em] text-left font-semibold mb-4">
              Добро пожаловать на мой сайт! Меня зовут Юрий, и я вижу в
              веб-программировании и дизайне не только профессию, но и
              искусство. Я стремлюсь создавать уникальные и инновационные
              веб-решения, которые не только эстетически приятны, но и
              функциональны. Моя страсть к технологиям и креативному процессу
              позволяет мне воплощать ваши идеи в реальность, обеспечивая при
              этом высокий уровень профессионализма и качества. Я постоянно
              совершенствую свои навыки и следую последним тенденциям в
              веб-разработке и дизайне, чтобы обеспечить моим клиентам только
              лучшие решения. Мой опыт включает в себя работу с различными
              технологиями, такими как HTML, CSS, JavaScript, а также
              фреймворками и библиотеками, такими как React, Vue.js и Laravel.
              Кроме того, я имею глубокое понимание принципов дизайна и опыт
              работы с инструментами для создания уникальных пользовательских
              интерфейсов. Я готов взяться за любой проект, будь то создание
              корпоративного веб-сайта, интернет-магазина или веб-приложения.
              Свяжитесь со мной, и давайте вместе создадим что-то поистине
              впечатляющее!
            </h3>

            <Link
              href="/auth"
              className="block bg-white text-black py-2 px-4 rounded mb-2 text-center hover:bg-gray-100"
            >
              Для меня
            </Link>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "absolute bottom-0 desktop:left-20 left-0 smartphone:p-4 p-0 text-center desktop:text-left hover:text-yellow-700 text-[.9em] smartphone:text-xl tablet:text-xxm desktop:w-half_past w-full transition-transform duration-1000 ease-out ",
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
          "absolute bottom-0 laptop:bottom-0  desktop:right-20 right-0 p-4 center transition-transform duration-1000 ease-out desktop:w-auto w-full ",
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
