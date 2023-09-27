"use client";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

import CopyCommandButton from "./components/CopyCommandButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full relative overflow-hidden">
      <svg
        fill="none"
        viewBox="0 0 120 120"
        className="absolute top-0 left-1/2 -translate-x-1/2  portrait:h-screen landscape:w-full aspect-square animate-strokedasharray"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M96 0.00402832H24C10.7452 0.00402832 0 10.7492 0 24.004V96.004C0 109.259 10.7452 120.004 24 120.004H96C109.255 120.004 120 109.259 120 96.004V24.004C120 10.7492 109.255 0.00402832 96 0.00402832Z"
          stroke="white"
          stroke-opacity="0.1386"
          stroke-width="0.125"
        />
        <path
          d="M38.0425 82.6074C25.5685 70.48 25.288 50.5376 37.4151 38.0647C49.5425 25.5907 69.4849 25.3102 81.9578 37.4373C94.4318 49.5647 94.7123 69.5071 82.5852 81.9801C70.6202 94.2876 51.0037 94.7493 38.4726 83.0184"
          stroke="white"
          stroke-opacity="0.1386"
          stroke-width="0.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.4005 97.6867C2.61083 77.4745 2.14321 44.2376 22.3549 23.4496C42.567 2.65987 75.804 2.1923 96.592 22.404C117.382 42.6161 117.849 75.8531 97.6376 96.6411C77.6961 117.154 45.0023 117.923 24.1174 98.3716"
          stroke="white"
          stroke-opacity="0.1386"
          stroke-width="0.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.6614 75.8002C35.9494 67.3302 35.7534 53.4022 44.2232 44.6909C52.6932 35.9789 66.6213 35.7829 75.3326 44.2527C84.0446 52.7227 84.2405 66.6508 75.7708 75.3621C67.4142 83.9579 53.7137 84.2803 44.9618 76.0873"
          stroke="white"
          stroke-opacity="0.1386"
          stroke-width="0.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.494019 38.004H119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M0.494019 82.004H119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M59.9969 0.494019V119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M81.9969 0.494019V119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M37.9969 0.494019V119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M0.494019 60.004H119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M0.494019 112.454H119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M0.494019 7.50403H119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M112.497 0.494019V119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M7.5 0.494019V119.504"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M0.5 119.454L119.5 0.504028"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
        <path
          d="M119.497 119.454L0.496948 0.504028"
          stroke="white"
          stroke-opacity="0.1292"
          stroke-width="0.125"
        />
      </svg>
      <div className="z-[1] flex flex-col gap-24 pb-12 pt-24 sm:pt-5 md:pt-6 2xl:pt-10 w-10/12 max-w-screen-lg">
        <button className="text-sm md:text-base group border border-orange-400 bg-orange-900/50 rounded-full p-1 px-2 mx-auto flex gap-2 items-center text-orange-50 font-thin duration-300 hover:bg-orange-700/50 hover:border-orange-300 shadow-[0_0_0.5rem_0] shadow-orange-500 hover:shadow-[0_0_1.5rem_0] hover:shadow-orange-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="duration-300 group-hover:rotate-180 lucide lucide-sparkles"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
          <span className="hidden sm:block">Give us a star on Github</span>
          <span className="sm:hidden">Star us on Github</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="duration-300 group-hover:translate-x-0.5 lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
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
      <Image
        className="z-[1] rounded-[2.5rem] border-4 border-white/30"
        src="/demo.gif"
        alt="create-expo-stack demo"
        width={750}
        height={750}
      />
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
