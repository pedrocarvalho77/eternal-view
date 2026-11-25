import { ImageResponse } from 'next/og'

export const alt = 'Pedro Carvalho, software engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 96,
          background: '#030712',
          color: '#f3f4f6',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, color: '#3b82f6' }}>Pedro Carvalho</div>
        <div style={{ fontSize: 44, marginTop: 24 }}>Software engineer</div>
        <div style={{ fontSize: 32, marginTop: 48, color: '#9ca3af' }}>eternal-view.vercel.app</div>
      </div>
    ),
    size
  )
}
