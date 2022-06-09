import React from 'react';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

const Section = styled.section`
	margin-top: 50px;
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	@media (min-width: 820px) {
		flex-direction: row;
	}
`;

const Image = styled.img`
	width: 200;
	height: 200;
	border-radius: 100%;
	border: 4px solid #f8f9fa;
	margin-bottom: 30px;
`;

const H1 = styled.h1`
	width: 200px;
	text-align: center;

	@media (min-width: 820px) {
		width: 400px;
	}
`;

export const Profile: React.FC = () => {
	return (
		<Section>
			<Image src="/images/profile.png" />
			<H1 style={{ color: ColorDark.WHITE }}>Olá! É otimo em ver você aqui</H1>
		</Section>
	);
};
