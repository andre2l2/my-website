import React from 'react';
import styled from 'styled-components';

import { Link, Img } from '../../atoms';

const Header = styled.header`
	width: 100%;
`;

const Container = styled.div`
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const HeaderMolecules: React.FC = () => {
	return (
		<Header>
			<Container>
				<Link href="#" size="lg">
					Sobre
				</Link>
				<Link href="#" size="lg">
					Contato
				</Link>
				<Link href="#" size="lg" position="center">
					<Img src="/images/settings-icon.svg" alt="Icon Settigns" />
				</Link>
			</Container>
		</Header>
	);
};
