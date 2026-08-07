import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { PortfolioData } from '../utils/PortfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ── Arrow icon shared by buttons ──────────────────────────────────────────
export const ArrowIcon = () => {
    return (
        <svg className='self-center relative z-10' width='9' height='9' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0.5 6.5L6.5 0.5M6.5 5.9V0.5H1.1' stroke='#333333' strokeLinecap='round' strokeLinejoin='round' />
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
        return <div>Project not found</div>;
    }
    const currentIndex = PortfolioData.findIndex((p) => p.slug === slug);
    const nextProjects = PortfolioData.filter((p) => p.slug !== slug).slice(0, 3);

    return (
        <div className='work-detail'>
            <div className='hero-work h-[80vh] relative overflow-hidden' style={{ backgroundColor: project.heroBgColor }}>
                <figure ref={heroRef} className='w-full h-[80vh]'>
                    <img ref={heroImgRef} className='w-full h-full object-cover' src={project.image} alt={project.title} fetchPriority='high' decoding='async' />
                </figure>
                <div className='absolute bottom-42 left-0 w-full z-10'>
                    <div className='container mx-auto'>
                        <ul className='flex items-center gap-4 mb-6'>
                            <li className='text-white uppercase text-sm glass font-hanken font-semibold rounded-full px-4 py-1 inline-block'>{project.subtitle}</li>
                        </ul>
                        <h1 className='text-white uppercase font-semibold text-4xl lg:text-5xl mb-6'>{project.title}</h1>
                        <p className='text-white font-hanken max-w-2xl font-normal text-xl leading-[1.8]'>{project.shortDescription}</p>
                    </div>
                </div>
                <div className='w-full h-full bg-linear-to-t from-black/70 to-transparent absolute top-0 left-0 z-9'></div>
            </div>
            <div className='border-b border-[#DDD7CD]'>
                <div className='container mx-auto'>
                    <ul className="grid grid-cols-2 md:grid-cols-5 gap-px">
                        {[
                            { label: 'Client', value: project.client },
                            { label: 'Role', value: project.role },
                            { label: 'Year', value: project.year },
                            { label: 'Duration', value: project.duration },
                            { label: 'Category', value: project.subtitle },
                        ].map((item) => (
                            <li key={item.label} className="py-6 px-6 relative after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-[#DDD7CD] last:after:hidden">
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
                        <div className='col-span-8 [&>div:first-child]:mb-10'>
                            <div>
                                <h3 className='font-hanken text-3xl font-bold mb-4'>Overview</h3>
                                <p className="font-hanken text-base md:text-lg leading-[1.75] text-secondary-foreground">
                                    {project.description}
                                </p>
                                <Link className="btn-outline button-effect button--stroke inline-flex text-sm items-center gap-x-3 mt-6 font-semibold uppercase px-6 pt-2.5 pb-2.5" target="_blank" to={project.liveUrl} data-block="button">
                                    <span className='button__flair'></span>
                                    <span className="self-center relative z-10">View Live Website</span>
                                    <ArrowIcon />
                                </Link>
                            </div>
                            <div>
                                <h3 className='font-hanken text-3xl font-bold mb-4'>Challenges</h3>
                                <ul className='flex flex-col gap-2'>
                                    {(Array.isArray(project.challenge) ? project.challenge : []).map((item, index) => (
                                        <li className='flex items-center gap-4 font-hanken text-base md:text-lg leading-[1.75] text-secondary-foreground' key={index}>
                                            <span className='block h-1.5 w-1.5 bg-primary rounded-full'></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-4'>
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
                <div className='container mx-auto'>
                    <h3 className='font-hanken text-3xl font-bold mb-10'>Other Projects</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {nextProjects.map((nextProject, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => navigate(`/work/${nextProject.slug}`)}
                                className="group w-full text-left cursor-pointer"
                            >
                                <div className="relative overflow-hidden h-[50vh] bg-secondary rounded-2xl">
                                    <img
                                        src={nextProject.image}
                                        alt={nextProject.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a06]/70 to-transparent" />
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className='container mx-auto'>
                                            <div className='flex items-end justify-between'>
                                                <div>
                                                    <ul className='flex items-center gap-4 mb-4'>
                                                        <li className='text-white uppercase text-xs glass font-hanken font-semibold rounded-full px-4 py-1 inline-block'>{nextProject.subtitle}</li>
                                                    </ul>
                                                    <h2 className='text-white uppercase font-semibold text-xl lg:text-2xl mb-6'>{nextProject.title}</h2>
                                                </div>
                                                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 shrink-0 ml-4">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default WorkDetail