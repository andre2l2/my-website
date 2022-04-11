import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
	padding: 20px;
	max-width: 720px;
	height: 100px;
	margin: 0 auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Header: React.FC = ({ children }) => {
	return <HeaderStyled>{children}</HeaderStyled>;
};
