import { ImageResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  const fontData = await fetch(
    new URL("../../Inter-ExtraBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
        }}
      >
        <div tw="flex flex-col h-full w-full items-center justify-center">
          <div tw="flex flex-row font-sans text-7xl text-center text-white w-9/12 flex-wrap justify-center">
            <div>The most configurable way to create an</div>
            <div style={{ width: "1rem" }}></div>
            <div
              style={{
                background: "linear-gradient(90deg, #f97316 0%, #eab308 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Expo
            </div>
            <div style={{ width: "1rem" }}></div>
            <div>app</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
        },
      ],
    }
  );
}
