import React from 'react';
import { LinkType } from './link.type';

export const Link: React.FC<LinkType> = ({ children, href, target }) => {
	return (
		<a href={href} target={target}>
			{children}
		</a>
	);
};
