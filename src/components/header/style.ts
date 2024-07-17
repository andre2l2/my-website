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

export const DivDescktopContainer = styled.div`
	@media (max-width: 820px) {
		width: 150px;
	}

	width: 200px;
	display: flex;
	justify-content: space-between;

	a {
		position: relative;

		&::after {
			background-color: ${ColorDark.DARK};
			position: absolute;

			bottom: 0;
			left: 0;
			content: '';

			height: 4px;
			width: 0%;
			border-radius: 20px;
			transition: 0.3s;
		}

		&:hover::after {
			width: 100%;
		}
	}
`;

export const Link = styled.a`
	font-size: 20px;
	padding: 5px;
	cursor: pointer;
	color: ${ColorDark.SUPER_DARK};
`;
