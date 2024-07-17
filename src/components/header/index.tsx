import Image from 'next/image';
import React from 'react';

import { DivContainer, DivDescktopContainer, HeaderContainer, Link } from './style';

export const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<DivContainer>
				<Image src="/images/icon.svg" width={40} height={40} alt="here.svg" />
				<DivDescktopContainer>
					<Link href="#about">Sobre</Link>
					<Link href="#social">Contato</Link>
				</DivDescktopContainer>
			</DivContainer>
		</HeaderContainer>
	);
};
