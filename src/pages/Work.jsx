import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioData } from '../utils/PortfolioData';

// ── Arrow icon shared by buttons ──────────────────────────────────────────
const ArrowIcon = () => (
    <svg className='self-center relative z-10' width='9' height='9' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M0.5 6.5L6.5 0.5M6.5 5.9V0.5H1.1' stroke='#333333' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
);

function Work() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(PortfolioData.map((item) => item.subtitle))];

    const filteredData = activeCategory === 'All'
        ? PortfolioData
        : PortfolioData.filter((item) => item.subtitle === activeCategory);

    return (
        <div className='pt-40 pb-14' id='work'>
            <div className='container mx-auto'>
                <h3 className='text-[#665B53] font-hanken font-semibold uppercase text-sm mb-3'>Discover work</h3>
                <h1 className='text-6xl leading-18'>
                    <span className='font-hanken font-semibold uppercase block'>Every project,</span>
                    <span className='font-bodoni italic block'><span className='text-primary'>Up close.</span></span>
                </h1>
                <p className='font-hanken max-w-2xl font-normal mt-8 text-xl leading-[1.8]'>Browse the full catalog of front-end work — filter by category or search by tech to find something that matches what you're building.</p>
                <div className='filter-work my-8'>
                    <ul className='flex gap-4 [&_li]:font-hanken [&_li]:text-lg [&_li]:cursor-pointer'>
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className={activeCategory === category ? 'active' : ''}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-28'>
                    {filteredData.map((item, index) => (
                        <div className='bg-white/60 rounded-2xl overflow-hidden hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-all duration-300 flex flex-col h-full' key={index}>
                            <figure className='flex flex-col h-full'>
                                <Link to={`/work/${item.slug}`} className="block overflow-hidden shrink-0" style={{ backgroundColor: item.heroBgColor }}>
                                    <img className='w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-500 ease-out' src={item.image} alt={item.title} loading='lazy' decoding='async' />
                                </Link>
                                <figcaption className='flex-1 flex flex-col justify-between pt-6 px-8 pb-8'>
                                    <div>
                                        <h3 className='text-[#665B53] uppercase text-xs mb-1.5'>{item.subtitle}</h3>
                                        <h2 className='font-semibold uppercase text-xl lg:text-2xl mb-2'>{item.title}</h2>
                                        <p className='font-hanken font-normal my-2 text-base leading-[1.8] line-clamp-3'>{item.description}</p>
                                        <ul className='flex flex-wrap gap-2 mt-4 mb-4'>
                                            {(Array.isArray(item.label) ? item.label : []).map((label, index) => (
                                                <li className='glass font-hanken font-semibold text-secondary-foreground uppercase rounded-full px-3 py-1 text-xs' key={index}>{label}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='mt-auto pt-2'>
                                        <Link
                                            className="btn-outline button-effect button--stroke inline-flex text-sm items-center gap-x-3 font-semibold uppercase px-6 pt-2.5 pb-2.5" data-block="button"
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
