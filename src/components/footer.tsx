import { site } from '@/lib/site';

export function Footer() {
	return (
		<footer className="border-t border-line px-4 py-10 sm:px-6">
			<div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-sm text-mist">
					© {new Date().getFullYear()} {site.name}
				</p>
				<div className="flex flex-wrap gap-5 text-sm text-mist">
					<a href={site.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-fog">
						GitHub
					</a>
					<a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fog">
						LinkedIn
					</a>
					<a href={site.social.medium} target="_blank" rel="noopener noreferrer" className="hover:text-fog">
						Medium
					</a>
					<a href={`mailto:${site.email}`} className="hover:text-fog">
						E-mail
					</a>
				</div>
			</div>
		</footer>
	);
}
