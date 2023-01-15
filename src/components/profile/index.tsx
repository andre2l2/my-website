import React from 'react';

import { Title } from '@/components/atoms/title';
import { Image, Section } from './style';

export const Profile: React.FC = () => {
	return (
		<Section>
			<Image src="/images/profile.png" />
			<Title type="h1">Olá! É ótimo em ver você aqui</Title>
		</Section>
	);
};
