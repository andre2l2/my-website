import styled from 'styled-components';

import { ColorDark } from '@/infra/utils/color.enum';

export const Section = styled.section`
	margin-top: 80px;
	width: 100%;
	max-width: 1000px;
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: 820px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const DivSection = styled.div`
	margin-bottom: 20px;
	padding: 20px;
`;

export const H2 = styled.h2`
	color: ${ColorDark.WHITE};
	margin-bottom: 20px;
`;

export const P = styled.p`
	text-align: justify;
	line-height: 23px;
	color: ${ColorDark.WHITE};
`;
