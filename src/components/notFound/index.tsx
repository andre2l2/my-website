import React from 'react';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const NotFoundCode = styled.div`
	font-size: 128px;
	color: ${ColorDark.WHITE};
`;

const H1 = styled.h1`
	color: ${ColorDark.WHITE};
`;

const Link = styled.a`
	width: 140px;
	border-radius: 10px;
	padding: 15px;
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${ColorDark.WHITE};
	color: ${ColorDark.DARK};
`;

export const NotFoundPage: React.FC = () => {
	return (
		<Section>
			<NotFoundCode>404</NotFoundCode>
			<H1>Pagina não encontrada</H1>
			<Link href="/">Voltar</Link>
		</Section>
	);
};
