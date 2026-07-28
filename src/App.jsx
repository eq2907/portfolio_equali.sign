import './style.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Work from './pages/Work';
import { PortfolioData } from './utils/PortfolioData'
import { StackedPortfolio } from './components/SecWork'
import equalisign from './assets/IMG_0492.jpg'

function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
			</Routes>
		</BrowserRouter>
	)
}

function Home() {
	return (
		<>
			<Nav />

			<div className='hero mt-20 mb-20'>
				<div className="container mx-auto">
					<figure className='w-63.5 mx-auto'>
						<img className='rounded-full' src={equalisign} alt="equali.sign" />
					</figure>
					<div className='hero__description text-center mt-16'>
						<h1 className='text-6xl font-semibold'>
							<span className='font-hanken uppercase block'>Frontend Developer</span>
							<span className='block font-bodoni italic my-2.5'>crafting <span className='text-primary'>interfaces</span></span>
							<span className='font-hanken uppercase block mt-6'>people love.</span>
						</h1>
						<p className='font-hanken max-w-136.5 font-normal mx-auto mt-8 text-xl leading-[1.8]'>I design and build fast, accessible, and pixel-perfect web experiences using React and TypeScript</p>
					</div>
					<div className='scorll-to-explore font-hanken mt-8'>
						<span className='bg-secondary-foreground w-0.5 h-16 block mx-auto'></span>
						<span className='block text-[#6B6B6B] font-normal mt-5 text-center text-sm uppercase'>Scroll to explore</span>
						<span className='block text-secondary-foreground mt-1 text-center font-semibold text-xl uppercase'>Selected Work</span>
					</div>
				</div>
			</div>

			<section className='portfolio-card-wrapper relative'>
				<StackedPortfolio items={PortfolioData} />
			</section>

			<section className='short-intro-wrapper py-24 border-y border-y-[#DDD7CD]'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-12 gap-6'>
						<div className='col-span-8'>
							<h3 className='text-[#665B53] font-hanken font-semibold uppercase text-sm mb-3'>Short intro</h3>
							<h2 className='font-hanken font-semibold text-4xl lg:text-5xl uppercase leading-[1.4] mb-3.5'>Clean code, <span className='font-bodoni italic text-[#CC2B0E] normal-case'>thoughtful UX, and <br /> interfaces</span> built to last.</h2>
							<p className='font-hanken font-normal text-xl leading-[1.8] mb-6'>
								I started my career in design back in 2020. As time passed, I wanted to provide my clients with more than just design. This led me to explore web development using powerful low-code platforms such as Webflow, Tilda, Weblium and others. With my dual expertise in both web design and development, I bridge the gap between concept and reality to ensure a seamless user experience. My focus is on delivering exceptional work that meets the needs of my clients and their customers.
							</p>
							<a className="btn-outline inline-flex text-sm items-center gap-x-3 mt-2 font-semibold uppercase px-6 pt-2.5 pb-2.5" href="#" target="_blank" rel="noopener noreferrer"><span className="self-center">Download Resume</span><svg className="self-center" width="9" height="9" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 6.5L6.5 0.5M6.5 5.9V0.5H1.1" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
						</div>
						<div className='col-span-4 self-center'>
							<figure className='w-75 mx-auto'>
								<img className='rounded-full' src={equalisign} alt="equali.sign" />
							</figure>
						</div>
					</div>
				</div>
			</section>

			<section className='get-in-touch-wrapper'>
				<div className='grid grid-cols-2 gap-6'>
					<div className='text-center self-center'>
						<h3 className='text-[#665B53] font-hanken font-semibold uppercase text-sm mb-3'>Get in touch</h3>
						<h2 className='font-hanken font-semibold text-4xl lg:text-5xl uppercase leading-[1.4] mb-3.5'><span className='font-bodoni italic text-[#CC2B0E] normal-case'>Let's start A</span> <br />conversation</h2>
						<p className='font-hanken font-normal text-xl leading-[1.8] mb-6 max-w-127.5 mx-auto'>
							Have a project, a question, or just want to say hello? Fill out the form and I'll get back to you as soon as possible.
						</p>
					</div>
					<div className='bg-[#E86F63] p-20'>
						<form className='grid grid-cols-12 gap-4' action="" method="post">
							<div className='col-span-6'>
								<input className='rounded-full' name='YourName' type="text" placeholder="Your name" />
							</div>
							<div className='col-span-6'>
								<input className='rounded-full' name='Email' type="email" placeholder="Your email" />
							</div>
							<div className='col-span-12'>
								<textarea className='rounded-2xl' name="Message" id="" cols="30" rows="10" placeholder="Your message"></textarea>
							</div>
							<div className='col-span-12'>
								<button className='btn-white-solid text-base w-full justify-center inline-flex items-center gap-x-3 mt-2 font-semibold uppercase px-6 pt-3.75 pb-4 cursor-pointer' type="submit">Send Message</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

function Nav() {
	return (
		<>
			<header className='mt-8 lg:mx-14'>
				<div className='container mx-auto'>
					<div className='glass font-hanken py-3 px-8 rounded-full'>
						<div className='flex justify-between'>
							<Link className='font-medium text-xl self-center' to="/">equali<span className='text-primary'>.</span>sign</Link>
							<nav className='flex gap-x-6 [&_a]:uppercase [&_a]:font-medium [&_a]:text-base [&_a]:self-center'>
								<Link to="/">About</Link>
								<Link to="/work">Work</Link>
								<Link to="/">Contact</Link>
								<Link to="/" className='btn-outline px-6 py-2'>Let's talk</Link>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

function Footer() {
	return (
		<>
			<footer className='bg-[#181009] text-center'>
				<div className='container mx-auto py-20 relative'>
					<h3 className='text-white font-hanken font-semibold uppercase text-sm pb-3'>Get in touch</h3>
					<h2 className='font-hanken font-semibold text-4xl lg:text-5xl uppercase leading-[1.4] mb-3.5'>
						<span className='text-white'>Have a project in mind?</span>
						<span className='block font-bodoni italic text-[#FCC270] normal-case'>Let's build it.</span>
					</h2>
					<ul className='flex gap-3 mt-6 justify-center [&_a]:border [&_a]:border-white [&_a]:rounded-full [&_a]:px-4 [&_a]:py-4'>
						<li>
							<a className='inline-flex justify-center' href='#'>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 21 21" fill="none">
									<g clipPath="url(#clip0_38_17)">
										<path fillRule="evenodd" clipRule="evenodd" d="M20.9302 20.9302H16.7442V13.6057C16.7442 11.5964 15.8578 10.4753 14.2681 10.4753C12.5383 10.4753 11.5116 11.6435 11.5116 13.6057V20.9302H7.32558V7.32558H11.5116V8.85549C11.5116 8.85549 12.825 6.55092 15.7845 6.55092C18.7451 6.55092 20.9302 8.35755 20.9302 12.0957V20.9302ZM2.55558 5.14978C1.14384 5.14978 0 3.99659 0 2.57438C0 1.15321 1.14384 0 2.55558 0C3.96628 0 5.11011 1.15321 5.11011 2.57438C5.11116 3.99659 3.96628 5.14978 2.55558 5.14978ZM0 20.9302H5.23256V7.32558H0V20.9302Z" fill="white" />
									</g>
									<defs>
										<clipPath id="clip0_38_17">
											<rect width="20.9302" height="20.9302" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</a>
						</li>
						<li>
							<a className='inline-flex justify-center' href='#'>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 25 25" fill="none">
									<g clipPath="url(#clip0_39_31)">
										<path fillRule="evenodd" clipRule="evenodd" d="M12.5 0C19.4037 0 25 5.73741 25 12.8162C25 18.4774 21.4225 23.2799 16.4587 24.9762C15.825 25.1024 15.6 24.7022 15.6 24.361C15.6 23.9385 15.615 22.5585 15.615 20.8435C15.615 19.6485 15.215 18.8686 14.7663 18.4711C17.55 18.1536 20.475 17.0697 20.475 12.1472C20.475 10.7472 19.99 9.60478 19.1875 8.70728C19.3175 8.38353 19.7462 7.07994 19.065 5.31494C19.065 5.31494 18.0175 4.97153 15.6312 6.62903C14.6325 6.34528 13.5625 6.20251 12.5 6.19751C11.4375 6.20251 10.3688 6.34528 9.37125 6.62903C6.9825 4.97153 5.9325 5.31494 5.9325 5.31494C5.25375 7.07994 5.6825 8.38353 5.81125 8.70728C5.0125 9.60478 4.52375 10.7472 4.52375 12.1472C4.52375 17.0572 7.4425 18.1577 10.2188 18.4814C9.86125 18.8014 9.5375 19.366 9.425 20.1947C8.7125 20.5222 6.9025 21.089 5.7875 19.1302C5.7875 19.1302 5.12625 17.8988 3.87125 17.8088C3.87125 17.8088 2.6525 17.7926 3.78625 18.5876C3.78625 18.5876 4.605 18.9814 5.17375 20.4626C5.17375 20.4626 5.9075 22.7501 9.385 21.9751C9.39125 23.0463 9.4025 24.056 9.4025 24.361C9.4025 24.6997 9.1725 25.0962 8.54875 24.9774C3.58125 23.2837 0 18.4787 0 12.8162C0 5.73741 5.5975 0 12.5 0Z" fill="white" />
									</g>
									<defs>
										<clipPath id="clip0_39_31">
											<rect width="25" height="25" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</a>
						</li>
						<li>
							<a className='inline-flex justify-center' href='#'>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
									<g clipPath="url(#clip0_39_43)">
										<path fillRule="evenodd" clipRule="evenodd" d="M6.45662 0.135002C4.66595 0.215797 3.11389 0.653594 1.86064 1.90155C0.603014 3.15607 0.170656 4.71428 0.0896592 6.48632C0.03931 7.59235 -0.255106 15.9481 0.598638 18.1394C1.17437 19.6178 2.30828 20.7544 3.80015 21.332C4.49627 21.6028 5.29093 21.7861 6.45662 21.8396C16.2035 22.2807 19.8166 22.0406 21.3402 18.1394C21.6105 17.445 21.7966 16.6511 21.8481 15.4883C22.2935 5.71638 21.7758 3.59826 20.0771 1.90155C18.7297 0.557509 17.1448 -0.357413 6.45662 0.135002ZM6.54635 19.8743C5.47917 19.8263 4.90017 19.6484 4.5138 19.4989C3.54184 19.1211 2.81179 18.394 2.43636 17.4278C1.7862 15.7627 2.00183 7.85457 2.05984 6.57494C2.11676 5.32152 2.37069 4.17597 3.25508 3.29159C4.34962 2.19976 5.76376 1.66466 15.3924 2.09921C16.649 2.15598 17.7972 2.40939 18.6837 3.29159C19.7783 4.38342 20.3212 5.80844 19.879 15.4002C19.8308 16.4647 19.6524 17.0424 19.5025 17.4278C18.5119 19.9663 16.233 20.3187 6.54635 19.8743ZM15.4986 5.15859C15.4986 5.88139 16.0864 6.46913 16.8121 6.46913C17.5378 6.46913 18.1266 5.88139 18.1266 5.15859C18.1266 4.4358 17.5378 3.84858 16.8121 3.84858C16.0864 3.84858 15.4986 4.4358 15.4986 5.15859ZM5.34893 10.9868C5.34893 14.0832 7.86529 16.5936 10.9694 16.5936C14.0735 16.5936 16.5899 14.0832 16.5899 10.9868C16.5899 7.89033 14.0735 5.38149 10.9694 5.38149C7.86529 5.38149 5.34893 7.89033 5.34893 10.9868ZM7.3213 10.9868C7.3213 8.9778 8.95436 7.34784 10.9694 7.34784C12.9845 7.34784 14.6175 8.9778 14.6175 10.9868C14.6175 12.9968 12.9845 14.6273 10.9694 14.6273C8.95436 14.6273 7.3213 12.9968 7.3213 10.9868Z" fill="white" />
									</g>
									<defs>
										<clipPath id="clip0_39_43">
											<rect width="22" height="22" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</a>
						</li>
						<li>
							<a className='inline-flex justify-center' href='#'>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 19" fill="none">
									<path d="M2 3.00007L9.75 9.2C11.0834 10.2667 12.9166 10.2667 14.25 9.2L22 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M20.5556 1H3.44444C2.09441 1 1 2.08731 1 3.42857V15.5714C1 16.9127 2.09441 18 3.44444 18H20.5556C21.9056 18 23 16.9127 23 15.5714V3.42857C23 2.08731 21.9056 1 20.5556 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
								</svg>
							</a>
						</li>
					</ul>
					<div className='w-14 h-14 border border-white rounded-full absolute right-0 bottom-14 flex justify-center'>
						<button type='button' className='self-center cursor-pointer'>
							<svg width="20" height="20" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 21.5714V1M1 10L10 1L19 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>
				</div>
				<div className='container mx-auto'>
					<div className='copyright border-t border-t-white pt-4 pb-8'>
						<p className='font-hanken font-semibold text-white text-sm uppercase mt-5'>&copy; {new Date().getFullYear()}. All rights reserved.</p>
					</div>
				</div>

			</footer>
		</>
	)
}

export default Index;
