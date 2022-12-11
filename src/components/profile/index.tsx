import React from 'react';

import { H1, Image, Section } from './style';

export const Profile: React.FC = () => {
	return (
		<Section>
			<Image src="/images/profile.png" />
			<H1>Olá! É ótimo em ver você aqui</H1>
		</Section>
	);
};
