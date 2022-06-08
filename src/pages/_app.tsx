import React from 'react';
import Head from 'next/head';

import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/images/icon.svg" type="image/x-icon" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Andre Ferreira</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
