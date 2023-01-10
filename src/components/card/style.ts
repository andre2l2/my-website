import styled from 'styled-components';

import { ColorDark } from '@/infra/utils/color.enum';

export const Section = styled.section`
	width: 100%;
	max-width: 1000px;
	margin: 40px 0 40px 0;
`;

export const Center = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 820px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 930px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const H2 = styled.h2`
	margin-left: 20px;
	margin-bottom: 20px;
	color: ${ColorDark.WHITE};
`;

export const P = styled.p`
	font-size: 15px;
	margin-top: 4px;
	color: ${ColorDark.WHITE};
`;

export const CardContainer = styled.a`
	display: block;
	margin: 10px auto;
	cursor: pointer;
`;

export const Image = styled.img`
	border-radius: 10px;
`;
