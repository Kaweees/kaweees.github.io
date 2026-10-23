import { SITE } from '@config';
import type { CollectionEntry } from 'astro:content';

// Dark Gruvbox card, the same look as the site OG image: charcoal ground
// with scanlines, a sand-bordered card, the neon post title, the
// description, and the author and blog URL along the bottom.
const GROUND = '#282828';
const CARD = '#3c3836';
const SAND = '#ebdbb2';
const TITLE_2 = '#d8c787';
const GREEN = '#8ec07c';

export default (post: CollectionEntry<'blog'>) => {
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
          justifyContent: 'center',
          margin: '2rem',
          width: '88%',
          height: '80%',
          color: SAND,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '20px',
            width: '90%',
            height: '90%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '90%',
              maxHeight: '90%',
              width: '100%',
              maxWidth: '100%',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 26,
                fontWeight: 'bold',
                color: GREEN,
                marginBottom: 14,
              }}
            >
              &gt;&gt; blog
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 60,
                fontWeight: 'bold',
                lineHeight: 1.15,
                color: '#ffffff',
                textShadow: `2px 2px 7px ${SAND}`,
              }}
            >
              {post.data.title}
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 24,
                fontSize: 28,
                lineHeight: 1.4,
              }}
            >
              {post.data.description}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '8px',
              fontSize: 26,
            }}
          >
            <span style={{ display: 'flex' }}>
              by
              <span style={{ fontWeight: 'bold', color: TITLE_2, marginLeft: 12 }}>
                {post.data.author}
              </span>
            </span>
            <span style={{ overflow: 'hidden', fontWeight: 'bold', color: GREEN }}>
              {SITE.blogURL}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
