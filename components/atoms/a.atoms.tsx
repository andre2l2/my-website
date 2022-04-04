import React from 'react';

type AType = {
	href: string;
};

export const A: React.FC<AType> = ({ children, href }) => {
	return <a href={href}>{children}</a>;
};
