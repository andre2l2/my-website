import { ColorDark } from '@/infra/utils/color.enum';
import styled from 'styled-components';

export type SocialProps = {
	showTitle?: boolean;
};

export const Section = styled.section`
	width: 100%;
	max-width: 1000px;
	margin: 40px 0 40px 0;
`;

export const ContainerMain = styled.div`
	@media (min-width: 820px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const ContainerSocial = styled.a`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 20px;
`;

export const Span = styled.span`
	font-size: 20px;
	margin-left: 20px;
	color: ${ColorDark.WHITE};
`;
