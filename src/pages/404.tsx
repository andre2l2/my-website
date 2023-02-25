import React, { Fragment } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { NotFoundPage } from '@/components/notFound';

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
