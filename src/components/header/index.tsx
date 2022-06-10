import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

const HeaderContainer = styled.header`
	width: 100%;
	background-color: ${ColorDark.SEMI_DARK};
`;

const DivContainer = styled.div`
	height: 50;
	width: 90%;
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
`;

const DivMobileContainer = styled.div`
	@media (min-width: 820px) {
		display: none;
	}

	display: flex;
	justify-content: center;
	align-items: center;
`;

const DivDescktopContainer = styled.div`
	@media (max-width: 820px) {
		display: none;
	}

	width: 200px;
	display: flex;
	justify-content: space-between;
`;

const Link = styled.a`
	font-size: 20px;
	padding: 5px;
	cursor: pointer;
	color: ${ColorDark.SUPER_DARK};
`;

const AsideContainer = styled.aside`
	position: absolute;
	height: 100vh;
	width: 200px;
	padding: 20px;
	background-color: ${ColorDark.SEMI_DARK};

	@media (min-width: 820px) {
		display: none;
	}
`;

const DivLinkContainer = styled.div`
	padding: 8px;
	font-size: 20px;
	cursor: pointer;
`;

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
