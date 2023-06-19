"use client";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Nav = () => {
	return (
		<div className="navbar bg-transparent text-white flex justify-between w-full">
			<h2 className="text-3xl text-bold">Create Expo Stack</h2>
			<Link href="https://github.com/danstepanov/create-expo-stack">
				<AiFillGithub className="h-10 w-10" />
			</Link>
		</div>
	);
};

export default Nav;
