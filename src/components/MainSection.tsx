"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function MainSection() {
  const personRef = useRef(null);
  const firstRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (personRef.current && firstRef.current && textRef.current) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const xOffset = (clientX - innerWidth / 2) * 0.02;
        const yOffset = (clientY - innerHeight / 2) * 0.02;
        firstRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        textRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        personRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/img/bg.png" // Update this to your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10 text-center w-60 h-full">
        <div
          className="relative w-[1100px] h-[1100px] mx-auto "
          ref={personRef}
        >
          <Image
            src="/img/image.svg" // Update this to your image path
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
      <div className="absolute bottom-0 left-0 p-4 text-l w-half_past ">
        Все работы представленные на этом сайте защищены авторским правом
      </div>
      <div className="absolute top-50 left-20 center border h-7/10 border-black "></div>
      <div className="absolute top-50 right-20 p-4 center">
        <div className="flex flex-col items-center space-y-4">
          <Link href="#" className="text-2xl">
            <Image src="/img/vk.svg" alt="vk" width={50} height={50} />
          </Link>
          <Link href="#" className="text-2xl">
            <Image src="/img/inst.svg" alt="inst" width={55} height={55} />
          </Link>
          <Link href="#" className="text-2xl">
            <Image src="/img/tg.svg" alt="tg" width={55} height={55} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 right-20 p-4 center">
        <div className="flex items-center  align-middle justify-center gap-10">
          <Link href="#" className="text-2xl">
            <Image src="/img/back.svg" alt="back" width={50} height={50} />
          </Link>
          <Link href="#" className="text-2xl">
            <Image src="/img/next.svg" alt="next" width={50} height={50} />
          </Link>
        </div>
      </div>
    </main>
  );
}
