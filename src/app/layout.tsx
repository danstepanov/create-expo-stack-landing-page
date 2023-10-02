import { Geologica } from "next/font/google";

import "./globals.css";
import Nav from "./components/Nav";

const geologica = Geologica({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Expo Stack</title>
        <meta
          property="description"
          content="The easiest way to create a React Native app with Expo"
        />
        <meta property="og:title" content="Create Expo Stack"></meta>
        <meta
          property="og:description"
          content="The easiest way to create a React Native app with Expo"
        />
        <meta property="og:url" content="https://expostack.dev"></meta>
        <meta property="og:image" content="https://expostack.dev/api/og" />
        <meta property="og:image:alt" content="Create Expo Stack" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="twitter:image"
          content="https://expostack.dev/api/og"
        ></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content="Create Expo Stack"></meta>
        <meta
          property="twitter:description"
          content="The easiest way to create a React Native app with Expo"
        ></meta>
      </head>
      <body
        className={`flex flex-col bg-gradient-to-b from-black via-[#111] to-black ${geologica.className}`}
      >
        <Nav />
        {children}
        <footer className="w-[90%] lg:w-[69%] 2xl:w-[60%] flex justify-between mx-auto text-white/70 p-4 py-12 sm:p-12 font-thin">
          <div className="flex flex-col gap-2 items-start">
            <span className="bg-white/30 border border-white/50 px-1.5 py-0.5 rounded-full text-xs">
              v0.1.0
            </span>
            <h1 className="text-xl font-bold text-white">create-expo-app</h1>
            The most configurable way to create an Expo app.
            <br />
            <span className="text-sm">
              by @
              <a href="https://twitter.com/danstepanov">
                <span className="font-normal text-white underline decoration-wavy underline-offset-4 hover:underline-offset-1 duration-300">
                  onlydans
                </span>
              </a>{" "}
              under the{" "}
              <a href="https://github.com/danstepanov/create-expo-stack?tab=MIT-1-ov-file#readme">
                <span className="font-normal text-white underline decoration-wavy underline-offset-4 hover:underline-offset-1 duration-300">
                  MIT
                </span>
              </a>{" "}
              license.
            </span>
          </div>
          <div className="flex flex-col items-end gap-2 justify-end">
            <h1 className="text-xl font-bold text-white">Socials.</h1>
            <a
              className="group hover:underline decoration-wavy underline-offset-1 hover:underline-offset-4 duration-300"
              href="https://twitter.com/danstepanov"
            >
              <div className="group-hover:text-white group-hover:-translate-x-2 duration-300">
                Twitter
              </div>
            </a>
            <a
              className="group hover:underline decoration-wavy underline-offset-1 hover:underline-offset-4 duration-300"
              href="https://github.com/danstepanov/create-expo-stack"
            >
              <div className="group-hover:text-white group-hover:-translate-x-2 duration-300">
                Github
              </div>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
