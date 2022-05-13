import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Title, Link } from '../components/atoms';
import { HeadMolecules } from '../components/molecules/head/head.molecules';

const Container = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	background-color: black;
	color: white;

	h1 {
		margin-bottom: 30px;
	}
`;

const NotFound: React.FC = () => {
	return (
		<Fragment>
			<HeadMolecules />
			<Container>
				<Title type="h1">
					404 <br /> Cara, eu não achei esta pagina!
				</Title>
				<Link href="/" color="black" bgColor="white">
					Voltar
				</Link>
			</Container>
		</Fragment>
	);
};

export default NotFound;
