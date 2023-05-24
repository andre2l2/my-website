import Image from 'next/image';
import React from 'react';

import packageJson from '../../../package.json';
import { DivContainer, FooterContainer, Infos } from './style';

export const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<DivContainer>
				<Image src="/images/rocket.svg" width={40} height={40} alt="rocket icon" />
				<Infos>{packageJson.author?.name}</Infos>
				<Infos>{packageJson.author?.email}</Infos>
				<Infos>v{packageJson.version}</Infos>
			</DivContainer>
		</FooterContainer>
	);
};
