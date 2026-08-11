import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteConfig from '../utils/siteConfig';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

const AnimatedLink = ({ item, onClick }) => {
	const location = useLocation();
	const isActive = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to));

	const text1Ref = useRef(null);
	const text2Ref = useRef(null);



	const handleMouseEnter = () => {
		gsap.to(text1Ref.current, {
			yPercent: -100,
			rotationX: 90,
			duration: 0.2,
			ease: "power2.inOut"
		});
		gsap.to(text2Ref.current, {
			yPercent: -100,
			rotationX: 0,
			duration: 0.2,
			ease: "power2.inOut"
		});
	};

	const handleMouseLeave = () => {
		gsap.to(text1Ref.current, {
			yPercent: 0,
			rotationX: 0,
			duration: 0.2,
			ease: "power2.inOut"
		});
		gsap.to(text2Ref.current, {
			yPercent: 0,
			rotationX: -90,
			duration: 0.2,
			ease: "power2.inOut"
		});
	};

	return (
		<Link
			to={item.to}
			className={`relative overflow-hidden hover:font-semibold transition-all duration-300 ${isActive ? 'active font-semibold' : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={onClick}
			style={{ perspective: '1000px' }}
		>
			<span ref={text1Ref} className='block' style={{ transformOrigin: '50% 100%' }}>{item.label}</span>
			<span ref={text2Ref} className='block absolute top-full left-0 w-full' style={{ transformOrigin: '50% 0%', transform: 'rotateX(-90deg)' }}>{item.label}</span>
		</Link>
	);
};

function Nav({ handleScroll }) {
	const { nameParts, nav, navCta } = siteConfig;

	useEffect(() => {
		// Elements
		const openBtn = document.getElementById('openBtn');
		const closeBtn = document.getElementById('closeBtn');
		const offcanvas = document.getElementById('offcanvas');
		const overlay = document.getElementById('overlay');
		const morphPath = document.getElementById('morphPath');
		const svgWrap = document.querySelector('.svg-wrap');

		if (!openBtn || !closeBtn || !offcanvas || !overlay || !morphPath || !svgWrap) return;

		// Paths: closed (initial) and open (morphed) shapes
		// initialPath is the current d attribute; openPath is the target shape when menu opens
		const closedPath = "M 400 0 L 400 1000 L 120 1000 C 400 702 400 243 120 0 Z";
		const openPath = "M 400 0 L 400 1000 L 0 1000 C 0 800 0 192 0 0 Z";

		// Set initial state
		gsap.set(offcanvas, { xPercent: 100 });
		gsap.set(morphPath, { attr: { d: closedPath } });
		gsap.set('.menu__panel', { y: -20, opacity: 0 });
		gsap.set('.menu-list li', { x: -20, opacity: 0 });

		// Animation timeline for open/close
		const tl = gsap.timeline({ paused: true, defaults: { duration: 0.9, ease: "elastic.out(1, 0.6)" } });

		// Step 1: enable pointer events and slide panel in (translateX)
		tl.to(offcanvas, {
			pointerEvents: "auto",
			xPercent: 0,
			duration: 0.7,
			ease: "power3.out"
		}, 0);

		// Step 2: fade overlay in
		tl.to(overlay, { opacity: 1, pointerEvents: "auto", duration: 0.45, ease: "power2.out" }, 0);

		// Step 3: morph the SVG path with elastic easing (slightly delayed to feel springy)
		tl.to(morphPath, {
			morphSVG: { shape: openPath },
			duration: 1.5,
			ease: "elastic.out(1, 1)"
		}, 0.08);

		// Optional: small bounce on panel content for extra polish
		tl.fromTo(".panel", { y: 0, opacity: 1 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.12);

		// Reverse timeline for closing (we'll playReverse)
		function openMenu() {
			offcanvas.setAttribute('aria-hidden', 'false');
			overlay.setAttribute('aria-hidden', 'false');
			svgWrap.setAttribute('aria-hidden', 'false');
			tl.play(0);

			// Animate header elements
			gsap.to('.menu__panel', {
				y: 0,
				opacity: 1,
				duration: 0.4,
				ease: 'power2.out',
				delay: 0.3  // Start after the menu has started opening
			});

			// Animate menu items with a small delay after header
			gsap.to('.menu-list li', {
				x: 0,
				opacity: 1,
				duration: 0.4,
				stagger: 0.1,
				ease: 'power2.out',
				delay: 0.4  // Start after the header animation
			});
		}

		function closeMenu() {
			// Animate header out
			gsap.to('.menu__panel', {
				y: -20,
				opacity: 0,
				duration: 0.3,
				ease: 'power2.in',
				delay: 0.1  // Slight delay after menu items start animating out
			});

			// Animate menu items out in reverse order
			gsap.to('.menu-list li', {
				x: -20,
				opacity: 0,
				duration: 0.3,
				stagger: {
					each: 0.08,
					from: 'end',  // Start from the last item
					ease: 'power2.in'
				},
				onComplete: function () {
					// After menu items are hidden, start closing the menu
					const closeTl = gsap.timeline({
						defaults: { duration: 0.6, ease: "power3.inOut" },
						onComplete: () => {
							offcanvas.setAttribute('aria-hidden', 'true');
							overlay.setAttribute('aria-hidden', 'true');
							svgWrap.setAttribute('aria-hidden', 'true');
							offcanvas.style.pointerEvents = 'none';
							overlay.style.pointerEvents = 'none';
						}
					});

					closeTl.to(morphPath, { morphSVG: { shape: closedPath }, duration: 1.0, ease: "elastic.out(1, 0.6)" }, 0);
					closeTl.to(offcanvas, { xPercent: 100, duration: 0.4, ease: "power2.inOut" }, 0.06);
					closeTl.to(overlay, { opacity: 0, duration: 0.5, ease: "power2.in" }, 0);
				}
			});
		}

		// Event listeners
		openBtn.addEventListener('click', openMenu);
		closeBtn.addEventListener('click', closeMenu);
		overlay.addEventListener('click', closeMenu);

		// Keyboard accessibility: close on Escape
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') {
				// if menu is open (aria-hidden false), close it
				if (offcanvas.getAttribute('aria-hidden') === 'false') closeMenu();
			}
		};
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			openBtn.removeEventListener('click', openMenu);
			closeBtn.removeEventListener('click', closeMenu);
			overlay.removeEventListener('click', closeMenu);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const headerRef = useRef(null);

	useEffect(() => {
		if (headerRef.current) {
			const showAnim = gsap.from(headerRef.current, {
				yPercent: -150,
				paused: true,
				duration: 0.3,
				ease: 'power2.out'
			}).progress(1);

			ScrollTrigger.create({
				start: 'top top',
				end: 'max',
				onUpdate: (self) => {
					if (self.direction === 1) {
						showAnim.reverse();
					} else {
						showAnim.play();
					}
				}
			});
		}
	}, []);

	return (
		<>
			<header ref={headerRef} className='w-full fixed left-0 top-6 z-1020'>
				<div className='container mx-auto'>
					<div className='glass font-hanken py-3 px-8 rounded-full'>
						<div className='flex justify-between'>
							<Link className='font-medium text-xl self-center' to='/'>
								{nameParts.before}
								<span className='text-primary'>{nameParts.accent}</span>
								{nameParts.after}
							</Link>
							<nav className='flex gap-x-6 [&_a]:uppercase [&_a]:text-base [&_a]:self-center'>
								<div className='hidden lg:flex lg:gap-x-6 [&_a]:uppercase [&_a]:text-base [&_a]:self-center'>
									{nav.map((item) => (
										<AnimatedLink key={item.label} item={item} onClick={() => handleScroll(item.label.toLowerCase())} />
									))}
									<Link to={navCta.to} className='btn-outline button-effect button--stroke px-6 py-2 hidden lg:block' onClick={() => handleScroll('contact')} data-block="button">
										<span className='button__flair'></span>
										<span className="self-center relative z-10">{navCta.label}</span>
									</Link>
								</div>
								<button id='openBtn' className='block lg:hidden' type='button' aria-label="Open menu">
									<svg className='size-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path className='stroke-secondary-foreground' d="M4 17H20M4 12H20M4 7H20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</button>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<div id='offcanvas' className='offcanvas' aria-hidden='true' role='dialog' aria-label='Main menu mobile'>
				<div className='svg-wrap' aria-hidden='true'>
					<svg id='morphSvg' viewBox="0 0 400 1000" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"
						xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<defs>
							<linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
								<stop offset="0" stopColor="#f8f5ec" />
								<stop offset="1" stopColor="#f8f5ec" />
							</linearGradient>
						</defs>

						<path id="morphPath" fill="url(#g1)" d="M400,0 L400,1000 L0,1000 C40,800 40,200 0,0 Z"></path>
					</svg>
				</div>

				<div className='panel'>
					<div className='menu__panel'>
						<div className='flex justify-between mb-6'>
							<div className='panel__logo'>
								<Link className='font-medium text-xl self-center' to='/'>
									{nameParts.before}
									<span className='text-primary'>{nameParts.accent}</span>
									{nameParts.after}
								</Link>
							</div>
							<button id='closeBtn' className='self-center' aria-label='Close menu'>
								<svg className='size-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
									<g id="SVGRepo_iconCarrier">
										<rect width="24" height="24" fill="none"></rect>
										<path d="M7 17L16.8995 7.10051" stroke="#333" strokeLinecap="round" strokeLinejoin="round"></path>
										<path d="M7 7.00001L16.8995 16.8995" stroke="#333" strokeLinecap="round" strokeLinejoin="round"></path>
									</g>
								</svg>
							</button>
						</div>
					</div>
					<ul className='menu-list flex flex-col gap-y-4 [&_a]:uppercase [&_a]:text-base'>
						{nav.map((item) => (
							<li key={item.label}>
								<AnimatedLink item={item} onClick={() => {
									handleScroll(item.label.toLowerCase());
									document.getElementById('closeBtn')?.click();
								}} />
							</li>
						))}
						<li>
							<Link to={navCta.to} className='w-full btn-outline button-effect button--stroke px-6 py-2 text-center block' onClick={() => {
								handleScroll('contact');
								document.getElementById('closeBtn')?.click();
							}} data-block="button">
								<span className='button__flair'></span>
								<span className="self-center relative z-10">{navCta.label}</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div id='overlay' className='overlay' aria-hidden='true'></div>
		</>
	);
}

export default Nav;
