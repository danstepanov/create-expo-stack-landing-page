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
      <div className="z-[1] flex flex-col gap-24 pb-12 pt-24 sm:pt-5 md:pt-6 2xl:pt-10 w-10/12 max-w-screen-lg">
        <GithubStarButton />
        <h1 className="text-center text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-[4rem] xl:text-[4rem] bg-clip-text bg-white">
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
          <div className="relative overflow-hidden shadow-[inset_0_0_3rem_#3178C644] border-[#3178C6]/90 bg-[#3178C6]/20 backdrop-blur-sm border text-blue-200 p-4 pr-16 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 opacity-40"
              alt="typescript"
              src="/ts.svg"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2 shadow-xl"
              alt="typescript"
              src="/ts.svg"
              width={56}
              height={56}
            />
            <div className="bg-[#3178C6] font-bold text-black rounded-full px-2">
              v4.2.0
            </div>
            <h1 className="text-3xl mt-2">TypeScript</h1>
            <span className="font-thin">TypeScript wow</span>
          </div>
          <div className="overflow-hidden shadow-[inset_0_0_3rem_#fff4] border-white/40 bg-white/10 backdrop-blur-sm border text-white p-4 pr-16 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 opacity-40"
              src="/expo.svg"
              alt="expo"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2 shadow-xl"
              src="/expo.svg"
              alt="expo"
              width={56}
              height={56}
            />
            <div className="bg-white font-bold text-black rounded-full px-2">
              v6.9.0
            </div>
            <h1 className="text-3xl mt-2">Expo Router</h1>
            <span className="font-thin">Expo Router</span>
          </div>
          <div className="relative overflow-hidden shadow-[inset_0_0_3rem_#06B6D444] border-[#06B6D4]/80 bg-[#06B6D4]/20 backdrop-blur-sm border text-cyan-200 p-4 pr-16 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 opacity-40"
              src="/nativewind.svg"
              alt="nativewind"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2"
              src="/nativewind.svg"
              alt="nativewind"
              width={56}
              height={56}
            />
            <div className="bg-[#06B6D4] font-bold text-black rounded-full px-2">
              v6.9.0
            </div>
            <h1 className="text-3xl mt-2">NativeWind</h1>
            <span className="font-thin">NativeWind uwu</span>
          </div>
          <div className="relative overflow-hidden shadow-[inset_0_0_3rem_#7b61c144] border-[#7b61c1]/90 bg-[#7b61c1]/20 backdrop-blur-sm border text-purple-200 p-4 pr-16 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 opacity-40"
              src="/react-navigation.svg"
              alt="react navigation"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2"
              src="/react-navigation.svg"
              alt="react navigation"
              width={56}
              height={56}
            />
            <div className="bg-[#7b61c1] font-bold text-black rounded-full px-2">
              v1.0.0
            </div>
            <h1 className="text-3xl mt-2">React Navigation</h1>
            <span className="font-thin">sanotehu sano tun</span>
          </div>
          <div className="overflow-hidden shadow-[inset_0_0_3rem_#3FCF8E44] border-[#3FCF8E]/40 bg-[#3FCF8E]/10 backdrop-blur-sm border text-[#7FFFBE]/80 p-4 pr-16 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 opacity-40"
              src="/supabase.svg"
              alt="supabase"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2"
              src="/supabase.svg"
              alt="supabase"
              width={56}
              height={56}
            />
            <div className="bg-[#3FCF8E]/80 font-bold text-black rounded-full px-2">
              v6.9.0
            </div>
            <h1 className="text-3xl mt-2">Supabase</h1>
            <span className="font-thin">Coming Soon</span>
          </div>
          <div className="overflow-hidden shadow-[inset_0_0_3rem_#FFCA2844] border-[#FFCA28]/40 bg-[#FFCA28]/10 backdrop-blur-sm border text-yellow-200/80 p-4 pr-16 flex-grow rounded-3xl flex flex-col items-start">
            <Image
              className="absolute -right-3 -top-3 opacity-40"
              src="/firebase.svg"
              alt="firebase"
              width={96}
              height={96}
            />
            <Image
              className="absolute right-2 top-2"
              src="/firebase.svg"
              alt="firebase"
              width={56}
              height={56}
            />
            <div className="bg-[#FFCA28]/90 font-bold text-black rounded-full px-2">
              v6.9.0
            </div>
            <h1 className="text-3xl mt-2">Firebase</h1>
            <span className="font-thin">Coming Soon</span>
          </div>
        </div>
      </section>
      <section className="z-[1] py-24 sm:py-32">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl  lg:text-[4rem] xl:text-[4rem] pb-16">
          What people are saying
        </h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <figure className="flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
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
            <div className="flex flex-col border-t border-white pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <figure className="flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
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
