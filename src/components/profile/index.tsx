import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

const Section = styled.section`
	margin-top: 100px;
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	@media (min-width: 820px) {
		margin-top: 0;
		height: 60vh;
		flex-direction: row;
	}
`;

const Image = styled.img`
	width: 200;
	height: 200;
	border-radius: 100%;
	border: 4px solid #f8f9fa;
	margin-bottom: 30px;

	@media (min-width: 820px) {
		width: 300px;
		height: 300px;
	}
`;

const H1 = styled.h1`
	width: 200px;
	text-align: center;
	color: ${ColorDark.WHITE};

	@media (min-width: 820px) {
		width: 400px;
	}
`;

export const Profile: React.FC = () => {
	const [text, setText] = useState('Olá! É ótimo em ver você aqui');
	const [texts] = useState([
		'Olá! É ótimo em ver você aqui',
		'Olá! É bom ver você aqui',
		'Bem vindo ao meu site! :)',
		'ベン・ヴィンド isso é bem vindo em Japonês! Eu acho :|',
		'Programador é a máquina que transforma café em código! ',
	]);

	useState(() => {
		setInterval(() => {
			const actualText = texts[Math.trunc(Math.random() * 5)];
			setText(actualText);
		}, 3 * 1000);
	});

	return (
		<Section>
			<Image src="/images/profile.png" />
			<H1>{text}</H1>
		</Section>
	);
};
