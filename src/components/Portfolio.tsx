"use client";
import Link from "next/link";
import { useState, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import clsx from "clsx"; // Used for conditional class additions

export default function Portfolio() {
  const [hoveringLink, setHoveringLink] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [NextSlide, setNextSlide] = useState(1);
  const [BackSlide, setBackSlide] = useState(2);
  const slides = [
    "/img/work.png", // Replace with your actual image paths
    "/img/work2.jpg", // Duplicate for demonstration
    "/img/work3.jpg", // Duplicate for demonstration
  ];
  const linksArrow: { [key: string]: string } = {
    back: "/",
    next: "/market",
  };
  const handleMouseEnter = (link: string) => () => setHoveringLink(link);
  const handleMouseLeave = () => setHoveringLink(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setNextSlide((prev) => (prev + 1) % slides.length);
    setBackSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setNextSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setBackSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden">
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
          "relative z-10 text-center w-60 h-full transition-transform duration-1000 ease-out",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <div className="relative w-[350px] h-[200px] hidden desktop:block">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={clsx(
                  "absolute inset-0 transition-opacity duration-1000 ease-out",
                  {
                    "opacity-0": index !== BackSlide,
                    "opacity-100": index === BackSlide,
                  }
                )}
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <div className="relative w-[600px] h-[350px] hidden desktop:block">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={clsx(
                  "absolute inset-0 transition-opacity duration-1000 ease-out",
                  {
                    "opacity-0": index !== currentSlide,
                    "opacity-100": index === currentSlide,
                  }
                )}
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <div className="relative w-[350px] h-[200px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={clsx(
                  "absolute inset-0 transition-opacity duration-1000 ease-out",
                  {
                    "opacity-0": index !== NextSlide,
                    "opacity-100": index === NextSlide,
                  }
                )}
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>

        <h1 className="left-minus_three tablet:left-minus_eight top-20 text-xxolg smartphone:text-xxolg laptop:text-xxolg desktop:text-xxolg desktop2:text-xxx_8 absolute font-light hover:text-gray-800">
          02
        </h1>
        <h2 className=" right-minus_five tablet:right-minus_eight top-20 text-xxolg2 smartphone:text-xxolg2 laptop:text-xxolg desktop:text-xxolg desktop2:text-xxolg absolute font-light hover:text-gray-800">
          Портфолио
        </h2>
      </div>
      <div
        className={clsx(
          "absolute  bottom-0   desktop:left-20 left-0 smartphone:p-4 p-0 text-center desktop:text-left hover:text-yellow-700 smartphone:text-xl text-xxm desktop:w-half_past w-full transition-transform duration-1000 ease-out ",
          {
            "translate-y-full opacity-0": !isLoaded,
            "translate-y-0 opacity-100": isLoaded,
          }
        )}
      >
        Все работы представленные на этом сайте защищены авторским правом
      </div>
      <div className="absolute w-full ">
        <div className="flex items-center align-middle justify-center w-full gap-7/10">
          <button onClick={handlePrevSlide} className="text-2xl cursor-pointer">
            <Image src={`/img/Arrow1.svg`} alt="back" width={20} height={20} />
          </button>
          <button onClick={handleNextSlide} className="text-2xl cursor-pointer">
            <Image src={`/img/Arrow2.svg`} alt="next" width={20} height={20} />
          </button>
        </div>
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
          "absolute bottom-20 laptop:bottom-0  desktop:right-20 right-0 p-4 center transition-transform duration-1000 ease-out desktop:w-auto w-full ",
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
