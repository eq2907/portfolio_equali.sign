import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { PortfolioData } from '../utils/PortfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function WorkDetail() {
    const { slug } = useParams();
    const project = PortfolioData.find((project) => project.slug === slug);

    // Refs for animations
    const heroRef = useRef(null);
    const heroImgRef = useRef(null);

    useEffect(() => {
        if (!project) return;

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
    return (
        <div className='work-detail'>
            <div className='hero-work relative overflow-hidden'>
                <figure ref={heroRef} className=' w-full'>
                    <img ref={heroImgRef} className='w-full h-200 object-cover' src={project.bannerImg} alt={project.title} />
                </figure>
                <div className='absolute top-1/2 left-0 w-full h-full z-10'>
                    <div className='container mx-auto'>
                        <ul className='flex items-center gap-4 mb-6'>
                            <li className='text-white uppercase text-sm glass font-hanken font-semibold rounded-full px-4 py-1 inline-block'>{project.subtitle}</li>
                            <li className='text-white font-hanken font-semibold'>{project.year}</li>
                        </ul>
                        <h1 className='text-white uppercase font-semibold text-4xl lg:text-5xl mb-6'>{project.title}</h1>
                        <p className='text-white font-hanken max-w-2xl font-normal mt-8 text-xl leading-[1.8]'>{project.shortDescription}</p>
                    </div>
                </div>
                <div className='w-full h-full bg-linear-to-t from-black/80 to-transparent absolute top-0 left-0 z-9'></div>
            </div>
            <div className='container mx-auto py-12'>
                <div className='grid grid-cols-12 gap-6'>
                    <div className='col-span-8 [&_div]:mb-12 [&_h2]:mb-4'>
                        <div>
                            <h2 className='font-hanken text-3xl font-bold'>Overview</h2>
                            <p className='text-base leading-[1.8]'>{project.description}</p>
                        </div>
                        <div>
                            <h2 className='font-hanken text-3xl font-bold'>Challenges</h2>
                            <ul className='flex flex-col gap-2'>
                                {(Array.isArray(project.challenge) ? project.challenge : []).map((item, index) => (
                                    <li className='flex items-center gap-4' key={index}>
                                        <span className='block h-1.5 w-1.5 bg-primary rounded-full'></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        asd
                    </div>
                </div>
            </div>
        </div>

    )
}
export default WorkDetail