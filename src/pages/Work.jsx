import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioData } from '../utils/PortfolioData';
import gsap from 'gsap';

// ── Arrow icon shared by buttons ──────────────────────────────────────────
const ArrowIcon = () => (
    <svg className='self-center relative z-10' width='9' height='9' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M0.5 6.5L6.5 0.5M6.5 5.9V0.5H1.1' stroke='#333333' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
);

function Work() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [displayedData, setDisplayedData] = useState(PortfolioData);
    const gridRef = useRef(null);
    const isAnimating = useRef(false);
    const isFilterAction = useRef(false);

    const categories = ['All', ...new Set(PortfolioData.map((item) => item.subtitle))];

    const handleCategoryChange = (category) => {
        if (category === activeCategory || isAnimating.current) return;

        const nextData = category === 'All'
            ? PortfolioData
            : PortfolioData.filter((item) => item.subtitle === category);

        isAnimating.current = true;
        isFilterAction.current = true;

        const cards = gridRef.current?.querySelectorAll('.portfolio-card');

        // Fade out current cards
        gsap.to(cards, {
            opacity: 0,
            y: 20,
            duration: 0.25,
            stagger: 0.04,
            ease: 'power3.in',
            onComplete: () => {
                // Swap data & category
                setActiveCategory(category);
                setDisplayedData(nextData);
            },
        });
    };

    // Animate in new cards after filter click data swap
    useEffect(() => {
        if (!isFilterAction.current) return;

        const cards = gridRef.current?.querySelectorAll('.portfolio-card');
        if (!cards || cards.length === 0) return;

        gsap.fromTo(
            cards,
            { opacity: 0, y: 24 },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: 0.07,
                ease: 'power3.out',
                onComplete: () => {
                    isAnimating.current = false;
                    isFilterAction.current = false;
                },
            }
        );
    }, [displayedData]);

    return (
        <div className='pt-40 pb-8 lg:pb-14' id='work'>
            <div className='container mx-auto'>
                <h3 className='text-[#665B53] font-hanken font-semibold uppercase text-sm mb-3'>Discover work</h3>
                <h1 className='text-5xl lg:text-6xl leading-[1.2]'>
                    <span className='font-hanken font-semibold uppercase block'>Every project,</span>
                    <span className='font-bodoni italic block'><span className='text-primary'>Up close.</span></span>
                </h1>
                <p className='font-hanken max-w-2xl font-normal mt-8 text-xl leading-[1.8]'>Browse the full catalog of front-end work — filter by category or search by tech to find something that matches what you're building.</p>
                <div className='filter-work my-8'>
                    <ul className='flex gap-4 [&_li]:font-hanken [&_li]:text-lg [&_li]:cursor-pointer'>
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className={activeCategory === category ? 'font-semibold active' : ''}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div ref={gridRef} className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 lg:mb-28'>
                    {displayedData.map((item, index) => (
                        <div className='portfolio-card bg-white/60 rounded-2xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-shadow duration-300 flex flex-col h-full' key={item.slug ?? index}>
                            <figure className='flex flex-col h-full relative group'>
                                <Link to={`/work/${item.slug}`} className="block overflow-hidden shrink-0 relative" style={{ backgroundColor: item.heroBgColor }}>
                                    {(item.associatedImg || item.associatedName) && (
                                        <div className='glass rounded-full object-contain inline-flex gap-2.5 pr-4.5 pl-1 py-1 absolute top-4 lg:top-8 left-3 lg:left-6 z-10'>
                                            {item.associatedImg && <img className='w-6 h-6 object-contain rounded-full' src={item.associatedImg} alt={item.title} loading='lazy' decoding='async' />}
                                            {item.associatedName && <span className='font-hanken font-semibold text-secondary-foreground uppercase text-xs lg:text-sm self-center'>{item.associatedName}</span>}
                                        </div>
                                    )}
                                    <img className='w-full aspect-4/3 object-cover group-hover:scale-105 transition-all duration-300' src={item.image} alt={item.title} loading='lazy' decoding='async' />
                                </Link>
                                <figcaption className='flex-1 flex flex-col justify-between pt-6 px-8 pb-8'>
                                    <div>
                                        <h3 className='text-[#665B53] uppercase text-xs mb-1.5'>{item.subtitle}</h3>
                                        <h2 className='font-semibold uppercase text-xl lg:text-2xl mb-2'>{item.title}</h2>
                                        <p className='font-hanken font-normal my-2 text-base leading-[1.8] line-clamp-3'>{item.description}</p>
                                        <ul className='flex flex-wrap gap-2 mt-4 mb-4'>
                                            {(Array.isArray(item.label) ? item.label : []).map((label, i) => (
                                                <li className='glass font-hanken font-semibold text-secondary-foreground uppercase rounded-full px-3 py-1 text-xs' key={i}>{label}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='mt-auto pt-2'>
                                        <Link
                                            className="btn-outline button-effect button--stroke inline-flex text-sm items-center gap-x-3 font-semibold uppercase px-6 pt-2.5 pb-2.5"
                                            data-block="button"
                                            to={`/work/${item.slug}`}
                                        >
                                            <span className='button__flair'></span>
                                            <span className="self-center relative z-10">View Case Study</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
