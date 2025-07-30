import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Fadil Bantan - Software Engineer',
	description:
		'From REST to React, I build scalable solutions that don’t break on Monday morning.',
	keywords: [
		'Backend Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Fadil Bantan',
		'Node.js',
		'Python',
		'Java',
		'Distributed Systems',
		'System Design',
		'Backend Architecture',
	],
	authors: [{ name: 'Fadil Bantan' }],
	creator: 'Fadil Bantan',
	openGraph: {
		title: 'Fadil Bantan - Software Engineer',
		description: 'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		siteName: 'Build With Bantan',
		url: 'https://builtbybantan.com',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Fadil Bantan - Software Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Fadil Bantan - Software Engineer',
		description: 'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		creator: '@fadelbantan',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
