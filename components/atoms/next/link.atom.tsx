import React from 'react';
import Link from 'next/link';

import { LinkOfType } from './types';

export const LinkOf: React.FC<LinkOfType> = ({ children, href }) => {
	return <Link href={href}>{children}</Link>;
};
