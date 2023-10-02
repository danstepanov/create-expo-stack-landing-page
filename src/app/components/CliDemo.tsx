// @ts-ignore
import * as AsciinemaPlayer from "asciinema-player";
import "asciinema-player/dist/bundle/asciinema-player.css";
import "../asciinema-theme-mine.css";

import { useEffect, useRef } from "react";

export default function Home() {
  const cliDemoRef = useRef(null);
  useEffect(() => {
    if (cliDemoRef.current) {
      AsciinemaPlayer.create(
        "/243x2mo-ascii.cast",
        cliDemoRef.current,
        // document.getElementById("cli-demo"),
        {
          loop: true,
          autoPlay: true,
          theme: "mine",
          poster: "npt:1:23",
          // fit: "height", // TODO: mobile
          fit: "width",
          controls: false,
        }
      );
    }
    return () => {};
  }, []);
  return (
    <div
      id="cli-demo"
      ref={cliDemoRef}
      className="w-[90%] h-[50vh] border border-white/30 sm:h-auto sm:w-[60%] p-4 sm:p-6 text-white/70 flex flex-col z-[1] rounded-2xl sm:rounded-[2rem] bg-white/10 overflow-wrap backdrop-blur-md overflow-hidden opacity-75"
    ></div>
  );
}
