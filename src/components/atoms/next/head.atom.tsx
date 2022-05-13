import React from 'react';
import Head from 'next/head';

export const HeadOf: React.FC = ({ children }) => {
	return <Head>{children}</Head>;
};
