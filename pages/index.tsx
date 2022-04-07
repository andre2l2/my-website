import React, { Fragment } from 'react';
import styled from 'styled-components';
import packageJson from '../package.json';

import { HeadOf } from '../components/atoms/next/head.atom';
import { Title } from '../components/atoms/title/title.atoms';
import { Link } from '../components/atoms/link/link.atoms';

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
			<HeadOf>
				<link rel="icon" href="/images/logo.svg" />
				<link rel="manifest" href="/manifest.json"></link>
				<meta property="og:title" content="My-Website" />
				<meta property="og:description" content="" />
				<meta
					property="og:image"
					content="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lookandlearn.com%2Fhistory-images%2Fpreview%2FA%2FA007%2FA007160_Gnu.jpg&f=1&nofb=1"
				></meta>
			</HeadOf>
			<Center>
				<Title type="h1">Site in progress... v{packageJson.version}</Title>
				<Title type="h2">By Andre Ferreira</Title>
				<Link href="https://github.com/andre2l2/my-website" target="_blank">
					Click here to see Github repository
				</Link>
			</Center>
		</Fragment>
	);
};

export default IndexPage;
