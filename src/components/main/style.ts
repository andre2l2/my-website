import styled from 'styled-components';

import { ColorDark } from '@/infra/utils/color.enum';

export const MainContainer = styled.main`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${ColorDark.DARK};
`;
