export type LinkStyledType = {
	size: 'sm' | 'lg';
	position?: PositionType;
	bgColor?: 'white';
	color?: 'black' | 'white';
};

export type LinkType = {
	href: string;
	size?: 'sm' | 'lg';
	target?: '_blank' | '_parent' | '_self' | '_top';
	position?: PositionType;
	bgColor?: 'white';
	color?: 'black' | 'white';
};

export type PositionType = 'center';
