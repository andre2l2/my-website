import styled from 'styled-components';

import { ColorDark } from '@/infra/utils/color.enum';

export const HeaderContainer = styled.header`
	width: 100%;
	background-color: ${ColorDark.SEMI_DARK};
`;

export const DivContainer = styled.div`
	height: 50;
	width: 90%;
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
`;

export const DivMobileContainer = styled.div`
	@media (min-width: 820px) {
		display: none;
	}

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const DivDescktopContainer = styled.div`
	@media (max-width: 820px) {
		display: none;
	}

	width: 200px;
	display: flex;
	justify-content: space-between;
`;

export const Link = styled.a`
	font-size: 20px;
	padding: 5px;
	cursor: pointer;
	color: ${ColorDark.SUPER_DARK};
`;
