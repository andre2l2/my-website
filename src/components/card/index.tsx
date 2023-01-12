import React, { useState } from 'react';

import { CardContainer, Center, H2, Image, P, Section } from './style';

export const Card: React.FC = () => {
	const [cardInfos] = useState([
		{
			imageUrl: 'https://github.com/andre2l2/travel-world/raw/master/images/demo.gif',
			link: 'https://github.com/andre2l2/travel-world',
			name: 'Travel World - Website',
		},
		{
			imageUrl: 'https://github.com/andre2l2/mntn/raw/master/public/example-2.gif',
			link: 'https://github.com/andre2l2/mntn',
			name: 'MNTN - Website',
		},
		{
			imageUrl: 'https://github.com/andre2l2/contact-us/raw/master/public/demo.png',
			link: 'https://github.com/andre2l2/contact-us',
			name: 'Contact Us - Website',
		},
		{
			imageUrl: 'https://github.com/andre2l2/CalculatorWeb/raw/master/img/demo.gif',
			link: 'https://github.com/andre2l2/CalculatorWeb',
			name: 'Web Calculator - Website',
		},
		{
			imageUrl: 'https://github.com/andre2l2/colors/raw/master/img/demo.gif',
			link: 'https://github.com/andre2l2/colors',
			name: 'Color-Efect - Tutorial',
		},
	]);

	return (
		<Section>
			<H2>Meu Trabalho</H2>
			<Center>
				{cardInfos.map((info) => (
					<CardContainer href={info.link} target="_blank">
						<Image src={info.imageUrl} alt={info.name} width={298} height={170} />
						<P>{info.name}</P>
					</CardContainer>
				))}
			</Center>
		</Section>
	);
};
