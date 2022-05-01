import React, { Fragment } from 'react';
import styled from 'styled-components';

import { HeadMolecules } from '../components/molecules/head/head.molecules';
import { HeaderMolecules } from '../components/molecules/header/header.molecules';
import { MainMolecules } from '../components/molecules/main/main.molecules';
import { FooterMolecules } from '../components/molecules/footer/footer.molecules';

const HomePage = styled.section`
	height: 100vh;
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

const IndexPage: React.FC = () => {
	return (
		<Fragment>
			<HeadMolecules />
			<HomePage>
				<HeaderMolecules />
				<MainMolecules />
				<FooterMolecules />
			</HomePage>
		</Fragment>
	);
};

export default IndexPage;
