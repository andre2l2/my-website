import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';
import * as packageJson from '../../../package.json';

interface IPackageJson {
	name: string;
	email: string;
	version: string;
}

const FooterContainer = styled.footer`
	height: 150px;
	background-color: ${ColorDark.SEMI_DARK};
`;

const DivContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Infos = styled.div`
	margin: 10px 0 0 0;
`;

export const Footer: React.FC = () => {
	const [infos, setInfos] = useState<IPackageJson>({ email: null, name: null, version: null });
	useEffect(() => {
		setInfos({
			name: packageJson.author.name,
			email: packageJson.author.email,
			version: packageJson.version,
		});
	}, [packageJson]);

	return (
		<FooterContainer>
			<DivContainer>
				<Image src="/images/rocket.svg" width={40} height={40} />
				<Infos>{infos.name}</Infos>
				<Infos>{infos.email}</Infos>
				<Infos>v{infos.version}</Infos>
			</DivContainer>
		</FooterContainer>
	);
};
