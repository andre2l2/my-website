import React from 'react';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

interface SizeBar {
	size: number;
}

interface ProgressBarProps {
	size: number;
	name: string;
}

const Container = styled.div``;

const BarContainer = styled.div`
	width: 300px;
	height: 30px;
	background-color: ${ColorDark.SEMI_DARK};
	border-radius: 10px;
	display: flex;
	justify-content: start;
	align-items: center;
`;

const Progress = styled.div<SizeBar>`
	width: ${({ size }) => size + 'px'};
	height: 30px;
	background-color: ${ColorDark.SUPER_DARK};
	border-radius: 10px;
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({ name, size }) => {
	return (
		<Container>
			{name}
			<BarContainer>
				<Progress size={size} />
			</BarContainer>
		</Container>
	);
};

export const Skils: React.FC = () => {
	return (
		<div>
			<h2>ProgressBar</h2>
			<ProgressBar name="Test" size={200} />
		</div>
	);
};
