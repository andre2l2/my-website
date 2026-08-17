'use client';

import { useState } from 'react';

import { nav, site } from '@/lib/site';

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/80 backdrop-blur-md">
			<div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
				<a href="#topo" className="text-sm font-medium tracking-wide text-fog">
					{site.name}
				</a>
				<nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
					{nav.map((item) => (
						<a key={item.href} href={item.href} className="text-sm text-mist transition hover:text-fog">
							{item.label}
						</a>
					))}
					<a
						href="#contato"
						className="rounded-full bg-signal px-4 py-2 text-sm font-medium text-signal-ink transition hover:brightness-110"
					>
						Falar comigo
					</a>
				</nav>
				<button
					type="button"
					className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-fog md:hidden"
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
			</div>
			{open && (
				<nav id="menu-mobile" className="border-t border-line px-4 py-4 md:hidden" aria-label="Mobile">
					<div className="flex flex-col gap-4">
						{nav.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="text-sm text-fog"
								onClick={() => setOpen(false)}
							>
								{item.label}
							</a>
						))}
					</div>
				</nav>
			)}
		</header>
	);
}
