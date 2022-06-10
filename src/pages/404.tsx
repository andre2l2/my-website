import React, { Fragment } from 'react';

import { Header } from '../components/header';
import { Main } from '../components/main';
import { Footer } from '../components/footer';
import { NotFoundPage } from '../components/notFound';

const NotFound: React.FC = () => {
	return (
		<Fragment>
			<Header />
			<Main>
				<NotFoundPage />
			</Main>
			<Footer />
		</Fragment>
	);
};

export default NotFound;
