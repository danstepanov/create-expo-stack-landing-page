import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div tw={`flex flex-col h-full w-full bg-gradient-to-b from-red-400 via-[#fb9300] to-yellow-500`}>
          <p>Create Expo Stack</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}