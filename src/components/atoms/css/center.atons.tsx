import React from 'react';
import styled, { css } from 'styled-components';

type ContainerType = {
	type?: 'column' | 'row' | 'auto';
};

const CenterStyle = styled.div<ContainerType>`
	display: flex;
	justify-content: center;
	align-items: center;

	${({ type }) =>
		type === 'column'
			? css`
					flex-direction: column;
			  `
			: type == 'auto'
			? css`
					flex-direction: column;

					@media (min-width: 800px) {
						flex-direction: row;
					}
			  `
			: null}
`;

export const Center: React.FC<ContainerType> = ({ children, type }) => {
	return <CenterStyle type={type}>{children}</CenterStyle>;
};
