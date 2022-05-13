import React from 'react';

import { Main, Paragraph, Img, Center } from '../../atoms';
import { Infos, ProfileContainer, TextContainer } from './containers';

export const MainMolecules: React.FC = () => {
	return (
		<Main>
			<Infos>
				<Center type="auto">
					<ProfileContainer>
						<Img src="/images/photo.png" alt="Foto principal" />
					</ProfileContainer>
					<TextContainer>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam vel autem itaque
							accusamus ipsa delectus dolorem soluta fugiat quas consectetur eveniet placeat dignissimos
							reprehenderit, pariatur ipsum iure impedit illum.
						</Paragraph>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam vel autem itaque
							accusamus ipsa delectus dolorem soluta fugiat quas consectetur eveniet placeat dignissimos
							reprehenderit, pariatur ipsum iure impedit illum.
						</Paragraph>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam vel autem itaque
							accusamus ipsa delectus dolorem soluta fugiat quas consectetur eveniet placeat dignissimos
							reprehenderit, pariatur ipsum iure impedit illum.
						</Paragraph>
					</TextContainer>
				</Center>
			</Infos>
		</Main>
	);
};
