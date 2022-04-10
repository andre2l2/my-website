import React from 'react';
import styled, { css } from 'styled-components';

const CenterStyle = styled.div<{ type: 'column' | 'row' }>`
	display: flex;
	justify-content: center;
	align-items: center;

	${({ type }) =>
		type === 'row'
			? css`
					flex-direction: column;
			  `
			: null}
`;

export const Center: React.FC = ({ children }) => {
	return <CenterStyle type="column">{children}</CenterStyle>;
};
