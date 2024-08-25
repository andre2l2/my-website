import Image from 'next/image';
import React, { useState } from 'react';

import { Title } from '@/components/atoms/title';
import { ContainerMain, ContainerSocial, Section, SocialProps, Span } from './style';

export const Social: React.FC<SocialProps> = ({ showTitle = true }) => {
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
			link: 'https://www.tabnews.com.br/andre2l2/conteudos/1',
			name: 'Tabnews',
			imageUrl: '/images/tabmews.svg',
		},
		{
			link: 'https://medium.com/@andre-ferreira',
			name: 'Medium',
			imageUrl: '/images/medium.svg',
		},
	]);

	return (
		<Section id="social">
			{showTitle && <Title type="h2">Outras reders:</Title>}
			<ContainerMain>
				{medias.map(({ name, imageUrl, link }, index) => (
					<ContainerSocial href={link} target="_blank" key={index}>
						<Image src={imageUrl} width={60} height={60} alt="image" unoptimized />
						<Span>{name}</Span>
					</ContainerSocial>
				))}
			</ContainerMain>
		</Section>
	);
};
