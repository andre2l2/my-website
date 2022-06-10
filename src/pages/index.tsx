import React, { Fragment } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Profile } from '../components/profile';
import { About } from '../components/about';
import { Social } from '../components/social';
import { Main } from '../components/main';

const index: React.FC = () => {
	return (
		<Fragment>
			<Header />
			<Main>
				<Profile />
				<About />
				<Social />
			</Main>
			<Footer />
		</Fragment>
	);
};

export default index;
