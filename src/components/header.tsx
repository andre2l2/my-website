import { nav, site } from '@/lib/site';

import { MobileNav } from './mobile-nav';

export function Header() {
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
				<MobileNav />
			</div>
		</header>
	);
}
