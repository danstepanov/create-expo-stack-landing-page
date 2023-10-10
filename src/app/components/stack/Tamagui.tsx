import Image from "next/image";

export default function Tamagui() {
  return (
    // make the component take up the full width of the container on mobile
    // and then take up 1/3 of the container on desktop
    // https://tailwindcss.com/docs/responsive-design#using-combinators
    <a
      target="_blank"
      href="https://tamagui.dev/"
      className="group overflow-hidden shadow-[inset_0_0_3rem_#FFCA2844] border-[#FFCA28]/70 bg-[#FFCA28]/10 backdrop-blur-sm border text-[#FFEA48]/80 p-4 pr-0 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start duration-500 border-dashed hover:rounded-xl w-full sm:w-auto"
    >
      <Image
        className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:-rotate-[15deg] duration-[600ms]"
        src="/stack/tamagui.svg"
        alt="tamagui"
        width={96}
        height={96}
      />
      <Image
        className="absolute right-2 top-2 opacity-40 sm:opacity-100 -z-[1] group-hover:-rotate-[30deg] group-hover:scale-105 duration-500"
        src="/stack/tamagui.svg"
        alt="tamagui"
        width={56}
        height={56}
      />
      <div className="bg-[#FFCA28]/90 duration-500 font-bold text-black rounded-full px-2 text-sm">
        v1
      </div>
      <h1 className="text-2xl lg:text-3xl mt-2">Tamagui</h1>
      <span className="font-thin max-w-[24ch]">Coming Soon</span>
    </a>
  );
}
