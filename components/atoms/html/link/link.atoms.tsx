import React from 'react';
import styled, { css } from 'styled-components';

import { LinkStyledType, LinkType } from './link.type';

const LinkStyled = styled.a<LinkStyledType>`
	color: black;
	outline: none;
	text-decoration: none;
	padding: 10px;

	${({ size }) =>
		size === 'lg'
			? css`
					font-size: 24px;
			  `
			: null}

	${({ position }) =>
		position === 'center'
			? css`
					display: flex;
					align-items: center;
					justify-content: center;
			  `
			: null}
`;

export const Link: React.FC<LinkType> = ({ children, href, target, size, position }) => {
	return (
		<LinkStyled href={href} target={target} size={size} position={position}>
			{children}
		</LinkStyled>
	);
};
