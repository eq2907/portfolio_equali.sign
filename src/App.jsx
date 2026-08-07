import './style.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import { initButtonEffect } from './utils/buttonEffect';

function AppContent() {
	const location = useLocation();

	useEffect(() => {
		// Initialize the button effect whenever the location changes
		initButtonEffect();
	}, [location]);

	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/work' element={<Work />} />
				<Route path='/work/:slug' element={<WorkDetail />} />
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
