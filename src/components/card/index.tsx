import Image from 'next/image';
import React, { useState } from 'react';

import { Title } from '@/components/atoms/title';
import { CardContainer, Center, P, Section } from './style';

export const Card: React.FC = () => {
	const [cardInfos] = useState([
		{
			imageUrl: '/images/card/travel-world-demo.gif',
			link: 'https://github.com/andre2l2/travel-world',
			name: 'Travel World - Website',
		},
		{
			imageUrl: '/images/card/mntn-demo.gif',
			link: 'https://github.com/andre2l2/mntn',
			name: 'MNTN - Website',
		},
		{
			imageUrl: '/images/card/contact-us-demo.png',
			link: 'https://github.com/andre2l2/contact-us',
			name: 'Contact Us - Website',
		},
		{
			imageUrl: '/images/card/calculator-web-demo.gif',
			link: 'https://github.com/andre2l2/CalculatorWeb',
			name: 'Web Calculator - Website',
		},
		{
			imageUrl: '/images/card/colors-demo.gif',
			link: 'https://github.com/andre2l2/colors',
			name: 'Color-Efect - Tutorial',
		},
	]);

	return (
		<Section>
			<Title type="h2">Meu Trabalho</Title>
			<Center>
				{cardInfos.map((info, index) => (
					<CardContainer href={info.link} key={index} target="_blank">
						<Image src={info.imageUrl} alt={info.name} width={298} height={170} onLoad={() => <div>Loading</div>} />
						<P>{info.name}</P>
					</CardContainer>
				))}
			</Center>
		</Section>
	);
};
