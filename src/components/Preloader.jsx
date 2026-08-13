import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Preloader — GSAP morph animation for equali.sign
 * Shows a full-screen branded preloader with:
 *  - Morphing SVG background blobs
 *  - Text split letter reveal
 *  - Accent dot "." pulse + scale morph
 *  - Animated progress bar
 *  - Exit curtain wipe on complete
 */
export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const beforeTextRef = useRef(null);
  const dotRef = useRef(null);
  const afterTextRef = useRef(null);
  const taglineRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Exit: slide the entire preloader container up off-screen
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: 'power4.inOut',
            delay: 0.2,
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });
        },
      });

      /* ── 0. Initial states (GSAP overrides the inline CSS values) ── */
      gsap.set([beforeTextRef.current, afterTextRef.current], {
        opacity: 0,
        y: 40,
        filter: 'blur(10px)',
      });
      gsap.set(dotRef.current, { opacity: 0, scale: 0, rotation: -180 });
      gsap.set(taglineRef.current, { opacity: 0, y: 20 });
      gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: 'left center' });

      /* ── 1. Blob ambient morph (looping, started independently) ── */
      gsap.to(blob1Ref.current, {
        scale: 1.18,
        x: 30,
        y: -20,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      gsap.to(blob2Ref.current, {
        scale: 0.88,
        x: -25,
        y: 30,
        duration: 5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.6,
      });
      gsap.to(blob3Ref.current, {
        scale: 1.12,
        x: 15,
        y: 25,
        duration: 3.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });

      /* ── 2. "equali" reveal ────────────────────────── */
      tl.to(
        beforeTextRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power3.out',
        },
        0.3
      );

      /* ── 3. "." morph into view ────────────────────── */
      tl.to(
        dotRef.current,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: 'back.out(2)',
        },
        '-=0.3'
      );

      /* ── 4. "sign" reveal ──────────────────────────── */
      tl.to(
        afterTextRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power3.out',
        },
        '-=0.4'
      );

      /* ── 5. Tagline fade in ─────────────────────────── */
      tl.to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.2'
      );

      /* ── 6. Progress bar fill + percentage counter ─── */
      tl.to(
        progressBarRef.current,
        {
          scaleX: 1,
          duration: 1.6,
          ease: 'power1.inOut',
        },
        '-=0.1'
      );

      // Animate the percent number in sync
      const obj = { val: 0 };
      tl.to(
        obj,
        {
          val: 100,
          duration: 1.6,
          ease: 'power1.inOut',
          onUpdate() {
            if (percentRef.current) {
              percentRef.current.textContent = Math.round(obj.val) + '%';
            }
          },
        },
        '<'
      );

      /* ── 7. Dot pulse before exit ───────────────────── */
      tl.to(
        dotRef.current,
        {
          scale: 1.6,
          duration: 0.25,
          ease: 'power2.in',
          yoyo: true,
          repeat: 1,
        },
        '-=0.2'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'oklch(0.12 0.03 30)',
      }}
    >
      {/* no curtain — whole container slides up on exit */}

      {/* ── Ambient blobs ──────────────────────────────── */}
      <div
        ref={blob1Ref}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
          background:
            'radial-gradient(ellipse at 40% 40%, oklch(0.55 0.20 32 / 0.35), transparent 70%)',
          top: '-15%',
          left: '-10%',
          filter: 'blur(40px)',
          willChange: 'transform',
        }}
      />
      <div
        ref={blob2Ref}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%',
          background:
            'radial-gradient(ellipse at 60% 60%, oklch(0.60 0.18 55 / 0.25), transparent 70%)',
          bottom: '-10%',
          right: '-5%',
          filter: 'blur(50px)',
          willChange: 'transform',
        }}
      />
      <div
        ref={blob3Ref}
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50% 50% 40% 60% / 40% 60% 50% 50%',
          background:
            'radial-gradient(ellipse at 50% 50%, oklch(0.65 0.15 20 / 0.20), transparent 70%)',
          top: '55%',
          left: '30%',
          filter: 'blur(35px)',
          willChange: 'transform',
        }}
      />

      {/* ── Noise texture overlay ──────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      {/* ── Main content ───────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          width: '100%',
          padding: '0 24px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Brand wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            gap: 0,
            lineHeight: 1,
            marginBottom: '16px',
            width: '100%',
          }}
        >
          {/* "equali" — pre-hidden to prevent flash before GSAP runs */}
          <span
            ref={beforeTextRef}
            style={{
              fontFamily: '"Hanken Grotesk", sans-serif',
              fontSize: 'clamp(1.5rem, 10vw, 7rem)',
              fontWeight: 500,
              color: '#fff',
              display: 'inline-block',
              willChange: 'transform, opacity, filter',
              opacity: 0,
              transform: 'translateY(40px)',
              filter: 'blur(10px)',
            }}
          >
            equali
          </span>

          {/* "." accent — morphing dot, pre-hidden */}
          <span
            ref={dotRef}
            style={{
              fontFamily: '"Hanken Grotesk", sans-serif',
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              fontWeight: 500,
              color: 'oklch(0.70 0.20 32)',
              display: 'inline-block',
              willChange: 'transform, opacity',
              textShadow:
                '0 0 30px oklch(0.55 0.20 32 / 0.8), 0 0 60px oklch(0.55 0.20 32 / 0.4)',
              opacity: 0,
              transform: 'scale(0) rotate(-180deg)',
            }}
          >
            .
          </span>

          {/* "sign" — pre-hidden */}
          <span
            ref={afterTextRef}
            style={{
              fontFamily: '"Hanken Grotesk", sans-serif',
              fontSize: 'clamp(1.5rem, 10vw, 7rem)',
              fontWeight: 500,
              color: '#fff',
              display: 'inline-block',
              willChange: 'transform, opacity, filter',
              alignSelf: 'flex-end',
              paddingBottom: '0.2em',
              opacity: 0,
              transform: 'translateY(40px)',
              filter: 'blur(10px)',
            }}
          >
            sign
          </span>
        </div>

        {/* Tagline — pre-hidden */}
        <p
          ref={taglineRef}
          style={{
            fontFamily: '"Hanken Grotesk", sans-serif',
            fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '48px',
            willChange: 'transform, opacity',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          crafting interfaces people love
        </p>

        {/* Progress section */}
        <div
          ref={progressRef}
          style={{ width: 'clamp(200px, 40vw, 340px)', margin: '0 auto' }}
        >
          {/* Track */}
          <div
            style={{
              height: '1px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '1px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Fill bar */}
            <div
              ref={progressBarRef}
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, oklch(0.55 0.20 32), oklch(0.70 0.20 45))',
                willChange: 'transform',
                boxShadow: '0 0 10px oklch(0.55 0.20 32 / 0.8)',
              }}
            />
          </div>

          {/* Percentage */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '8px',
            }}
          >
            <span
              ref={percentRef}
              style={{
                fontFamily: '"Hanken Grotesk", sans-serif',
                fontSize: '0.7rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.1em',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              0%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
