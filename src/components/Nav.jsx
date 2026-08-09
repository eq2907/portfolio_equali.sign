import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteConfig from '../utils/siteConfig';
import gsap from 'gsap';

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
			className={`relative block overflow-hidden hover:font-semibold transition-all duration-300 ${isActive ? 'active font-semibold' : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={onClick}
			style={{ perspective: '1000px' }}
		>
			<span ref={text1Ref} className="block" style={{ transformOrigin: '50% 100%' }}>{item.label}</span>
			<span ref={text2Ref} className="block absolute top-full left-0 w-full text-center" style={{ transformOrigin: '50% 0%', transform: 'rotateX(-90deg)' }}>{item.label}</span>
		</Link>
	);
};

function Nav({ handleScroll }) {
	const { nameParts, nav, navCta } = siteConfig;

	return (
		<header className='w-full fixed left-0 top-6 z-1030'>
			<div className='container mx-auto'>
				<div className='glass font-hanken py-3 px-8 rounded-full'>
					<div className='flex justify-between'>
						<Link className='font-medium text-xl self-center' to='/'>
							{nameParts.before}
							<span className='text-primary'>{nameParts.accent}</span>
							{nameParts.after}
						</Link>
						<nav className='flex gap-x-6 [&_a]:uppercase [&_a]:text-base [&_a]:self-center'>
							{nav.map((item) => (
								<AnimatedLink key={item.label} item={item} onClick={() => handleScroll(item.label.toLowerCase())} />
							))}
							<Link to={navCta.to} className='btn-outline button-effect button--stroke px-6 py-2' onClick={() => handleScroll('contact')} data-block="button">
								<span className='button__flair'></span>
								<span className="self-center relative z-10">{navCta.label}</span>
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Nav;
