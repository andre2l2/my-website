import Image from 'next/image';
import React from 'react';

import { author, version } from '../../../package.json';
import { DivContainer, FooterContainer, Infos } from './style';

export const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<DivContainer>
				<Image src="/images/rocket.svg" width={40} height={40} />
				<Infos>{author.name}</Infos>
				<Infos>{author.email}</Infos>
				<Infos>v{version}</Infos>
			</DivContainer>
		</FooterContainer>
	);
};
