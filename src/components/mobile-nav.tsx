'use client';

import { useState } from 'react';

import { nav } from '@/lib/site';

export function MobileNav() {
	const [open, setOpen] = useState(false);

	return (
		<div className="md:hidden">
			<button
				type="button"
				className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-fog"
				aria-expanded={open}
				aria-controls="menu-mobile"
				onClick={() => setOpen((value) => !value)}
			>
				<span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
				<span className="flex flex-col gap-1.5">
					<span className={`h-px w-4 bg-fog transition ${open ? 'translate-y-1 rotate-45' : ''}`} />
					<span className={`h-px w-4 bg-fog transition ${open ? 'opacity-0' : ''}`} />
					<span className={`h-px w-4 bg-fog transition ${open ? '-translate-y-1 -rotate-45' : ''}`} />
				</span>
			</button>
			{open && (
				<nav
					id="menu-mobile"
					className="absolute inset-x-0 top-16 border-b border-t border-line bg-ink/95 px-4 py-4"
					aria-label="Mobile"
				>
					<div className="flex flex-col gap-4">
						{nav.map((item) => (
							<a key={item.href} href={item.href} className="text-sm text-fog" onClick={() => setOpen(false)}>
								{item.label}
							</a>
						))}
					</div>
				</nav>
			)}
		</div>
	);
}
