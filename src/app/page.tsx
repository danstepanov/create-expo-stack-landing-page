"use client";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

import CopyCommandButton from "./components/CopyCommandButton";
import GithubStarButton from "./components/GithubStarButton";
import BackgroundSVG from "./components/BackgroundSVG";
import CliDemo from "./components/CliDemo";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full relative overflow-hidden">
      <BackgroundSVG />
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
      <section className="pt-8 w-[90%] sm:w-[60%]">
        <div className="flex flex-wrap gap-4">
          <div className="relative group overflow-hidden shadow-[inset_0_0_3rem_#3178C644] border-[#3178C6]/90 bg-[#3178C6]/20 backdrop-blur-sm border text-blue-200 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:-rotate-6 duration-300"
              alt="typescript"
              src="/ts.svg"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2 shadow-xl opacity-40 sm:opacity-100 -z-[1] group-hover:-rotate-12 group-hover:scale-105 duration-300"
              alt="typescript"
              src="/ts.svg"
              width={56}
              height={56}
            />
            <div className="bg-[#3178C6] font-bold text-black rounded-full px-2 text-sm">
              v4.2.0
            </div>
            <h1 className="text-2xl sm:text-3xl mt-2">TypeScript</h1>
            <span className="font-thin">TypeScript wow</span>
          </div>
          <div className="overflow-hidden shadow-[inset_0_0_3rem_#fff4] border-white/40 bg-white/10 backdrop-blur-sm border text-white p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1]"
              src="/expo.svg"
              alt="expo"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2 shadow-xl opacity-40 sm:opacity-100 -z-[1]"
              src="/expo.svg"
              alt="expo"
              width={56}
              height={56}
            />
            <div className="bg-white font-bold text-black rounded-full px-2 text-sm">
              v6.9.0
            </div>
            <h1 className="text-2xl sm:text-3xl mt-2">Expo Router</h1>
            <span className="font-thin">Expo Router</span>
          </div>
          <div className="relative overflow-hidden shadow-[inset_0_0_3rem_#06B6D444] border-[#06B6D4]/80 bg-[#06B6D4]/20 backdrop-blur-sm border text-cyan-200 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1]"
              src="/nativewind.svg"
              alt="nativewind"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2 opacity-40 sm:opacity-100 -z-[1]"
              src="/nativewind.svg"
              alt="nativewind"
              width={56}
              height={56}
            />
            <div className="bg-[#06B6D4] font-bold text-black rounded-full px-2 text-sm">
              v6.9.0
            </div>
            <h1 className="text-2xl sm:text-3xl mt-2">NativeWind</h1>
            <span className="font-thin">NativeWind uwu</span>
          </div>
          <div className="relative overflow-hidden shadow-[inset_0_0_3rem_#7b61c144] border-[#7b61c1]/90 bg-[#7b61c1]/20 backdrop-blur-sm border text-purple-200 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1]"
              src="/react-navigation.svg"
              alt="react navigation"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2 opacity-40 sm:opacity-100 -z-[1]"
              src="/react-navigation.svg"
              alt="react navigation"
              width={56}
              height={56}
            />
            <div className="bg-[#7b61c1] font-bold text-black rounded-full px-2 text-sm">
              v1.0.0
            </div>
            <h1 className="text-2xl sm:text-3xl mt-2">
              React <br className="sm:hidden" /> Navigation
            </h1>
            <span className="font-thin">sanotehu sano tun</span>
          </div>
          <div className="overflow-hidden border-dashed hover:rounded-xl duration-300 shadow-[inset_0_0_3rem_#3FCF8E44] border-[#3FCF8E]/70 bg-[#3FCF8E]/10 backdrop-blur-sm border text-[#7FFFBE]/80 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1]"
              src="/supabase.svg"
              alt="supabase"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2 opacity-40 sm:opacity-100 -z-[1]"
              src="/supabase.svg"
              alt="supabase"
              width={56}
              height={56}
            />
            <div className="bg-[#3FCF8E]/80 font-bold text-black rounded-full px-2 text-sm">
              v6.9.0
            </div>
            <h1 className="text-2xl sm:text-3xl mt-2">Supabase</h1>
            <span className="font-thin">Coming Soon</span>
          </div>
          <div className="overflow-hidden shadow-[inset_0_0_3rem_#FFCA2844] border-[#FFCA28]/40 bg-[#FFCA28]/10 backdrop-blur-sm border text-yellow-200/80 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1]"
              src="/firebase.svg"
              alt="firebase"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2 opacity-40 sm:opacity-100 -z-[1]"
              src="/firebase.svg"
              alt="firebase"
              width={56}
              height={56}
            />
            <div className="bg-[#FFCA28]/90 font-bold text-black rounded-full px-2 text-sm">
              v6.9.0
            </div>
            <h1 className="text-2xl sm:text-3xl mt-2">Firebase</h1>
            <span className="font-thin">Coming Soon</span>
          </div>
        </div>
      </section>
      <section className="z-[1] py-24 sm:py-28 w-[90%] sm:w-auto">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl  lg:text-[4rem] xl:text-[4rem] pb-16">
          What people are saying
        </h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <figure className="flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="128"
                    height="128"
                    className="absolute -top-14 -left-8 opacity-20 -z-[1]"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      fill-opacity="0.01"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.8533 9.11597C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95555 20.2848 9.30112C19.8445 8.72886 19.4227 8.75027 18.8533 9.11597Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.6789 9.11597C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95555 40.1105 9.30112C39.6702 8.72886 39.2484 8.75027 38.6789 9.11597Z"
                      fill="white"
                    />
                  </svg>
                  <p>
                    {
                      "Thanks for building create-expo-stack! It's helped our team to quickly spin up apps and test various modules prior to adding them to our production application."
                    }
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                    className="h-14 w-14 rounded-3xl bg-gray-50"
                    src="/yefim.jpeg"
                    alt="yefim"
                    width={56}
                    height={56}
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">
                      Yefim Vedernikoff
                    </div>
                    <div className="mt-1 text-gray-500">
                      Software Engineer at Partiful
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col lg:-ml-[0.5px] border-white/50 pt-10 sm:pt-16 lg:border-l lg:pl-8 lg:pt-0 xl:pl-20">
              <figure className="flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="128"
                    height="128"
                    className="absolute -top-14 -left-8 opacity-20 -z-[1]"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      fill-opacity="0.01"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.8533 9.11597C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95555 20.2848 9.30112C19.8445 8.72886 19.4227 8.75027 18.8533 9.11597Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.6789 9.11597C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95555 40.1105 9.30112C39.6702 8.72886 39.2484 8.75027 38.6789 9.11597Z"
                      fill="white"
                    />
                  </svg>
                  <p>
                    {
                      "This is great! I've been using this for a ton of proof of concept applications. This serves my needs better than using create-expo-app."
                    }
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                    className="h-14 w-14 rounded-3xl bg-gray-50"
                    src="/ansh.jpeg"
                    alt="ansh"
                    width={56}
                    height={56}
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">Ansh Nanda</div>
                    <div className="mt-1 text-gray-500">
                      Software Engineer at Bluesky
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Analytics />
    </main>
  );
}
