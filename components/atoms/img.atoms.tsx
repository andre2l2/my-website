import React from 'react';

type ImgType = {
	src: string;
	alt: string;
};

export const Img: React.FC<ImgType> = ({ src, alt }) => {
	return <img src={src} alt={alt} />;
};
