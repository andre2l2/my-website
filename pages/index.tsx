import React, { Fragment } from 'react';
import styled from 'styled-components';
import packageJson from '../package.json';

import { Title } from '../components/atoms/html/title/title.atoms';
import { Link } from '../components/atoms/html/link/link.atoms';
import { HeadMolecules } from '../components/molecules/head/head.molecules';
import { HeaderMolecules } from '../components/molecules/header/header.molecules';

const Center = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const IndexPage: React.FC = () => {
	return (
		<Fragment>
			<HeadMolecules />
			<HeaderMolecules />
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
