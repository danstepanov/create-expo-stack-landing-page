export default function Firebase() {
  return (
    <footer className="w-[90%] lg:w-[69%] 2xl:w-[60%] flex justify-between mx-auto text-white/70 p-4 py-12 sm:p-12 font-thin">
      <div className="flex flex-col gap-2 items-start">
        <span className="bg-white/30 border border-white/50 px-1.5 py-0.5 rounded-full text-xs">
          v0.1.0
        </span>
        <h1 className="text-xl font-bold text-white">create-expo-app</h1>
        The most configurable way to create an Expo app.
        <br />
        <span className="text-sm">
          by @
          <a
            target="_blank"
            href="https://twitter.com/danstepanov"
            className="font-normal text-white underline decoration-wavy underline-offset-4 hover:underline-offset-1 duration-300"
          >
            onlydans
          </a>{" "}
          under the{" "}
          <a
            target="_blank"
            href="https://github.com/danstepanov/create-expo-stack?tab=MIT-1-ov-file#readme"
            className="font-normal text-white underline decoration-wavy underline-offset-4 hover:underline-offset-1 duration-300"
          >
            MIT
          </a>{" "}
          license.
        </span>
      </div>
      <div className="flex flex-col items-end justify-end">
        <h1 className="text-xl font-bold text-white mb-1">Socials.</h1>
        <a
          className="group p-1 hover:underline decoration-wavy underline-offset-1 hover:underline-offset-4 duration-300"
          href="https://twitter.com/danstepanov"
        >
          <div className="group-hover:text-white group-hover:-translate-x-2 duration-300">
            Twitter
          </div>
        </a>
        <a
          className="group p-1 hover:underline decoration-wavy underline-offset-1 hover:underline-offset-4 duration-300"
          href="https://github.com/danstepanov/create-expo-stack"
        >
          <div className="group-hover:text-white group-hover:-translate-x-2 duration-300">
            Github
          </div>
        </a>
      </div>
    </footer>
  );
}
