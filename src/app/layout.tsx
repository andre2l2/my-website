import type { Metadata, Viewport } from 'next';
import { DM_Sans, Instrument_Serif } from 'next/font/google';

import { jsonLd, site } from '@/lib/site';

import './globals.css';

const sans = DM_Sans({
	subsets: ['latin'],
	variable: '--font-dm-sans',
});

const serif = Instrument_Serif({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-instrument',
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: site.title,
		template: `%s | ${site.name}`,
	},
	description: site.description,
	keywords: [...site.keywords],
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: site.locale,
		url: site.url,
		siteName: site.name,
		title: site.title,
		description: site.description,
	},
	twitter: {
		card: 'summary',
		title: site.title,
		description: site.description,
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: '/images/icon.svg',
		apple: '/images/icon.svg',
	},
	manifest: '/manifest.json',
};

export const viewport: Viewport = {
	themeColor: '#08090c',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}>
			<body className="w-full max-w-full overflow-x-hidden font-sans antialiased">
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				{children}
			</body>
		</html>
	);
}
