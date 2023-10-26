import Image from "next/image";

export default function TypeScript() {
  return (
    <a
      target="_blank"
      href="https://www.typescriptlang.org/"
      className="group relative overflow-hidden shadow-[inset_0_0_3rem_#3178C644] hover:shadow-[inset_0_0_8rem_#3178C644,0_0_2rem_#3178C644] border-[#3178C6]/90 hover:border-[#4188D6] bg-[#3178C6]/20 backdrop-blur-sm border text-blue-200 p-4 sm:pr-20 flex-grow rounded-3xl flex flex-col items-start duration-500"
    >
      <Image
        className="absolute -right-3 -top-3 sm:opacity-40 opacity-10 -z-[1] group-hover:scale-110 group-hover:-rotate-[30deg] duration-[600ms]"
        alt="typescript"
        src="/stack/typescript.svg"
        width={96}
        height={96}
      />
      <Image
        className="absolute right-2 top-2 shadow-xl opacity-40 sm:opacity-100 -z-[1] group-hover:-rotate-12 group-hover:scale-105 duration-500"
        alt="typescript"
        src="/stack/typescript.svg"
        width={56}
        height={56}
      />
      <div className="bg-[#3178C6] duration-500 group-hover:bg-[#5198E6] font-bold text-black rounded-full px-2 text-sm">
        v5
      </div>
      <h1 className="text-2xl mt-2">TypeScript</h1>
      <span className="font-thin max-w-[24ch]">Javascript, but with types</span>
    </a>
  );
}
