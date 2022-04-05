import React from 'react';
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
		<Center>
			<h1>Site in progress... v{packageJson.version}</h1>
			<h2>By Andre Ferreira</h2>
		</Center>
	);
};

export default IndexPage;
