"use client";
import { Analytics } from "@vercel/analytics/react";

import CopyCommandButton from "./components/CopyCommandButton";
import GithubStarButton from "./components/GithubStarButton";
import BackgroundSVG from "./components/BackgroundSVG";
import Testimonials from "./components/Testimonials";
import CliDemo from "./components/CliDemo";
import TypeScript from "./components/TypeScript";
import ExpoRouter from "./components/ExpoRouter";
import NativeWind from "./components/NativeWind";
import ReactNavigation from "./components/ReactNavigation";
import Supabase from "./components/Supabase";
import Firebase from "./components/Firebase";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full relative overflow-hidden">
      <BackgroundSVG />
      {/* aspect-square container to match dimensions of aspect-square BackgroundSVG */}
      <section className="flex flex-col items-center w-full relative z-[1] aspect-square gap-16 pt-3 sm:pt-5 md:pt-6 2xl:pt-10 ">
        <GithubStarButton />
        <h1 className="w-10/12 max-w-screen-lg text-center text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-[4rem] xl:text-[4rem] bg-clip-text bg-gradient-to-t from-zinc-400 to-33% to-white">
          The most configurable way to create an{" "}
          <span className="bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-xl">
            Expo
          </span>{" "}
          app
        </h1>
        <CopyCommandButton />
        <CliDemo />
        <div className="flex flex-wrap gap-4 pt-4 w-[90%] lg:w-[69%] 2xl:w-[60%]">
          <TypeScript />
          <ExpoRouter />
          <NativeWind />
          <ReactNavigation />
          <Supabase />
          <Firebase />
        </div>
      </section>
      <section className="z-[1] py-16 sm:py-16 w-[90%] sm:w-auto">
        <Testimonials />
      </section>
      <Analytics />
    </main>
  );
}
