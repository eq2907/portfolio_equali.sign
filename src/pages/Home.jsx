import { PortfolioData } from '../utils/PortfolioData';
import { StackedPortfolio } from '../components/SecWork';
import siteConfig from '../utils/siteConfig';

// ── Arrow icon shared by buttons ──────────────────────────────────────────
const ArrowIcon = () => (
	<svg className='self-center relative z-10' width='9' height='9' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path d='M0.5 6.5L6.5 0.5M6.5 5.9V0.5H1.1' stroke='#333333' strokeLinecap='round' strokeLinejoin='round' />
	</svg>
);

function Home() {

	const {
		title,
		taglineAccent,
		bio,
		profilePhoto,
		introHeading,
		introBio,
		resumeUrl,
		// contactHeading,
		// contactSubtext,
		// contactFormAction,
	} = siteConfig;

	// Split tagline accent word out of the intro heading for styling
	const [introHeadingBefore, introHeadingAfter] = introHeading.split(taglineAccent);

	return (
		<>
			{/* ── Hero ──────────────────────────────────────────── */}
			<div className='hero mt-40 mb-20'>
				<div className='container mx-auto'>
					<figure className='w-63.5 mx-auto'>
						<img
							className='rounded-full'
							src={profilePhoto}
							alt={siteConfig.name}
							fetchPriority='high'
							decoding='async'
						/>
					</figure>
					<div className='hero__description text-center mt-16'>
						<h1 className='text-5xl lg:text-6xl font-semibold'>
							<span className='font-hanken uppercase block leading-[1.2]'>{title}</span>
							<span className='block font-bodoni italic lg:my-2.5 leading-[1.2]'>
								{introHeadingBefore && introHeadingBefore.trim()}{' '}
								<span className='text-primary'>{taglineAccent}</span>{' '}
								{introHeadingAfter && introHeadingAfter.trim()}
							</span>
							<span className='font-hanken uppercase block mt-4 lg:mt-6'>people love.</span>
						</h1>
						<p className='font-hanken max-w-120 font-normal mx-auto mt-8 text-lg lg:text-xl leading-[1.8]'>
							{bio}
						</p>
					</div>
					<div className='scorll-to-explore font-hanken mt-8'>
						<span className='bg-secondary-foreground w-0.5 h-16 block mx-auto'></span>
						<span className='block text-[#6B6B6B] font-normal mt-5 text-center text-xs lg:text-sm uppercase'>Scroll to explore</span>
						<span className='block text-secondary-foreground mt-1 text-center font-semibold text-lg lg:text-xl uppercase'>Selected Work</span>
					</div>
				</div>
			</div>

			{/* ── Stacked portfolio cards ───────────────────────── */}
			<section className='portfolio-card-wrapper relative'>
				<StackedPortfolio items={PortfolioData.slice(0, 4)} />
			</section>

			{/* ── Short intro ───────────────────────────────────── */}
			<section className='short-intro-wrapper py-12 lg:py-24 border-y border-y-[#DDD7CD]' id='about'>
				<div className='container mx-auto' id='contact'>
					<div className='grid grid-cols-12 gap-6'>
						<div className='col-span-12 lg:col-span-8 order-2'>
							<h3 className='text-[#665B53] font-hanken font-semibold uppercase text-sm mb-3'>Short intro</h3>
							<h2 className='font-hanken font-semibold text-4xl lg:text-5xl uppercase leading-[1.3] max-w-220 mb-3.5'>
								Crafting clean code,{' '}
								<span className='font-bodoni italic text-[#CC2B0E] normal-case inline-block mb-2'>
									intuitive UX, and digital experiences
								</span>{' '}
								that stand the test of time.
							</h2>
							<p className='font-hanken font-normal text-lg lg:text-xl leading-[1.8] mb-6'>{introBio}</p>
							<a
								className='btn-outline button-effect button--stroke inline-flex text-sm items-center gap-x-3 mt-2 font-semibold uppercase px-6 pt-2.5 pb-2.5'
								href={resumeUrl}
								target='_blank'
								data-block="button"
								rel='noopener noreferrer'
							>
								<span className='button__flair'></span>
								<span className='self-center relative z-10'>Download Resume</span>
								<ArrowIcon />
							</a>
						</div>
						<div className='col-span-12 lg:col-span-4 self-center lg:order-2'>
							<figure className='w-75 mx-auto mb-4'>
								<img
									className='rounded-full'
									src={profilePhoto}
									alt={siteConfig.name}
									loading='lazy'
									decoding='async'
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>

			{/* ── Contact / Get in touch ────────────────────────── */}
			{/* <section className='get-in-touch-wrapper' id='contact'>
				<div className='grid grid-cols-2 gap-6'>
					<div className='text-center self-center'>
						<h2 className='font-hanken font-semibold text-4xl lg:text-5xl uppercase leading-[1.4] mb-3.5'>
							<span dangerouslySetInnerHTML={{ __html: contactHeading }} />
						</h2>
						<p className='font-hanken font-normal text-xl leading-[1.8] mb-6 max-w-127.5 mx-auto'>
							{contactSubtext}
						</p>
					</div>
					<div className='bg-[#E86F63] p-20'>
						<form className='grid grid-cols-12 gap-4' action={contactFormAction} method='post'>
							<div className='col-span-6'>
								<input className='rounded-full' name='YourName' type='text' placeholder='Your name' />
							</div>
							<div className='col-span-6'>
								<input className='rounded-full' name='Email' type='email' placeholder='Your email' />
							</div>
							<div className='col-span-12'>
								<textarea className='rounded-2xl' name='Message' cols='30' rows='10' placeholder='Your message'></textarea>
							</div>
							<div className='col-span-12'>
								<button
									className='btn-white-solid text-base w-full justify-center inline-flex items-center gap-x-3 mt-2 font-semibold uppercase px-6 pt-3.75 pb-4 cursor-pointer'
									type='submit'
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</section> */}
		</>
	);
}

export default Home;
