"use client";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Nav = () => {
	return (
		<div className="navbar bg-transparent text-white flex justify-end w-full">
			<Link href="https://github.com/danstepanov/create-expo-stack">
				<AiFillGithub className="h-10 w-10" />
			</Link>
		</div>
	);
};

export default Nav;
