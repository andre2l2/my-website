import React, { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import packageJson from '../package.json';

const Center = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const IndexPage: React.FC = () => {
	return (
		<Fragment>
			<Head>
				<link rel="icon" href="/images/logo.svg" />
				<link rel="manifest" href="/manifest.json"></link>
			</Head>
			<Center>
				<h1>Site in progress... v{packageJson.version}</h1>
				<h2>By Andre Ferreira</h2>
			</Center>
		</Fragment>
	);
};

export default IndexPage;
