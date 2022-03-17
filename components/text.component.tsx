import React from 'react';
import styled from 'styled-components';

const P = styled.p`
	color: white;
	text-align: justify;
`;

interface IText {
	text: string;
}

const Text: React.FC<IText> = (params) => {
	return <P>{params.text}</P>;
};

export default Text;
