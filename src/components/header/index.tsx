import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ColorDark } from '../../css/color.enum';

export const Header: React.FC = () => {
	const [isOppen, oppen] = useState(false);

	return (
		<>
			<header
				style={{
					backgroundColor: ColorDark.SEMI_DARK,
				}}
			>
				<div
					style={{
						height: 50,
						maxWidth: 1080,
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<Image
						src="/images/hamburger.svg"
						width={30}
						height={30}
						onClick={() => {
							isOppen ? oppen(false) : oppen(true);
						}}
					/>
					<Image src="/images/icon.svg" width={40} height={40} />
				</div>
			</header>
			{isOppen && (
				<aside
					style={{
						position: 'absolute',
						height: '100vh',
						width: 200,
						padding: 20,
						backgroundColor: ColorDark.SEMI_DARK,
					}}
				>
					<div
						style={{
							padding: 8,
							fontSize: 20,
							cursor: 'pointer',
						}}
					>
						<a
							href=""
							style={{
								color: ColorDark.SUPER_DARK,
							}}
						>
							Sobre
						</a>
					</div>
					<div
						style={{
							padding: 8,
							fontSize: 20,
							cursor: 'pointer',
						}}
					>
						<a
							href=""
							style={{
								color: ColorDark.SUPER_DARK,
							}}
						>
							Contato
						</a>
					</div>
				</aside>
			)}
		</>
	);
};
