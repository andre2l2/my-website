import React from 'react';
import styled, { css } from 'styled-components';

import { LinkStyledType, LinkType } from './link.type';

const LinkStyled = styled.a<LinkStyledType>`
	color: black;
	outline: none;
	text-decoration: none;
	padding: 10px;

	background: linear-gradient(#ffc300 0 0) calc(100% - var(--p, 0%)) / var(--p, 0%) no-repeat;
	border-radius: 10px;
	transition: 0.4s, background-position 0s;

	&:hover {
		--p: 100%;
	}

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

	${({ bgColor }) =>
		bgColor === 'white'
			? css`
					background-color: white;
			  `
			: null}

	${({ color }) =>
		color === 'black'
			? css`
					color: black;
			  `
			: css`
					color: white;
			  `}
`;

export const Link: React.FC<LinkType> = ({ children, href, target, size, position, bgColor, color }) => {
	return (
		<LinkStyled href={href} target={target} size={size} position={position} bgColor={bgColor} color={color}>
			{children}
		</LinkStyled>
	);
};
