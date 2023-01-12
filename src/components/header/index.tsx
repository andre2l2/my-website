import Image from 'next/image';
import React, { useState } from 'react';

import { Aside } from '@/components/aside';

import { DivContainer, DivDescktopContainer, DivMobileContainer, HeaderContainer, Link } from './style';

export const Header: React.FC = () => {
	const [isOppen, oppen] = useState(false);

	return (
		<>
			<HeaderContainer>
				<DivContainer>
					<DivMobileContainer>
						<Image
							src="/images/hamburger.svg"
							width={30}
							height={30}
							onClick={() => {
								isOppen ? oppen(false) : oppen(true);
							}}
						/>
					</DivMobileContainer>
					<Image src="/images/icon.svg" width={40} height={40} />
					<DivDescktopContainer>
						<Link href="#about">Sobre</Link>
						<Link href="#social">Contato</Link>
					</DivDescktopContainer>
				</DivContainer>
			</HeaderContainer>
			{isOppen && <Aside />}
		</>
	);
};
