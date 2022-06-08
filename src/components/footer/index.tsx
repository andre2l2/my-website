import React from 'react';
import Image from 'next/image';

import { ColorDark } from '../../css/color.enum';

export const Footer: React.FC = () => {
	return (
		<footer
			style={{
				height: 50,
				backgroundColor: ColorDark.SEMI_DARK,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Image src="/images/rocket.svg" width={40} height={40} />
		</footer>
	);
};
