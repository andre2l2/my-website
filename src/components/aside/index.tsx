import React from 'react';

import { AsideContainer, DivLinkContainer, Link } from './style';

export const Aside: React.FC = () => {
	return (
		<AsideContainer>
			<DivLinkContainer>
				<Link href="#about">Sobre</Link>
			</DivLinkContainer>
			<DivLinkContainer>
				<Link href="#social">Contato</Link>
			</DivLinkContainer>
		</AsideContainer>
	);
};
