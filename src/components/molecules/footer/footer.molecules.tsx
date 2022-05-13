import React from 'react';

import packageJson from '../../../../package.json';
import { Title } from '../../atoms';
import { Center } from '../../atoms/css/center.atons';

export const FooterMolecules: React.FC = () => {
	return (
		<Center type="column">
			<Title type="h3">v{packageJson.version}</Title>
			<Title type="h4">By Andre Ferreira</Title>
		</Center>
	);
};
