import styled from 'styled-components';

import { ColorDark } from '@/infra/utils/color.enum';

export const FooterContainer = styled.footer`
	height: 150px;
	background-color: ${ColorDark.SEMI_DARK};
`;

export const DivContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Infos = styled.div`
	margin: 10px 0 0 0;
`;
