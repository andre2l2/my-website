import Link from 'next/link';
import React from 'react';

import { H1, NotFoundCode, Section } from './style';

export const NotFoundPage: React.FC = () => {
	return (
		<Section>
			<NotFoundCode>404</NotFoundCode>
			<H1>Pagina não encontrada</H1>
			<Link href="/">Voltar</Link>
		</Section>
	);
};
