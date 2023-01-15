import { ColorDark } from '@/infra/utils/color.enum';
import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const NotFoundCode = styled.div`
	font-size: 128px;
	color: ${ColorDark.WHITE};
`;

export const Link = styled.a`
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
