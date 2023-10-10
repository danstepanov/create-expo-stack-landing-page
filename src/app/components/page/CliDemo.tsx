import "asciinema-player/dist/bundle/asciinema-player.css";
import "../../asciinema-theme-mine.css";

import { useEffect, useRef } from "react";

export default function CliDemo() {
  const cliDemoRef = useRef(null);

  useEffect(() => {
    (async function () {
      // @ts-ignore
      const AsciinemaPlayerLibrary = await import("asciinema-player");
      AsciinemaPlayerLibrary.create("demo-mobile.cast", cliDemoRef.current, {
        loop: false,
        theme: "mine",
        autoPlay: true,
        controls: false,
        fit: window.innerWidth > 1025 ? "width" : "height",
      });
    })();
  }, []);

  return (
    <div
      id="cli-demo"
      ref={cliDemoRef}
      className="w-[90%] lg:w-[69%] 2xl:w-[60%] h-[50vh] lg:h-auto p-4 sm:p-5 lg:p-6 text-white/70 flex flex-col z-[1] rounded-2xl sm:rounded-3xl xl:rounded-[2rem] bg-white/10 overflow-wrap backdrop-blur-sm overflow-hidden opacity-75"
    ></div>
  );
}
