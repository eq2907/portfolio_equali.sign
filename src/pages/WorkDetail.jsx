import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { PortfolioData } from '../utils/PortfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ── Arrow icon shared by buttons ──────────────────────────────────────────
export const ArrowIcon = () => {
    return (
        <svg className='stroke-[#181009] group-hover:stroke-white self-center relative z-10' width='9' height='9' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0.5 6.5L6.5 0.5M6.5 5.9V0.5H1.1' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
};

gsap.registerPlugin(ScrollTrigger);

function WorkDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = PortfolioData.find((project) => project.slug === slug);

    // Refs for animations
    const heroRef = useRef(null);
    const heroImgRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (!project) return;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        const ctx = gsap.context(() => {
            // Hero parallax
            gsap.to(heroImgRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, [project]);

    if (!project) {
        const handleScroll = (id) => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                setTimeout(() => {
                    const retryElement = document.getElementById(id);
                    if (retryElement) {
                        retryElement.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }, 100);
            }
        };

        return (

            <>
                <div className='relative'>
                    <div className='pointer-events-none absolute -top-10 -right-12 h-80 w-80 rounded-full bg-primary/40 blur-3xl'></div>
                    <div className="container mx-auto py-73.5 text-center">
                        <h1 className="font-hanken text-5xl font-semibold mb-8">Project not found</h1>
                        <Link to="/work" className="btn-outline button-effect button--stroke inline-flex text-sm items-center gap-x-3 font-semibold uppercase px-6 pt-2.5 pb-2.5" data-block="button" onClick={() => handleScroll('work')}>
                            <svg className="size-3 relative z-10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span className='button__flair'></span>
                            <span className="self-center relative z-10">Back to Work</span>
                        </Link>
                    </div>
                    <div className='pointer-events-none absolute -bottom-10 left-0 h-80 w-80 rounded-full bg-primary/30 opacity-50 blur-3xl'></div>
                </div>
            </>
        );
    }

    const nextProjects = PortfolioData.filter((p) => p.slug !== slug);

    return (
        <div className='work-detail'>
            <div className='hero-work h-[80vh] lg:h-[90vh] 2xl:h-[90vh] relative overflow-hidden' style={{ backgroundColor: project.heroBgColor }}>
                <figure ref={heroRef} className='w-full h-[80vh] lg:h-[90vh] 2xl:h-[90vh]'>
                    <img ref={heroImgRef} className='w-full h-full object-cover' src={project.image} alt={project.title} fetchPriority='high' decoding='async' />
                </figure>
                <div className='absolute bottom-42 left-0 w-full z-10'>
                    <div className='container mx-auto'>
                        <ul className='lg:flex lg:flex-row lg:items-center lg:gap-4 mb-6 [&_li]:mb-4 [&_li]:last:mb-0 [&_li]:lg:mb-0'>
                            <li className='text-white uppercase text-sm glass font-hanken font-semibold rounded-full px-4 py-1 inline-block'>{project.subtitle}</li>
                            <li>
                                {(project.associatedImg || project.associatedName) && (
                                    <div className='rounded-full object-contain inline-flex gap-2.5 pr-4.5 pl-1 py-1'>
                                        {project.associatedImg && <img className='w-6 h-6 object-contain rounded-full' src={project.associatedImg} alt={project.title} loading='lazy' decoding='async' />}
                                        {project.associatedName && <span className='font-hanken font-semibold text-white uppercase text-sm self-center'>{project.associatedName}</span>}
                                    </div>
                                )}
                            </li>
                        </ul>
                        <h1 className='text-white uppercase font-semibold text-4xl lg:text-5xl mb-6'>{project.title}</h1>
                        <p className='text-white font-hanken max-w-2xl font-normal text-lg lg:text-xl leading-[1.8]'>{project.shortDescription}</p>
                    </div>
                </div>
                <div className='w-full h-full bg-linear-to-t from-black/80 to-transparent absolute top-0 left-0 z-9'></div>
            </div>
            <div className='border-b border-[#DDD7CD]'>
                <div className="lg:container lg:mx-auto">
                    <ul className="grid grid-cols-2 md:grid-cols-5 gap-px">
                        {[
                            { label: 'Client', value: project.client },
                            { label: 'Role', value: project.role },
                            { label: 'Year', value: project.year },
                            { label: 'Duration', value: project.duration },
                            { label: 'Category', value: project.subtitle },
                        ].map((item) => (
                            <li key={item.label} className="py-6 px-6 relative after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-[#DDD7CD] last:after:hidden before:absolute before:left-0 before:bottom-0 before:h-px before:w-full before:bg-[#DDD7CD] lg:before:hidden last:before:hidden">
                                <div className='flex flex-col justify-center h-full'>
                                    <p className="font-hanken text-xs uppercase text-[#665B53] font-semibold mb-1">{item.label}</p>
                                    <p className="font-hanken text-base font-medium text-secondary-foreground leading-relaxed">{item.value}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mt-12 mb-12'>
                <div className='container pb-12 mx-auto border-b border-[#DDD7CD]'>
                    <div className='grid grid-cols-12 gap-6'>
                        <div className='col-span-12 lg:col-span-8 [&>div:first-child]:mb-10'>
                            <div>
                                <h3 className='font-hanken text-3xl font-bold mb-4'>Overview</h3>
                                <p className="font-hanken text-base md:text-lg leading-[1.75] text-secondary-foreground">
                                    {project.description}
                                </p>
                                <Link className="btn-outline button-effect button--stroke inline-flex text-sm items-center gap-x-3 mt-6 font-semibold uppercase px-6 pt-2.5 pb-2.5 group" target="_blank" to={project.liveUrl} data-block="button">
                                    <span className='button__flair'></span>
                                    <span className="self-center relative z-10">View Live Website</span>
                                    <ArrowIcon />
                                </Link>
                            </div>
                            <div>
                                <h3 className='font-hanken text-3xl font-bold mb-4'>Challenges</h3>
                                <ul className='flex flex-col gap-2'>
                                    {(Array.isArray(project.challenge) ? project.challenge : []).map((item, index) => (
                                        <li className='flex items-start gap-4 font-hanken text-base md:text-lg leading-[1.75] text-secondary-foreground' key={index}>
                                            <span className='block w-1.5 h-1.5 shrink-0 bg-primary rounded-full mt-3'></span>
                                            <p className='flex-1'>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                            <h3 className='font-hanken text-3xl font-bold mb-5'>Tools</h3>
                            <ul className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <li
                                        key={tool}
                                        className="font-hanken text-sm font-semibold uppercase glass rounded-full px-4 py-1.5 text-secondary-foreground"
                                    >
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='work__other mb-24'>
                <div className='container mx-auto flex items-center justify-between mb-6'>
                    <h3 className='font-hanken text-3xl font-bold'>Other Projects</h3>
                    {/* External navigation buttons */}
                    <div className='flex items-center gap-3'>
                        <button
                            type='button'
                            onClick={() => swiperRef.current?.slidePrev()}
                            data-block='button'
                            className='w-11 h-11 cursor-pointer rounded-full border border-[#333333] flex items-center justify-center button-effect button--stroke group text-[#333333] hover:text-white hover:border-secondary-foreground transition-all duration-300'
                        >
                            <span className='button__flair'></span>
                            <svg className='size-3.5 relative z-10' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M13 7H1M1 7L7 1M1 7L7 13' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        </button>
                        <button
                            type='button'
                            onClick={() => swiperRef.current?.slideNext()}
                            data-block='button'
                            className='w-11 h-11 cursor-pointer rounded-full border border-[#333333] flex items-center justify-center button-effect button--stroke group text-[#333333] hover:text-white hover:border-secondary-foreground transition-all duration-300'
                        >
                            <span className='button__flair'></span>
                            <svg className='size-3.5 relative z-10' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M1 7H13M13 7L7 1M13 7L7 13' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={15}
                        rewind={true}
                        speed={600}
                        modules={[Autoplay]}
                        breakpoints={{
                            768: { slidesPerView: 3 },
                            1200: { slidesPerView: 3 },
                            1560: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        {nextProjects.map((nextProject, index) => (
                            <SwiperSlide key={index}>
                                <button
                                    type="button"
                                    onClick={() => navigate(`/work/${nextProject.slug}`)}
                                    className="group w-full block text-left cursor-pointer"
                                >
                                    <div className='relative overflow-hidden bg-secondary rounded-2xl'>
                                        {(nextProject.associatedImg || nextProject.associatedName) && (
                                            <div className='absolute glass rounded-full object-contain inline-flex gap-2.5 pr-4.5 pl-1 py-1 top-4 lg:top-8 left-3 lg:left-6 z-10'>
                                                {nextProject.associatedImg && <img className='w-6 h-6 object-contain rounded-full' src={nextProject.associatedImg} alt={nextProject.title} loading='lazy' decoding='async' />}
                                                {nextProject.associatedName && <span className='font-hanken font-semibold text-secondary-foreground uppercase text-xs lg:text-sm self-center'>{nextProject.associatedName}</span>}
                                            </div>
                                        )}
                                        <img
                                            src={nextProject.image}
                                            alt={nextProject.title}
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                                        />
                                        <div className='absolute inset-0 bg-linear-to-t from-[#0d0a06]/70 to-transparent' />
                                        <div className='absolute bottom-8 left-8 right-8'>
                                            <div className='flex items-end justify-between mb-3'>
                                                <div>
                                                    <ul className='flex items-center gap-4 mb-4'>
                                                        <li className='text-white uppercase text-xs glass font-hanken font-semibold rounded-full px-4 py-1 inline-block'>{nextProject.subtitle}</li>
                                                    </ul>
                                                    <h2 className='text-white uppercase font-semibold text-xl lg:text-2xl leading-[1.4]'>{nextProject.title}</h2>
                                                </div>
                                                <div className="w-10 h-10 lg:w-12 lg:h-12 border border-white rounded-full flex items-center justify-center shrink-0 ml-4 relative overflow-hidden text-white group-hover:text-[#181009] transition-colors duration-300">
                                                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
                                                    <span className="relative z-10 flex items-center justify-center">
                                                        <svg className='size-3 lg:size-3.5' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* <div className=''>
                    <div className='flex w-full gap-2 lg:gap-4 pl-20'>
                        {nextProjects.map((nextProject, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => navigate(`/work/${nextProject.slug}`)}
                                className="group text-left cursor-pointer"
                            >
                                <div className='relative overflow-hidden h-[35vh] lg:h-[50vh] xl:h-[32vh] 2xl:h-[35vh] bg-secondary rounded-2xl'>
                                    {(nextProject.associatedImg || nextProject.associatedName) && (
                                        <div className='absolute glass rounded-full object-contain inline-flex gap-2.5 pr-4.5 pl-1 py-1 top-8 left-3 lg:left-6 z-10'>
                                            {nextProject.associatedImg && <img className='w-6 h-6 object-contain rounded-full' src={nextProject.associatedImg} alt={nextProject.title} loading='lazy' decoding='async' />}
                                            {nextProject.associatedName && <span className='font-hanken font-semibold text-white uppercase text-sm self-center'>{nextProject.associatedName}</span>}
                                        </div>
                                    )}
                                    <img
                                        src={nextProject.image}
                                        alt={nextProject.title}
                                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                                    />
                                    <div className='absolute inset-0 bg-linear-to-t from-[#0d0a06]/70 to-transparent' />
                                    <div className='absolute bottom-8 left-8 right-8'>
                                        <div className='lg:container lg:mx-auto'>
                                            <div className='flex items-end justify-between mb-3'>
                                                <div>
                                                    <ul className='flex items-center gap-4 mb-4'>
                                                        <li className='text-white uppercase text-xs glass font-hanken font-semibold rounded-full px-4 py-1 inline-block'>{nextProject.subtitle}</li>
                                                    </ul>
                                                    <h2 className='text-white uppercase font-semibold text-xl lg:text-2xl leading-[1.4]'>{nextProject.title}</h2>
                                                </div>
                                                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center shrink-0 ml-4 relative overflow-hidden text-white group-hover:text-[#181009] transition-colors duration-300">
                                                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
                                                    <span className="relative z-10 flex items-center justify-center">
                                                        <svg className='size-3.5' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div> */}

            </div>
        </div>

    )
}
export default WorkDetail