import React, { Fragment } from 'react';
import * as packageJson from '../../package.json';

const IndexPage: React.FC = () => {
	return (
		<Fragment>
			<div
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1>v{packageJson.version}</h1>
				<h2>Site em andamento</h2>
			</div>
		</Fragment>
	);
};

export default IndexPage;
