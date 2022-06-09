import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

const FooterContainer = styled.footer`
	height: 50px;
`;

const DivContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Footer: React.FC = () => {
	return (
		<FooterContainer
			style={{
				backgroundColor: ColorDark.SEMI_DARK,
			}}
		>
			<DivContainer>
				<Image src="/images/rocket.svg" width={40} height={40} />
			</DivContainer>
		</FooterContainer>
	);
};
