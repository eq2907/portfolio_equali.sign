import './style.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';

// Scrolls to the top instantly on every route change
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	}, [pathname]);
	return null;
}

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/work' element={<Work />} />
				<Route path='/work/:slug' element={<WorkDetail />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
