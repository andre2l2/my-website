export type LinkStyledType = {
	size: 'sm' | 'lg';
	position?: PositionType;
};

export type LinkType = {
	href: string;
	size?: 'sm' | 'lg';
	target?: '_blank' | '_parent' | '_self' | '_top';
	position?: PositionType;
};

export type PositionType = 'center';
