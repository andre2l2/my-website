import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="manifest" href="manifest.json" />
					<link rel="shortcut icon" href="/images/icon.svg" type="image/x-icon" />
					<link rel="apple-touch-icon" href="/images/icon.svg" />
					<meta name="theme-color" content="#212529" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>Andre Ferreira</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
