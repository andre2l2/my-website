import React from 'react';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

const MainContainer = styled.main`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${ColorDark.DARK};
`;

export const Main: React.FC = ({ children }) => {
	return <MainContainer>{children}</MainContainer>;
};
