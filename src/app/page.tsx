"use client";
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';

import CopyCommandButton from './components/CopyCommandButton';

export default function Home() {
	return (
		<main className="flex flex-col items-center w-full">
			<div className="flex flex-col mt-16 sm:pt-8 md:pt-12 lg:pt-14 xl:pt-12 2xl:pt w-10/12 max-w-screen-lg">
				<h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl  lg:text-[4rem] xl:text-[4rem]">
					The easiest way to create a React Native app with Expo
				</h1>
				<CopyCommandButton />
			</div>
			<Image 
				className='rounded-md'
				src="/demo.gif" 
				alt="create-expo-stack demo" 
				width={750}
				height={750}
			/>
			<section className="py-24 sm:py-32">
				<h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl  lg:text-[4rem] xl:text-[4rem] pb-16">
					What people are saying
				</h1>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
						<figure className="flex flex-auto flex-col justify-between">
							<blockquote className="text-lg leading-8 text-white">
								<p>
								{"Thanks for building create-expo-stack! It's helped our team to quickly spin up apps and test various modules prior to adding them to our production application."}
								</p>
							</blockquote>
							<figcaption className="mt-10 flex items-center gap-x-6">
								<Image
									className="h-14 w-14 rounded-full bg-gray-50"
									src="/yefim.jpeg"
									alt="yefim"
								/>
								<div className="text-base">
									<div className="font-semibold text-white">Yefim Vedernikoff</div>
									<div className="mt-1 text-gray-500">Software Engineer at Partiful</div>
								</div>
							</figcaption>
						</figure>
					</div>
					<div className="flex flex-col border-t border-white pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
						<figure className="flex flex-auto flex-col justify-between">
						<blockquote className="text-lg leading-8 text-white">
							<p>
							{"This is great! I've been using this for a ton of proof of concept applications. This serves my needs better than using create-expo-app."}
							</p>
						</blockquote>
						<figcaption className="mt-10 flex items-center gap-x-6">
							<Image
								className="h-14 w-14 rounded-full bg-gray-50"
								src="/ansh.jpeg"
								alt="ansh"
							/>
							<div className="text-base">
								<div className="font-semibold text-white">Ansh Nanda</div>
								<div className="mt-1 text-gray-500">Software Engineer at Bluesky</div>
							</div>
						</figcaption>
						</figure>
					</div>
					</div>
				</div>
			</section>
			<Analytics />
		</main>
	);
}
