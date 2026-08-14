import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SESSION_KEY = 'preloader_shown';

function Preloader({ onComplete }) {
	const overlayRef = useRef(null);
	const counterRef = useRef(null);
	const lineRef = useRef(null);
	const tlRef = useRef(null);
	// Always hold the latest callback without it being a dep
	const onCompleteRef = useRef(onComplete);
	useEffect(() => { onCompleteRef.current = onComplete; });
	const [shouldShow] = useState(() => !sessionStorage.getItem(SESSION_KEY));

	useEffect(() => {
		if (!shouldShow) {
			onCompleteRef.current?.();
			return;
		}

		const overlay = overlayRef.current;
		const counter = counterRef.current;
		const line = lineRef.current;
		if (!overlay || !counter || !line) return;

		document.body.style.overflow = 'hidden';

		const startAnimation = () => {
			const tl = gsap.timeline({
				onComplete: () => {
					sessionStorage.setItem(SESSION_KEY, '1');
					document.body.style.overflow = '';
					onCompleteRef.current?.();
				},
			});
			tlRef.current = tl;

			// Proxy object for the numeric counter tween
			const proxy = { val: 0 };

			// Initial state
			gsap.set(overlay, { yPercent: 0 });
			gsap.set(counter, { opacity: 0, y: 24 });
			gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });

			// Fade in counter
			tl.to(counter, {
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: 'power3.out',
			});

			// Count 0 → 100 while line grows
			tl.to(
				proxy,
				{
					val: 100,
					duration: 2.2,
					ease: 'power1.inOut',
					onUpdate: () => {
						counter.textContent = Math.round(proxy.val);
					},
				},
				'<0.1'
			);

			tl.to(
				line,
				{
					scaleX: 1,
					duration: 2.8,
					ease: 'power1.inOut',
				},
				'<'
			);

			// Brief hold at 100
			tl.to({}, { duration: 0.35 });

			// Fade out counter
			tl.to(counter, {
				opacity: 0,
				y: -20,
				duration: 1,
				ease: 'power3.in',
			});

			// Slide overlay up
			tl.to(
				overlay,
				{
					yPercent: -100,
					duration: 1,
					ease: 'power4.inOut',
				},
				'-=0.1'
			);
		};

		if (document.readyState === 'complete') {
			startAnimation();
		} else {
			window.addEventListener('load', startAnimation, { once: true });
		}

		return () => {
			window.removeEventListener('load', startAnimation);
			tlRef.current?.kill();
			document.body.style.overflow = '';
		};
	}, [shouldShow]);

	if (!shouldShow) return null;

	return (
		<div
			ref={overlayRef}
			id="preloader"
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: 9999,
				backgroundColor: '#000000',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'flex-end',
				padding: 'clamp(2rem, 6vw, 4rem)',
			}}
		>
			{/* Progress line — top, full width */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '10px',
					background: 'rgba(245,240,235,0.12)',
					overflow: 'hidden',
				}}
			>
				<div
					ref={lineRef}
					style={{
						height: '100%',
						background: 'linear-gradient(90deg, #CC2B0E 0%, #FCC270 100%)',
						// background: 'oklch(0.55 0.20 32)',
					}}
				/>
			</div>

			{/* Large numeric counter */}
			<span
				ref={counterRef}
				style={{
					fontFamily: '"Hanken Grotesk", ui-sans-serif, sans-serif',
					fontSize: 'clamp(5rem, 18vw, 14rem)',
					fontWeight: 800,
					lineHeight: 0.85,
					letterSpacing: '-0.04em',
					color: '#f5f0eb',
					userSelect: 'none',
					fontVariantNumeric: 'tabular-nums',
					display: 'block',
				}}
			>
				0
			</span>
		</div>
	);
}

export default Preloader;
