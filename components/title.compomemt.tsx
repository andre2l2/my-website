import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
	color: white;
	margin-bottom: 20px;
`;

interface ITitle {
	title: string;
}

const Title: React.FC<ITitle> = (params) => {
	return <H1>{params.title}</H1>;
};

export default Title;
