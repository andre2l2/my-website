import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import {
	AsideContainer,
	DivContainer,
	DivDescktopContainer,
	DivLinkContainer,
	DivMobileContainer,
	HeaderContainer,
} from './style';

const Aside: React.FC = () => {
	return (
		<AsideContainer>
			<DivLinkContainer>
				<Link href="#about">Sobre</Link>
			</DivLinkContainer>
			<DivLinkContainer>
				<Link href="#social">Contato</Link>
			</DivLinkContainer>
		</AsideContainer>
	);
};

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
