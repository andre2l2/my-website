import React from 'react';
import styled from 'styled-components';

import { Header } from '../../atoms/html/header/header.atoms';
import { Link } from '../../atoms/html/link/link.atoms';
import { Img } from '../../atoms/html/img/img.atoms';

const LinksContainer = styled.div`
	width: 350px;
	margin: 0 auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderMolecules: React.FC = () => {
	return (
		<Header>
			<LinksContainer>
				<Link href="#" size="lg">
					Sobre
				</Link>
				<Link href="#" size="lg">
					Contato
				</Link>
				<Link href="#" size="lg" position="center">
					<Img src="/images/settings-icon.svg" alt="Icon Settigns" />
				</Link>
			</LinksContainer>
		</Header>
	);
};
