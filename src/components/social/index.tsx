import Image from 'next/image';
import React, { useState } from 'react';

import { Title } from '@/components/atoms/title';
import { ContainerMain, ContainerSocial, Section, Span } from './style';

export const Social: React.FC = () => {
	const [medias] = useState([
		{
			link: 'https://github.com/andre2l2',
			name: 'Github',
			imageUrl: '/images/github.svg',
		},
		{
			link: 'https://www.linkedin.com/in/andre-ferreira-37180318b/',
			name: 'Linkedin',
			imageUrl: '/images/linkedin.svg',
		},
		{
			link: 'https://unsplash.com/@andre_2l2',
			name: 'Unsplash',
			imageUrl: '/images/unsplash.svg',
		},
		{
			link: 'https://medium.com/@andre-ferreira',
			name: 'Medium',
			imageUrl: '/images/medium.svg',
		},
	]);

	return (
		<Section id="social">
			<Title type="h2">Outras reders:</Title>
			<ContainerMain>
				{medias.map(({ name, imageUrl, link }, index) => (
					<ContainerSocial href={link} target="_blank" key={index}>
						<Image src={imageUrl} width={60} height={60} alt="image" />
						<Span>{name}</Span>
					</ContainerSocial>
				))}
			</ContainerMain>
		</Section>
	);
};
