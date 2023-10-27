import Image from "next/image";

export default function Tamagui() {
  return (
    <a
      target="_blank"
      href="https://tamagui.dev/"
      className="group relative overflow-hidden shadow-[inset_0_0_3rem_#fff4] hover:shadow-[inset_0_0_3rem_#fff4,0_0_2rem_#fff4] border-white/40 hover:border-white/70 bg-gradient-to-br from-yellow-400/10 via-cyan-400/10 to-pink-400/10 backdrop-blur-sm text-white p-4 sm:pr-20 flex-grow rounded-3xl hover:saturate-150 hover:brightness-110 flex flex-col items-start duration-500 border"
    >
      {/* <Image
        className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:-rotate-[15deg] duration-[600ms]"
        src="/stack/tamagui.svg"
        alt="tamagui"
        width={96}
        height={96}
      /> */}
      <Image
        className="absolute right-2 top-2 opacity-40 sm:opacity-100 group-hover:scale-y-110 -z-[1] group-hover:-scale-x-110 duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"
        src="/stack/tamagui.svg"
        alt="tamagui"
        width={56}
        height={56}
      />
      <div className="bg-gradient-to-br from-orange-300/90 via-cyan-300/90 to-pink-300/90 duration-500 font-bold text-black rounded-full px-2 text-sm">
        v1
      </div>
      <h1 className="text-2xl lg:text-3xl mt-2">Tamagui</h1>
      <span className="font-thin max-w-[24ch]">
        Universal UI for React Native
      </span>
    </a>
  );
}
