import React from 'react';
import { TitleType } from './type';

export const Title: React.FC<TitleType> = ({ children, type }) => {
	return type === 'h1' ? (
		<h1>{children}</h1>
	) : type === 'h2' ? (
		<h2>{children}</h2>
	) : type === 'h3' ? (
		<h3>{children}</h3>
	) : type === 'h4' ? (
		<h4>{children}</h4>
	) : (
		<h5>{children}</h5>
	);
};
