import { ImageResponse } from '@vercel/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'The easiest way to create a React Native app with Expo'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        The easiest way to create a React Native app with Expo
      </div>
    )
  )
}