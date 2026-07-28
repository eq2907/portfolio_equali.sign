const Work = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-20 mb-14'>
                <h3 className='text-[#665B53] font-hanken font-semibold uppercase text-sm mb-3'>Discover work</h3>
                <h1 className='text-6xl leading-18'>
                    <span className='font-hanken font-semibold uppercase block'>Every project,</span>
                    <span className='font-bodoni italic block'><span className='text-primary'>Up close.</span></span>
                </h1>
                <p className='font-hanken max-w-2xl font-normal mt-8 text-xl leading-[1.8]'>Browse the full catalog of front-end work — filter by category or search by tech to find something that matches what you're building.</p>
                <div className='filter-work mt-8'>
                    <ul className='flex gap-4 [&_li]:font-hanken [&_li]:text-lg [&_li]:cursor-pointer'>
                        <li className='active'>All</li>
                        <li>Web Design</li>
                        <li>UI/UX Design</li>
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>Fullstack Development</li>
                    </ul>
                </div>
            </div>



            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-28'>
                <div className='grid gap-4'>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' alt='' />
                    </div>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' alt='' />
                    </div>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' alt='' />
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' alt='' />
                    </div>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' alt='' />
                    </div>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' alt='' />
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' alt='' />
                    </div>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' alt='' />
                    </div>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg' alt='' />
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg' alt='' />
                    </div>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg' alt='' />
                    </div>
                    <div>
                        <img className='h-auto max-w-full rounded-base' src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg' alt='' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Work;