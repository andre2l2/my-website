import React, { Fragment } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Profile } from '@/components/profile';
import { ColorDark } from '../css/color.enum';
import { About } from '../components/about';

import * as packageJson from '../../package.json';

const index: React.FC = () => {
	return (
		<Fragment>
			<Header />
			<div
				style={{
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					backgroundColor: ColorDark.DARK,
				}}
			>
				<Profile />
				<About />
				<h1
					style={{
						color: ColorDark.WHITE,
					}}
				>
					v{packageJson.version}
				</h1>
			</div>
			<Footer />
		</Fragment>
	);
};

export default index;
