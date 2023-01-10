import React, { Fragment } from 'react';

import { About } from '@/components/about';
import { Card } from '@/components/card';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { Profile } from '@/components/profile';
import { Social } from '@/components/social';

const index: React.FC = () => {
	return (
		<Fragment>
			<Header />
			<Main>
				<Profile />
				<About />
				<Card />
				<Social />
			</Main>
			<Footer />
		</Fragment>
	);
};

export default index;
