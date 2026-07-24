function Portfolio({ title, subtitle, description, image, linkWork }) {

	return (
		<section className='portfolio-card min-h-screen w-full bg-white relative border-t border-t-[#DDD7CD]'>
			<div className='grid grid-cols-1 md:grid-cols-2 border-b border-b-[#DDD7CD] min-h-screen'>
				<div className='bg-white flex flex-col justify-center h-full font-hanken text-center p-8 lg:p-16'>
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
				<div className='w-full h-full min-h-[350px] md:min-h-full'>
					<img className='w-full h-full object-cover' src={image} alt={title} />
				</div>
			</div>
		</section>
	)
}

export { Portfolio }