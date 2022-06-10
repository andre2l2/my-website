import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';
import * as packageJson from '../../../package.json';

const FooterContainer = styled.footer`
	height: 150px;
	background-color: ${ColorDark.SEMI_DARK};
`;

const DivContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Infos = styled.div`
	margin: 10px 0 0 0;
`;

export const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<DivContainer>
				<Image src="/images/rocket.svg" width={40} height={40} />
				<Infos>{packageJson.author.name}</Infos>
				<Infos>{packageJson.author.email}</Infos>
				<Infos>v{packageJson.version}</Infos>
			</DivContainer>
		</FooterContainer>
	);
};
