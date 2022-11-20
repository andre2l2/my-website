import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

const Section = styled.section`
	width: 100%;
	max-width: 1000px;
	margin: 40px 0 40px 0;
`;

const H2 = styled.h2`
	margin-left: 20px;
	margin-bottom: 20px;
	color: ${ColorDark.WHITE};
`;

const ContainerMain = styled.div`
	@media (min-width: 820px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const ContainerSocial = styled.a`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 20px;
`;

const Span = styled.span`
	font-size: 20px;
	margin-left: 20px;
	color: ${ColorDark.WHITE};
`;

export const Social: React.FC = () => {
	return (
		<Section id="social">
			<H2>Outras reders:</H2>
			<ContainerMain>
				<ContainerSocial href="https://github.com/andre2l2" target="_blank">
					<Image src="/images/github.svg" width={60} height={60} />
					<Span>andre2l2</Span>
				</ContainerSocial>
				<ContainerSocial href="https://www.linkedin.com/in/andre-ferreira-37180318b/" target="_blank">
					<Image src="/images/linkedin.svg" width={60} height={60} />
					<Span>Andre Ferreira</Span>
				</ContainerSocial>
				<ContainerSocial href="https://twitter.com/andre_2l2" target="_blank">
					<Image src="/images/twitter.svg" width={60} height={60} />
					<Span>andre_2l2</Span>
				</ContainerSocial>
				<ContainerSocial href="https://unsplash.com/@andre_2l2" target="_blank">
					<Image src="/images/unsplash.svg" width={60} height={60} />
					<Span>andre_2l2</Span>
				</ContainerSocial>
			</ContainerMain>
		</Section>
	);
};
