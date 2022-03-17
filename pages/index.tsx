import React from 'react';
import styled from 'styled-components';

import Title from '../components/title.compomemt';
import Text from '../components/text.component';

const IndexPageStyled = styled.section`
	height: 100vh;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const IndexPage: React.FC = () => {
	return (
		<IndexPageStyled>
			<Title title="Hello Everyone" />
			<Text text="I'm so happy to see you here! My name is Andre Ferreira" />
			<Text text="This site is making now 👷🏾‍♂️" />
		</IndexPageStyled>
	);
};

export default IndexPage;
