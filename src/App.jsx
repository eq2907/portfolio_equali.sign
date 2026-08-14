import './style.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import { initButtonEffect } from './utils/buttonEffect';
import { initScrollAnimate } from './utils/scrollAnimate';
import NotFound from './components/NotFound';

function AppContent() {
	const [preloaderDone, setPreloaderDone] = useState(false);
	const location = useLocation();
	const handleScroll = (id) => {
		const blockAlignment = id === 'about' ? 'center' : 'start';
		const targetId = id === 'get-in-touch' ? 'footer-write-email' : id;
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: blockAlignment });
			if (id === 'get-in-touch') {
				element.classList.add('highlight-text-shadow');
				setTimeout(() => element.classList.remove('highlight-text-shadow'), 3500);
			}
		} else {
			setTimeout(() => {
				const retryElement = document.getElementById(targetId);
				if (retryElement) {
					retryElement.scrollIntoView({ behavior: 'smooth', block: blockAlignment });
					if (id === 'get-in-touch') {
						retryElement.classList.add('highlight-text-shadow');
						setTimeout(() => retryElement.classList.remove('highlight-text-shadow'), 3500);
					}
				}
			}, 100);
		}
	};

	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}
	}, []);

	useEffect(() => {
		// Initialize button and scroll animations whenever the location changes
		initButtonEffect();
		if (preloaderDone) {
			setTimeout(() => {
				initScrollAnimate();
			}, 0.4);
		}
	}, [location, preloaderDone]);

	return (
		<>
			<Preloader onComplete={() => setPreloaderDone(true)} />
			<Nav handleScroll={handleScroll} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/work' element={<Work />} />
				<Route path='/work/:slug' element={<WorkDetail />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
}

export default App;
