"use client";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="z-[1] absolute flex p-[0.5%] xl:p-[1%] 2xl:p-[1.5%] text-white justify-end w-full">
      <Link
        className="hover:text-orange-400 hover:scale-110 duration-150"
        href="https://github.com/danstepanov/create-expo-stack"
      >
        <AiFillGithub className="m-2 h-10 w-10" />
      </Link>
    </div>
  );
};

export default Nav;
