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
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
