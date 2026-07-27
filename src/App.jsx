import './style.css'
import { PortfolioData } from './utils/PortfolioData'
import { StackedPortfolio } from './components/SecWork'
import equalisign from './assets/IMG_0492.jpg'

function Index() {
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
						<p className='font-hanken max-w-[546px] font-normal mx-auto mt-8 text-xl leading-[1.8]'>I design and build fast, accessible, and pixel-perfect web experiences using React and TypeScript</p>
					</div>
					<div className='scorll-to-explore font-hanken mt-8'>
						<span className='bg-secondary-foreground w-0.5 h-16 block mx-auto'></span>
						<span className='block text-[#6B6B6B] font-normal mt-5 text-center text-sm uppercase'>Scroll to explore</span>
						<span className='block text-secondary-foreground mt-1 text-center font-semibold text-xl uppercase'>Selected Work</span>
					</div>
				</div>
			</div>
			<section className='portfolio-card-wrapper relative'>
				<div className='container mx-auto'>
					<StackedPortfolio items={PortfolioData} />
				</div>
			</section>
			<section className='short-intro mt-14'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-12 gap-6'>
						<div className='col-span-8'>
							<h3 className='text-[#665B53] font-hanken font-semibold uppercase text-sm mb-3'>short intro</h3>
							<h2 className='font-hanken font-semibold text-4xl lg:text-5xl uppercase leading-[1.4] mb-3.5'>Clean code, <span className='font-bodoni italic text-[#CC2B0E] normal-case'>thoughtful UX, and interfaces</span> built to last.</h2>
							<p className='font-hanken font-normal text-xl leading-[1.8] mb-6'>
								I started my career in design back in 2020. As time passed, I wanted to provide my clients with more than just design. This led me to explore web development using powerful low-code platforms such as Webflow, Tilda, Weblium and others. With my dual expertise in both web design and development, I bridge the gap between concept and reality to ensure a seamless user experience. My focus is on delivering exceptional work that meets the needs of my clients and their customers.
							</p>
							<a className="btn-outline inline-flex text-xs items-center gap-x-3 mt-2 font-semibold uppercase px-4 pt-[10px] pb-2" href="#" target="_blank" rel="noopener noreferrer"><span className="self-center">Download Resume</span><svg className="self-center" width="9" height="9" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 6.5L6.5 0.5M6.5 5.9V0.5H1.1" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
						</div>
						<div className='col-span-4 self-center'>
							<figure className='w-[300px] mx-auto'>
								<img className='rounded-full' src={equalisign} alt="equali.sign" />
							</figure>
						</div>
					</div>
				</div>
			</section>
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
							<a className='font-medium text-xl self-center' href="#">equali<span className='text-primary'>.</span>sign</a>
							<nav className='flex gap-x-6 [&_a]:uppercase [&_a]:font-medium [&_a]:text-base [&_a]:self-center'>
								<a href="#">About</a>
								<a href="#">Work</a>
								<a href="#">Contact</a>
								<a href="#" className='btn-outline px-6 py-2'>Let's talk</a>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Index;
