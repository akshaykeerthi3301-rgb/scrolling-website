import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Akshay Keerthi — Private Banker & Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #060d1f 0%, #0d1f3c 60%, #091530 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,107,53,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: 'flex',
            fontSize: '16px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#ff6b35',
            fontWeight: 600,
            marginBottom: '24px',
          }}
        >
          PRIVATE BANKER · BUILDER · CREATOR
        </div>

        {/* Name */}
        <div
          style={{
            display: 'flex',
            fontSize: '88px',
            fontWeight: 900,
            color: '#f0f0f0',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '20px',
          }}
        >
          Akshay Keerthi
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: '28px',
            color: 'rgba(240,240,240,0.5)',
            letterSpacing: '-0.01em',
            marginBottom: '48px',
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          IIM Sambalpur MBA · Private Banking at ICICI · Full-Stack Developer
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            width: '60px',
            height: '2px',
            background: '#ff6b35',
            marginBottom: '28px',
            borderRadius: '999px',
          }}
        />

        {/* URL */}
        <div
          style={{
            display: 'flex',
            fontSize: '20px',
            color: 'rgba(240,240,240,0.3)',
            letterSpacing: '0.1em',
          }}
        >
          akshaykeerthi.vercel.app
        </div>

        {/* Corner badge */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '52px',
            fontSize: '28px',
            fontWeight: 800,
            color: '#f0f0f0',
            letterSpacing: '-0.02em',
          }}
        >
          AK<span style={{ color: '#ff6b35' }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
