// @ts-ignore
import * as AsciinemaPlayer from "asciinema-player";
import "asciinema-player/dist/bundle/asciinema-player.css";
import "../asciinema-theme-mine.css";

import { useEffect, useRef } from "react";

export default function Home() {
  const cliDemoRef = useRef(null);
  useEffect(() => {
    if (cliDemoRef.current) {
      AsciinemaPlayer.create("/243x2mo-ascii.cast", cliDemoRef.current, {
        loop: true,
        autoPlay: true,
        controls: false,
        // fit: window.innerWidth > 1025 ? "width" : "height",
        fit: window.innerWidth > 1025 ? "width" : "height",
        poster: "npt:1:23", // NOTE: idk what this does
        theme: "mine",
      });
    }
    return () => {};
  }, []);
  return (
    <div
      id="cli-demo"
      ref={cliDemoRef}
      className="w-[90%] lg:w-[69%] 2xl:w-[60%] h-[70vh] lg:h-auto p-4 sm:p-5 lg:p-6 border border-white/30 text-white/70 flex flex-col z-[1] rounded-2xl sm:rounded-3xl xl:rounded-[2rem] bg-white/10 overflow-wrap backdrop-blur-sm overflow-hidden opacity-75"
    ></div>
  );
}
