'use client';

import HeroSection from './components/HeroSection';
import SystemArchitecture from './components/SystemArchitecture';
// import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';
import ScrollDownIndicator from './components/ScrollDownIndicator';


export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<SystemArchitecture />
			{/* <TechnicalMetrics /> */}
			<ContactSection />
			<ScrollDownIndicator /> 
		</main>
	);
}
