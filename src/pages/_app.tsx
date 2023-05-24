import Head from 'next/head';

import './main.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="manifest" href="manifest.json" />
				<link rel="shortcut icon" href="/images/icon.svg" type="image/x-icon" />
				<meta name="theme-color" content="#212529" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Andre Ferreira</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
