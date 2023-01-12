import styled from 'styled-components';

import { ColorDark } from '@/infra/utils/color.enum';

export const AsideContainer = styled.aside`
	position: absolute;
	height: 100vh;
	width: 200px;
	padding: 20px;
	background-color: ${ColorDark.SEMI_DARK};

	@media (min-width: 820px) {
		display: none;
	}
`;

export const DivLinkContainer = styled.div`
	padding: 8px;
	font-size: 20px;
	cursor: pointer;
`;

export const Link = styled.a`
	font-size: 20px;
	padding: 5px;
	cursor: pointer;
	color: ${ColorDark.SUPER_DARK};
`;
