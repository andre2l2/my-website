import React, { Fragment } from 'react';

import { Main } from '@/components/main';
import { Social } from '@/components/social';

const Contat: React.FC = () => {
	return (
		<Fragment>
			<Main>
				<Social showTitle={false} />
			</Main>
		</Fragment>
	);
};

export default Contat;
