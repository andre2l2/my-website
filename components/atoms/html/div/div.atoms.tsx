import React, { CSSProperties } from 'react';

type DivTypes = {
	style?: CSSProperties;
};

export const Div: React.FC<DivTypes> = ({ children, style }) => {
	return <div style={style}>{children}</div>;
};
