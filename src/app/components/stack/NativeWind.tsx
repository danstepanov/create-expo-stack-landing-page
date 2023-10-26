import Image from "next/image";

export default function NativeWind() {
  return (
    <a
      target="_blank"
      href="https://www.nativewind.dev/"
      className="group relative overflow-hidden shadow-[inset_0_0_3rem_#06B6D444] hover:shadow-[inset_0_0_8rem_#06B6D444,0_0_2rem_#06B6D444] border-[#06B6D4]/80 hover:border-[#06B6D4] bg-[#06B6D4]/20 backdrop-blur-sm border text-cyan-200 p-4 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start duration-500"
    >
      <Image
        className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:-rotate-[15deg] duration-[600ms]"
        src="/stack/nativewind.svg"
        alt="nativewind"
        width={96}
        height={96}
      />
      <Image
        className="absolute right-2 top-2 opacity-40 sm:opacity-100 -z-[1] group-hover:-rotate-[30deg] group-hover:scale-105 duration-500"
        src="/stack/nativewind.svg"
        alt="nativewind"
        width={56}
        height={56}
      />
      <div className="bg-[#06B6D4] group-hover:bg-[#26D6F4] duration-500 font-bold text-black rounded-full px-2 text-sm">
        v2
      </div>
      <h1 className="text-2xl mt-2">NativeWind</h1>
      <span className="font-thin max-w-[24ch]">Tailwind for React Native</span>
    </a>
  );
}
