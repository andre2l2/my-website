import React from 'react';

import { TitleProps, TitleStyle } from './style';

export const Title: React.FC<TitleProps> = ({ children, type }) => {
	return <TitleStyle type={type}>{children}</TitleStyle>;
};
