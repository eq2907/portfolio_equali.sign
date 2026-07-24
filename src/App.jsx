import './style.css'
import { PortfolioData } from './utils/PortfolioData'
import { Portfolio } from './components/SecWork'
import equalisign from './assets/IMG_0492.jpg'

function Index() {
	return (
		<>
			<Nav />
			<div className="container mx-auto">
				<div className='hero mt-20'>
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
			{PortfolioData.map((item, index) => (
				<Portfolio key={index} {...item} />
			))}
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
