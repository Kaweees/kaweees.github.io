import { SITE } from '@config';

// Dark Gruvbox card, matching the site's dark theme: charcoal ground with
// scanlines, a sand-bordered card, the neon "> Miguel Villa Floran" title,
// the green ">>" tagline, and a one-line summary.
const GROUND = '#282828';
const CARD = '#3c3836';
const SAND = '#ebdbb2';
const TITLE_2 = '#d8c787';
const GREEN = '#8ec07c';

export default () => {
  const [first, ...rest] = SITE.title.split(' ');
  return (
    // Configure via: https://og-playground.vercel.app/
    <div
      style={{
        background: GROUND,
        backgroundImage: 'linear-gradient(rgba(0,0,0,0) 66%, rgba(0,0,0,0.15) 66%)',
        backgroundSize: '100% 5px',
        backgroundRepeat: 'repeat',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          right: '-1px',
          border: `4px solid ${SAND}`,
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          margin: '2.5rem',
          width: '88%',
          height: '80%',
        }}
      />

      <div
        style={{
          border: `4px solid ${SAND}`,
          background: CARD,
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '2rem',
          width: '88%',
          height: '80%',
          color: SAND,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 74,
            fontWeight: 'bold',
            color: '#ffffff',
            textShadow: `2px 2px 7px ${SAND}`,
            whiteSpace: 'nowrap',
          }}
        >
          <span>&gt; {first} </span>
          <span style={{ color: TITLE_2, marginLeft: 20 }}>{rest.join(' ')}</span>
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 30,
            fontSize: 27,
            fontWeight: 'bold',
            color: GREEN,
          }}
        >
          &gt;&gt; robotics · silicon · firmware
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 30,
            fontSize: 27,
            lineHeight: 1.45,
            maxWidth: 880,
            justifyContent: 'center',
          }}
        >
          Pantheon, Dimensional, NVIDIA GEAR, and CARP on the SAL-E CubeSat.
        </div>
      </div>
    </div>
  );
};
