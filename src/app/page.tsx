export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen min-w-screen">
			<div className=" py-12 sm:py-8 md:py-12 lg:py-14 xl:py-12 2xl:py w-4/5 -mt-40">
				<h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl  lg:text-[4rem] xl:text-[4rem] ">
					A TypeSafe CLI for{" "}
					<span className="text-[hsl(200,100%,60%)] whitespace-nowrap ">
						React Native
					</span>{" "}
					with <span className="text-[hsl(240,100%,70%)]">Expo</span> &{" "}
					<span className="text-[hsl(280,100%,60%)]">Nativewind</span>
				</h1>
				<div className="w-full flex justify-center mt-5">
					<div className="mockup-code">
						<pre data-prefix="$">
							<code>npx create-expo-stack@latest</code>
						</pre>
					</div>
				</div>
			</div>
		</main>
	);
}
