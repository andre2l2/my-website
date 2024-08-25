import Image from 'next/image';
import React, { useState } from 'react';

import { Title } from '@/components/atoms/title';
import { CardContainer, Center, P, Section } from './style';

export const Card: React.FC = () => {
	const [cardInfos] = useState([
		{
			imageUrl: '/images/card/travel-world-demo.gif',
			link: 'https://github.com/andre2l2/travel-world',
			name: 'Travel world website',
		},
		{
			imageUrl: '/images/card/mntn-demo.gif',
			link: 'https://github.com/andre2l2/mntn',
			name: 'MNTN website',
		},
		{
			imageUrl: '/images/card/contact-us-demo.png',
			link: 'https://github.com/andre2l2/contact-us',
			name: 'Contact us website',
		},
		{
			imageUrl: '/images/card/calculator-web-demo.gif',
			link: 'https://github.com/andre2l2/CalculatorWeb',
			name: 'Web Calculator - Website',
		},
		{
			imageUrl: '/images/card/colors-demo.gif',
			link: 'https://github.com/andre2l2/colors',
			name: 'Color efect tutorial',
		},
		{
			imageUrl: 'https://github.com/andre2l2/upload-file-example/raw/master/public/img/demo.gif',
			link: 'https://github.com/andre2l2/upload-file-example?tab=readme-ov-file',
			name: 'Uplaod file example',
		},
	]);

	return (
		<Section>
			<Title type="h2">Meu Trabalho</Title>
			<Center>
				{cardInfos.map((info, index) => (
					<CardContainer href={info.link} key={index} target="_blank">
						<Image
							src={info.imageUrl}
							alt={info.name}
							width={298}
							height={170}
							onLoad={() => <div>Loading</div>}
							unoptimized
						/>
						<P>{info.name}</P>
					</CardContainer>
				))}
			</Center>
		</Section>
	);
};
