import { useLocation } from 'react-router-dom';
import siteConfig from '../utils/siteConfig';

// ── Social icon lookup ─────────────────────────────────────────────────────
const SocialIcon = ({ platform }) => {
	if (platform === 'linkedin') return (
		<svg xmlns='http://www.w3.org/2000/svg' width='22' height='20' viewBox='0 0 21 21' fill='none'>
			<g clipPath='url(#clip-linkedin)'>
				<path fillRule='evenodd' clipRule='evenodd' d='M20.9302 20.9302H16.7442V13.6057C16.7442 11.5964 15.8578 10.4753 14.2681 10.4753C12.5383 10.4753 11.5116 11.6435 11.5116 13.6057V20.9302H7.32558V7.32558H11.5116V8.85549C11.5116 8.85549 12.825 6.55092 15.7845 6.55092C18.7451 6.55092 20.9302 8.35755 20.9302 12.0957V20.9302ZM2.55558 5.14978C1.14384 5.14978 0 3.99659 0 2.57438C0 1.15321 1.14384 0 2.55558 0C3.96628 0 5.11011 1.15321 5.11011 2.57438C5.11116 3.99659 3.96628 5.14978 2.55558 5.14978ZM0 20.9302H5.23256V7.32558H0V20.9302Z' fill='white' />
			</g>
			<defs><clipPath id='clip-linkedin'><rect width='20.9302' height='20.9302' fill='white' /></clipPath></defs>
		</svg>
	);

	if (platform === 'github') return (
		<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 25 25' fill='none'>
			<g clipPath='url(#clip-github)'>
				<path fillRule='evenodd' clipRule='evenodd' d='M12.5 0C19.4037 0 25 5.73741 25 12.8162C25 18.4774 21.4225 23.2799 16.4587 24.9762C15.825 25.1024 15.6 24.7022 15.6 24.361C15.6 23.9385 15.615 22.5585 15.615 20.8435C15.615 19.6485 15.215 18.8686 14.7663 18.4711C17.55 18.1536 20.475 17.0697 20.475 12.1472C20.475 10.7472 19.99 9.60478 19.1875 8.70728C19.3175 8.38353 19.7462 7.07994 19.065 5.31494C19.065 5.31494 18.0175 4.97153 15.6312 6.62903C14.6325 6.34528 13.5625 6.20251 12.5 6.19751C11.4375 6.20251 10.3688 6.34528 9.37125 6.62903C6.9825 4.97153 5.9325 5.31494 5.9325 5.31494C5.25375 7.07994 5.6825 8.38353 5.81125 8.70728C5.0125 9.60478 4.52375 10.7472 4.52375 12.1472C4.52375 17.0572 7.4425 18.1577 10.2188 18.4814C9.86125 18.8014 9.5375 19.366 9.425 20.1947C8.7125 20.5222 6.9025 21.089 5.7875 19.1302C5.7875 19.1302 5.12625 17.8988 3.87125 17.8088C3.87125 17.8088 2.6525 17.7926 3.78625 18.5876C3.78625 18.5876 4.605 18.9814 5.17375 20.4626C5.17375 20.4626 5.9075 22.7501 9.385 21.9751C9.39125 23.0463 9.4025 24.056 9.4025 24.361C9.4025 24.6997 9.1725 25.0962 8.54875 24.9774C3.58125 23.2837 0 18.4787 0 12.8162C0 5.73741 5.5975 0 12.5 0Z' fill='white' />
			</g>
			<defs><clipPath id='clip-github'><rect width='25' height='25' fill='white' /></clipPath></defs>
		</svg>
	);

	if (platform === 'instagram') return (
		<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'>
			<g clipPath='url(#clip-instagram)'>
				<path fillRule='evenodd' clipRule='evenodd' d='M6.45662 0.135002C4.66595 0.215797 3.11389 0.653594 1.86064 1.90155C0.603014 3.15607 0.170656 4.71428 0.0896592 6.48632C0.03931 7.59235 -0.255106 15.9481 0.598638 18.1394C1.17437 19.6178 2.30828 20.7544 3.80015 21.332C4.49627 21.6028 5.29093 21.7861 6.45662 21.8396C16.2035 22.2807 19.8166 22.0406 21.3402 18.1394C21.6105 17.445 21.7966 16.6511 21.8481 15.4883C22.2935 5.71638 21.7758 3.59826 20.0771 1.90155C18.7297 0.557509 17.1448 -0.357413 6.45662 0.135002ZM6.54635 19.8743C5.47917 19.8263 4.90017 19.6484 4.5138 19.4989C3.54184 19.1211 2.81179 18.394 2.43636 17.4278C1.7862 15.7627 2.00183 7.85457 2.05984 6.57494C2.11676 5.32152 2.37069 4.17597 3.25508 3.29159C4.34962 2.19976 5.76376 1.66466 15.3924 2.09921C16.649 2.15598 17.7972 2.40939 18.6837 3.29159C19.7783 4.38342 20.3212 5.80844 19.879 15.4002C19.8308 16.4647 19.6524 17.0424 19.5025 17.4278C18.5119 19.9663 16.233 20.3187 6.54635 19.8743ZM15.4986 5.15859C15.4986 5.88139 16.0864 6.46913 16.8121 6.46913C17.5378 6.46913 18.1266 5.88139 18.1266 5.15859C18.1266 4.4358 17.5378 3.84858 16.8121 3.84858C16.0864 3.84858 15.4986 4.4358 15.4986 5.15859ZM5.34893 10.9868C5.34893 14.0832 7.86529 16.5936 10.9694 16.5936C14.0735 16.5936 16.5899 14.0832 16.5899 10.9868C16.5899 7.89033 14.0735 5.38149 10.9694 5.38149C7.86529 5.38149 5.34893 7.89033 5.34893 10.9868ZM7.3213 10.9868C7.3213 8.9778 8.95436 7.34784 10.9694 7.34784C12.9845 7.34784 14.6175 8.9778 14.6175 10.9868C14.6175 12.9968 12.9845 14.6273 10.9694 14.6273C8.95436 14.6273 7.3213 12.9968 7.3213 10.9868Z' fill='white' />
			</g>
			<defs><clipPath id='clip-instagram'><rect width='22' height='22' fill='white' /></clipPath></defs>
		</svg>
	);

	return null;
};

// ── Scroll-to-top button ───────────────────────────────────────────────────
const ScrollUpButton = () => (
	<div className='w-14 h-14 mt-10 ml-auto mr-0 border border-white rounded-full flex justify-center hover:bg-white/20 transition-colors duration-300'>
		<button
			type='button'
			className='w-14 h-14 self-center cursor-pointer block'
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			aria-label='Scroll to top'
		>
			<svg className='mx-auto' width='20' height='20' viewBox='0 0 20 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M10 21.5714V1M1 10L10 1L19 10' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
			</svg>
		</button>
	</div>
);

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
	const { footerHeading, footerSubheading, footerLinks, social } = siteConfig;
	const location = useLocation();

	return (
		<footer className='bg-[#181009]'>
			<div className='container mx-auto py-20 relative'>
				<div className='grid grid-cols-12 gap-4'>

					{/* Left column — heading + socials */}
					<div className='col-span-6'>
						<h3 className='text-white font-hanken font-semibold uppercase text-sm pb-3'>Get in touch</h3>
						<h2 className='font-hanken font-semibold text-4xl lg:text-5xl uppercase leading-[1.4] mb-3.5'>
							<span className='text-white'>{footerHeading}</span>
							<span className='block font-bodoni italic text-[#FCC270] normal-case'>{footerSubheading}</span>
						</h2>
						<ul className='flex gap-3 mt-6 [&_a]:border [&_a]:border-white [&_a]:rounded-full [&_a]:px-4 [&_a]:py-4'>
							{social.map(({ platform, href }) => (
								<li key={platform}>
									<a className='inline-flex justify-center hover:bg-white/20 transition-colors duration-300' href={href} aria-label={platform} target='_blank' rel='noopener noreferrer'>
										<SocialIcon platform={platform} />
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Right column — links + scroll-up */}
					<div className='col-span-6 self-end'>
						<ul className='text-right [&_a]:text-white [&_a]:font-hanken [&_a]:font-normal [&_a]:text-xl [&_a]:uppercase flex flex-col gap-2'>
							{footerLinks.map(({ label, href }) => {
								const isActive = href.startsWith('/') ? (location.pathname === href || (href !== '/' && location.pathname.startsWith(href))) : false;
								return (
									<li key={label}>
										<a className={`link-effect link-effect--metis link-effect--white ${isActive ? 'active font-semibold' : ''}`} href={href}>{label}</a>
									</li>
								);
							})}
						</ul>
						<ScrollUpButton />
					</div>

				</div>
			</div>

			{/* Copyright bar */}
			<div className='container mx-auto'>
				<div className='copyright border-t border-t-white pt-4 pb-8'>
					<p className='font-hanken font-light text-white text-sm uppercase mt-5'>
						&copy; {new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
