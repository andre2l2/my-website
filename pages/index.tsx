import React, { Fragment } from 'react';

import { HeadMolecules } from '../components/molecules/head/head.molecules';
import { HeaderMolecules } from '../components/molecules/header/header.molecules';
import { MainMolecules } from '../components/molecules/main/main.molecules';
import { FooterMolecules } from '../components/molecules/footer/footer.molecules';

const IndexPage: React.FC = () => {
	return (
		<Fragment>
			<HeadMolecules />
			<HeaderMolecules />
			<MainMolecules />
			<FooterMolecules />
		</Fragment>
	);
};

export default IndexPage;
