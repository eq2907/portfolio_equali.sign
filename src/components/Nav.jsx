import { Link } from 'react-router-dom';
import siteConfig from '../utils/siteConfig';

function Nav() {
	const { nameParts, nav, navCta } = siteConfig;

	return (
		<header className='w-full fixed left-0 top-6 z-1030'>
			<div className='container mx-auto'>
				<div className='glass font-hanken py-3 px-8 rounded-full'>
					<div className='flex justify-between'>
						<Link className='font-medium text-xl self-center' to='/'>
							{nameParts.before}
							<span className='text-primary'>{nameParts.accent}</span>
							{nameParts.after}
						</Link>
						<nav className='flex gap-x-6 [&_a]:uppercase [&_a]:font-medium [&_a]:text-base [&_a]:self-center'>
							{nav.map((item) => (
								<Link key={item.label} to={item.to}>{item.label}</Link>
							))}
							<Link to={navCta.to} className='btn-outline px-6 py-2'>
								{navCta.label}
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Nav;
