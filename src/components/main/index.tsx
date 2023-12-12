import React from 'react';

import { MainContainer } from './style';

type MainProps = {
	children: React.ReactNode;
};

export const Main: React.FC<MainProps> = ({ children }) => {
	return <MainContainer>{children}</MainContainer>;
};
