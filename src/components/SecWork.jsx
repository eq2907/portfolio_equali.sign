import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Portfolio({ title, subtitle, description, image, linkWork, label, imageOrder = 2, textOrder = 1, slug }) {

	return (
		<div className='portfolio-card lg:h-[60vh] 2xl:h-[70vh] w-full bg-white'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:h-[60vh] 2xl:h-[70vh]'>
				<div style={{ order: textOrder }} className='bg-white flex flex-col justify-center h-full font-hanken text-center p-8 lg:p-16'>
					<div className='self-center'>
						<h3 className='text-[#665B53] text-center uppercase text-sm mb-3'>{subtitle}</h3>
						<h2 className='text-center uppercase font-semibold text-4xl lg:text-5xl mb-4'>{title}</h2>
						<p className='max-w-md text-center text-base leading-[1.8] text-secondary-foreground/70 mx-auto mb-4'>{description}</p>
						<Link className='btn-outline inline-flex text-sm items-center gap-x-3 mt-2 font-semibold uppercase px-6 pt-2.5 pb-2.5' to={slug ? `/work/${slug}` : linkWork}>
							<span className='self-center'>View Case Study</span>
							<svg className='self-center' width='9' height='9' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M0.5 6.5L6.5 0.5M6.5 5.9V0.5H1.1' stroke='#333333' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</Link>
					</div>
				</div>
				<div style={{ order: imageOrder }} className='w-full h-full min-h-87.5 md:min-h-full relative'>
					<img className='w-full h-full object-cover' src={image} alt={title} />
					<div className='absolute bottom-8 right-8'>
						<ul className='flex gap-3'>
							{(Array.isArray(label) ? label : []).map((item, index) => (
								<li className='glass font-hanken font-semibold text-secondary-foreground uppercase rounded-full px-4 py-1 text-sm' key={index}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

function StackedPortfolio({ items }) {
	const wrapperRef = useRef(null)

	useGSAP(() => {
		const cards = gsap.utils.toArray('.stack-card', wrapperRef.current)
		const totalCards = cards.length

		cards.forEach((card, i) => {
			// All cards except the last one scale down as the next card scrolls over
			if (i === totalCards - 1) return

			// Each buried card shrinks a little more — creates the depth stack feel
			const scaleEnd = 1 - (totalCards - 1 - i) * 0.045

			gsap.to(card, {
				scale: scaleEnd,
				ease: 'none',
				scrollTrigger: {
					trigger: card,
					start: 'top top',
					// Each card's scroll distance equals one card-height worth of scrolling
					end: () => `+=${card.offsetHeight}`,
					scrub: 0.5,
				},
			})
		})
	}, { scope: wrapperRef })

	return (
		<div ref={wrapperRef} className='stacked-cards-wrapper'>
			{items.map((item, index) => (
				<div
					key={index}
					className='stack-card'
					style={{
						position: 'sticky',
						top: 0,
						transformOrigin: 'top center',
						zIndex: index + 1,
						overflow: 'hidden',
						willChange: 'transform',
					}}
				>
					<Portfolio {...item} />
				</div>
			))}
		</div>
	)
}

export { Portfolio, StackedPortfolio }