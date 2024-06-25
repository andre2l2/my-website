import React from 'react';

import { Title } from '@/components/atoms/title';
import { Image, Section } from './style';

export const Profile: React.FC = () => {
	return (
		<Section>
			<Image src="/images/profile.png" width={200} height={200} />
			<Title type="h1">Olá! É ótimo ver você aqui</Title>
		</Section>
	);
};
