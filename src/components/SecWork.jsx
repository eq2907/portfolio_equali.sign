import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Portfolio({ title, subtitle, description, image, linkWork, imageOrder = 2, textOrder = 1 }) {

	return (
		<div className='portfolio-card h-svh w-full bg-white'>
			<div className='grid grid-cols-1 md:grid-cols-2 h-svh'>
				<div style={{ order: textOrder }} className='bg-white flex flex-col justify-center h-full font-hanken text-center p-8 lg:p-16'>
					<div className='self-center'>
						<h3 className='text-[#665B53] text-center uppercase text-sm mb-3'>{subtitle}</h3>
						<h2 className='text-center uppercase font-semibold text-4xl lg:text-5xl mb-4'>{title}</h2>
						<p className='max-w-[466px] text-center text-base leading-[1.8] text-secondary-foreground/70 mx-auto mb-4'>{description}</p>
						<a className='btn-outline inline-flex text-xs items-center gap-x-3 mt-2 font-semibold uppercase px-4 pt-[10px] pb-2' href={linkWork} target="_blank" rel="noopener noreferrer">
							<span className='self-center'>View Case Study</span>
							<svg className='self-center' width='9' height='9' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M0.5 6.5L6.5 0.5M6.5 5.9V0.5H1.1' stroke='#333333' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</a>
					</div>
				</div>
				<div style={{ order: imageOrder }} className='w-full h-full min-h-[350px] md:min-h-full'>
					<img className='w-full h-full object-cover' src={image} alt={title} />
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
				borderRadius: '20px',
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