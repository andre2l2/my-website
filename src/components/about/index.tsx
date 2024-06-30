import React from 'react';
import { DivSection, H2, P, Section } from './style';

type Items = {
	title: string;
	details: string;
};

type AboutPops = {
	items: Items[];
};

export const About: React.FC<AboutPops> = ({ items }) => {
	return (
		<Section id="about">
			{items.map((item) => (
				<DivSection>
					<H2>{item.title}</H2>
					<P>{item.details}</P>
				</DivSection>
			))}
		</Section>
	);
};
