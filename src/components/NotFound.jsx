import { Link } from 'react-router-dom';

const NotFound = () => {

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
                <div className="font-hanken container mx-auto py-73.5 text-center">
                    <h1 className="text-5xl font-bold mb-4">404 Page Not Found</h1>
                    <p className="text-[#333333] text-lg leading-[1.8] mb-6">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="btn-outline button-effect button--stroke inline-flex text-sm items-center gap-x-3 font-semibold uppercase px-6 pt-2.5 pb-2.5" data-block="button" onClick={() => handleScroll('home')}>
                        <svg className="size-3 relative z-10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span className='button__flair'></span>
                        <span className="self-center relative z-10">Back to Home</span>
                    </Link>
                </div>
                <div className='pointer-events-none absolute -bottom-10 left-0 h-80 w-80 rounded-full bg-primary/30 opacity-50 blur-3xl'></div>
            </div>
        </>
    );
};

export default NotFound;