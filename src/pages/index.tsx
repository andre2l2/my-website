import { Head } from 'next/document';
import React, { Fragment } from 'react';
import * as packageJson from '../../package.json';

import { Header } from '../components/header';
import { ColorDark } from '../css/color.enum';

const index: React.FC = () => {
	return (
		<Fragment>
			<Header />
			<div
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: ColorDark.DARK,
				}}
			>
				<h1
					style={{
						color: ColorDark.WHITE,
					}}
				>
					v{packageJson.version}
				</h1>
				<h2
					style={{
						color: ColorDark.WHITE,
					}}
				>
					Site em andamento
				</h2>
			</div>
		</Fragment>
	);
};

export default index;
