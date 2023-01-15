import styled, { css } from 'styled-components';

import { ColorDark } from '@/infra/utils/color.enum';

export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface TitleProps {
	type: TitleType;
}

export const TitleStyle = styled.h1<TitleProps>`
	${(props) => {
		if (props.type === 'h1') {
			return css`
				width: 200px;
				text-align: center;
				color: ${ColorDark.WHITE};

				@media (min-width: 820px) {
					width: 400px;
				}
			`;
		}

		if (props.type === 'h2') {
			return css`
				margin-left: 20px;
				margin-bottom: 20px;
				color: ${ColorDark.WHITE};
			`;
		}
	}}
`;
