"use client";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

import CopyCommandButton from "./components/CopyCommandButton";
import GithubStarButton from "./components/GithubStarButton";
import BackgroundSVG from "./components/BackgroundSVG";
import Testimonials from "./components/Testimonials";
import CliDemo from "./components/CliDemo";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full relative overflow-hidden">
      <BackgroundSVG />
      <div className="flex flex-col items-center w-full relative aspect-square">
        <div className="mb-6 z-[1] flex flex-col gap-24 pb-12 pt-3 sm:pt-5 md:pt-6 2xl:pt-10 w-10/12 max-w-screen-lg">
          <GithubStarButton />
          <h1 className="text-center text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-[4rem] xl:text-[4rem] bg-clip-text bg-gradient-to-t from-zinc-400 to-33% to-white">
            {/* bg-gradient-to-r from-white/50 via-white to-white/50 via-69% */}
            {/* The easiest way to create a React Native app with Expo */}
            The most configurable way to create an{" "}
            {/* <span className="bg-orange-500/50 px-3 -mx-3 rounded-lg"> */}
            <span className="bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-xl">
              Expo
            </span>
            {/* </span> */} app
          </h1>
          <CopyCommandButton />
        </div>
        <CliDemo />
        <section className="pt-4 w-[90%] lg:w-[69%] 2xl:w-[60%]">
          <div className="flex flex-wrap gap-4">
            <a
              target="_blank"
              href="https://www.typescriptlang.org/"
              className="group overflow-hidden shadow-[inset_0_0_3rem_#3178C644] hover:shadow-[inset_0_0_8rem_#3178C644,0_0_2rem_#3178C644] border-[#3178C6]/90 hover:border-[#4188D6] bg-[#3178C6]/20 backdrop-blur-sm border text-blue-200 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start duration-500"
            >
              <Image
                className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:-rotate-[30deg] duration-[600ms]"
                alt="typescript"
                src="/ts.svg"
                width={96}
                height={96}
              />
              <Image
                className="absolute right-2 top-2 shadow-xl opacity-40 sm:opacity-100 -z-[1] group-hover:-rotate-12 group-hover:scale-105 duration-500"
                alt="typescript"
                src="/ts.svg"
                width={56}
                height={56}
              />
              <div className="bg-[#3178C6] duration-500 group-hover:bg-[#5198E6] font-bold text-black rounded-full px-2 text-sm">
                v4.2.0
              </div>
              <h1 className="text-2xl lg:text-3xl mt-2">TypeScript</h1>
              <span className="font-thin max-w-[24ch]">
                TypeScript wow very typesafe
              </span>
            </a>
            <a
              target="_blank"
              href="https://docs.expo.dev/routing/introduction/"
              className="group overflow-hidden shadow-[inset_0_0_3rem_#fff4] hover:shadow-[inset_0_0_8rem_#fff4,0_0_2rem_#fff4] border-white/40 hover:border-white/80 bg-white/10 backdrop-blur-sm border text-white p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start duration-500"
            >
              <Image
                className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:rotate-[33deg] duration-[600ms]"
                src="/expo.svg"
                alt="expo"
                width={96}
                height={96}
              />
              <Image
                className="absolute right-2 top-2 shadow-xl opacity-40 sm:opacity-100 -z-[1] group-hover:rotate-[30deg] group-hover:scale-105 duration-500"
                src="/expo.svg"
                alt="expo"
                width={56}
                height={56}
              />
              <div className="bg-white/80 group-hover:bg-white duration-500 font-bold text-black rounded-full px-2 text-sm">
                v6.9.0
              </div>
              <h1 className="text-2xl lg:text-3xl mt-2">Expo Router</h1>
              <span className="font-thin max-w-[24ch]">Expo Router</span>
            </a>
            <a
              target="_blank"
              href="https://www.nativewind.dev/"
              className="group overflow-hidden shadow-[inset_0_0_3rem_#06B6D444] hover:shadow-[inset_0_0_8rem_#06B6D444,0_0_2rem_#06B6D444] border-[#06B6D4]/80 hover:border-[#06B6D4] bg-[#06B6D4]/20 backdrop-blur-sm border text-cyan-200 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start duration-500"
            >
              <Image
                className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:-rotate-[15deg] duration-[600ms]"
                src="/nativewind.svg"
                alt="nativewind"
                width={96}
                height={96}
              />
              <Image
                className="absolute right-2 top-2 opacity-40 sm:opacity-100 -z-[1] group-hover:-rotate-[30deg] group-hover:scale-105 duration-500"
                src="/nativewind.svg"
                alt="nativewind"
                width={56}
                height={56}
              />
              <div className="bg-[#06B6D4] group-hover:bg-[#26D6F4] duration-500 font-bold text-black rounded-full px-2 text-sm">
                v6.9.0
              </div>
              <h1 className="text-2xl lg:text-3xl mt-2">NativeWind</h1>
              <span className="font-thin max-w-[24ch]">NativeWind uwu</span>
            </a>
            <a
              target="_blank"
              href="https://reactnavigation.org/"
              className="group overflow-hidden shadow-[inset_0_0_3rem_#7b61c144] hover:shadow-[inset_0_0_8rem_#7b61c144,0_0_2rem_#7b61c144] border-[#7b61c1]/90 hover:border-[#7b61c1] bg-[#7b61c1]/20 backdrop-blur-sm border text-purple-200 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start duration-500"
            >
              <Image
                className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:rotate-[30deg] duration-500"
                src="/react-navigation.svg"
                alt="react navigation"
                width={96}
                height={96}
              />
              <Image
                className="absolute right-2 top-2 opacity-40 sm:opacity-100 -z-[1] group-hover:-rotate-[30deg] group-hover:scale-105 duration-500"
                src="/react-navigation.svg"
                alt="react navigation"
                width={56}
                height={56}
              />
              <div className="bg-[#7b61c1] group-hover:bg-[#9b81e1] duration-500 font-bold text-black rounded-full px-2 text-sm">
                v1.0.0
              </div>
              <h1 className="text-2xl lg:text-3xl mt-2">
                React <br className="sm:hidden" /> Navigation
              </h1>
              <span className="font-thin max-w-[24ch]">
                Lorem ipsum dolor sit.
              </span>
            </a>
            <div className="group overflow-hidden cursor-wait border-dashed hover:rounded-xl duration-300 shadow-[inset_0_0_3rem_#3FCF8E44] border-[#3FCF8E]/70 bg-[#3FCF8E]/10 backdrop-blur-sm border text-[#7FFFBE]/80 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start">
              <Image
                className="absolute -right-3 -top-3 opacity-10 -z-[1] group-hover:scale-110 group-hover:-rotate-6 duration-300"
                src="/supabase.svg"
                alt="supabase"
                width={96}
                height={96}
              />
              <Image
                className="absolute right-2 top-2 opacity-40 -z-[1] group-hover:-rotate-12 group-hover:scale-105 duration-300"
                src="/supabase.svg"
                alt="supabase"
                width={56}
                height={56}
              />
              <div className="bg-[#3FCF8E]/80 font-bold text-black rounded-full px-2 text-sm">
                v6.9.0
              </div>
              <h1 className="text-2xl lg:text-3xl mt-2">Supabase</h1>
              <span className="font-thin max-w-[24ch]">Coming Soon</span>
            </div>
            <div className="group overflow-hidden cursor-wait border-dashed hover:rounded-xl duration-300 shadow-[inset_0_0_3rem_#FFCA2844] border-[#FFCA28]/70 bg-[#FFCA28]/10 backdrop-blur-sm border text-[#FFEA48]/80 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start">
              <Image
                className="absolute -right-3 -top-3 opacity-10 -z-[1] group-hover:scale-110 group-hover:-rotate-6 duration-300"
                src="/firebase.svg"
                alt="firebase"
                width={96}
                height={96}
              />
              <Image
                className="absolute right-2 top-2 opacity-40 -z-[1] group-hover:-rotate-12 group-hover:scale-105 duration-300"
                src="/firebase.svg"
                alt="firebase"
                width={56}
                height={56}
              />
              <div className="bg-[#FFCA28]/90 font-bold text-black rounded-full px-2 text-sm">
                v6.9.0
              </div>
              <h1 className="text-2xl lg:text-3xl mt-2">Firebase</h1>
              <span className="font-thin max-w-[24ch]">Coming Soon</span>
            </div>
          </div>
        </section>
      </div>
      <Testimonials />
      <Analytics />
    </main>
  );
}
