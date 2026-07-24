function Portfolio({ title, subtitle, description, image, linkWork }) {

	return (
		<section className='mb-8'>
			<div className='w-3/4 mx-auto'>
				<img className='rounded-xl shadow-lg border border-white/20' src={image} alt={title} />
			</div>
			<div className='text-center mt-4'>
				<h3 className='text-center font-hanken uppercase text-base mb-1'>{title}</h3>
				<h2 className='text-center font-bodoni text-5xl mb-2'>{subtitle}</h2>
				<p className='text-center font-hanken text-base text-secondary-foreground/70 max-w-xl mx-auto mb-2'>{description}</p>
				<a className='inline-block mt-2 font-medium text-primary hover:underline' href={linkWork}>View Case Study &rarr;</a>
			</div>
		</section>
	)
}

export { Portfolio }