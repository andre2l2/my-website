import React from 'react';

import { Title } from '@/components/atoms/title';

import { Link, NotFoundCode, Section } from './style';

export const NotFoundPage: React.FC = () => {
	return (
		<Section>
			<NotFoundCode>404</NotFoundCode>
			<Title type="h1">Pagina não encontrada</Title>
			<Link href="/">Voltar</Link>
		</Section>
	);
};
