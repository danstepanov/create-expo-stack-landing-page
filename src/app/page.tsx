"use client";
import { Analytics } from "@vercel/analytics/react";

import CopyCommandButton from "./components/page/CopyCommandButton";
import BackgroundSVG from "./components/page/BackgroundSVG";
import Testimonials from "./components/page/Testimonials";
import CliDemo from "./components/page/CliDemo";
import Nav from "./components/Nav";

import TypeScript from "./components/stack/TypeScript";
import ExpoRouter from "./components/stack/ExpoRouter";
import NativeWind from "./components/stack/NativeWind";
import ReactNavigation from "./components/stack/ReactNavigation";
import Supabase from "./components/stack/Supabase";
import Firebase from "./components/stack/Firebase";
import Socials from "./components/page/Socials";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full relative overflow-hidden">
      <BackgroundSVG />
      <Nav />
      {/* everything is z-1 to sit on top of <BackgroundSVG /> */}
      {/* aspect-square container to match dimensions of aspect-square BackgroundSVG */}
      <section className="z-[1] flex flex-col items-center w-full relative aspect-square gap-16 pt-14">
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
      <section className="z-[1] py-16 w-[90%] md:w-[70%] sm:w-auto">
        <Testimonials />
      </section>
      <Analytics />
    </main>
  );
}
