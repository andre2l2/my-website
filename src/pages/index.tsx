import React, { Fragment } from 'react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Profile } from '@/components/profile';
import { About } from '@/components/about';
import { Social } from '@/components/social';
import { Main } from '@/components/main';
import { Skils } from '@/components/progress-bar';

const index: React.FC = () => {
	return (
		<Fragment>
			<Header />
			<Main>
				<Profile />
				<About />
				<Skils />
				<Social />
			</Main>
			<Footer />
		</Fragment>
	);
};

export default index;
