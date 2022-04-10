import React from 'react';

import { HeadOf } from '../../atoms/next/head.atom';

export const HeadMolecules: React.FC = () => {
	return (
		<HeadOf>
			<link rel="icon" href="/images/logo.svg" />
			<link rel="manifest" href="/manifest.json" />
			<meta property="og:title" content="My-Website" />
			<meta property="og:type" content="video.movie" />
			<meta property="og:description" content="Hello everyone!" />
			<meta
				property="og:image"
				content="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lookandlearn.com%2Fhistory-images%2Fpreview%2FA%2FA007%2FA007160_Gnu.jpg&f=1&nofb=1"
			/>
			<meta
				property="og:url"
				content="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lookandlearn.com%2Fhistory-images%2Fpreview%2FA%2FA007%2FA007160_Gnu.jpg&f=1&nofb=1"
			/>
			<meta
				name="twitter:image"
				content="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lookandlearn.com%2Fhistory-images%2Fpreview%2FA%2FA007%2FA007160_Gnu.jpg&f=1&nofb=1"
			/>
		</HeadOf>
	);
};
