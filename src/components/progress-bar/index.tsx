import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

interface SizeBar {
	size: number;
}

interface ProgressBarProps {
	size: number;
	name: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: ${ColorDark.WHITE};
	margin-bottom: 30px;
`;

const BarContainer = styled.div`
	width: 300px;
	height: 30px;
	margin-top: 5px;
	background-color: ${ColorDark.SEMI_DARK};
	border-radius: 5px;
	display: flex;
	justify-content: start;
	align-items: center;
`;

const Progress = styled.div<SizeBar>`
	width: ${({ size }) => size + 'px'};
	height: 30px;
	background-color: ${ColorDark.SUPER_DARK};
	border-radius: 5px;
`;

const SkilsContainer = styled.div`
	margin: 40px 0 40px 0;
	width: 100%;
	max-width: 1000px;
`;

const Title = styled.h2`
	margin-left: 20px;
	color: ${ColorDark.WHITE};
	margin-bottom: 20px;
`;

const ProgressBarContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: 820px) {
		padding: 10px;
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({ name, size }) => {
	const [percent, setPercent] = useState(0);
	useEffect(() => {
		setPercent((300 * size) / 100);
	}, [size]);

	return (
		<Container>
			<div>
				{name} - {size}%
				<BarContainer>
					<Progress size={percent} />
				</BarContainer>
			</div>
		</Container>
	);
};

export const Skils: React.FC = () => {
	return (
		<SkilsContainer>
			<Title>Minhas skils</Title>
			<ProgressBarContainer>
				<ProgressBar name="Javascript" size={90} />
				<ProgressBar name="React.js" size={80} />
				<ProgressBar name="Node.js" size={86} />
				<ProgressBar name="Bash" size={60} />
			</ProgressBarContainer>
		</SkilsContainer>
	);
};
