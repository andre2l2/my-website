import React from 'react';

import { Header } from '../../atoms/html/header/header.atoms';
import { Link } from '../../atoms/html/link/link.atoms';
import { Img } from '../../atoms/html/img/img.atoms';

export const HeaderMolecules: React.FC = () => {
	return (
		<Header>
			<Link href="#" size="lg">
				Sobre
			</Link>
			<Link href="#" size="lg">
				Contato
			</Link>
			<Link href="#" size="lg">
				<Img src="/images/settings-icon.svg" alt="Icon Settigns" />
			</Link>
		</Header>
	);
};
