import { about } from '@/lib/site';

export function About() {
	return (
		<section id="sobre" className="border-t border-line px-4 py-20 sm:px-6 md:py-28">
			<div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-12 lg:grid-cols-2">
				<div className="min-w-0">
					<p className="text-xs font-medium tracking-[0.28em] text-signal uppercase">Sobre</p>
					<h2 className="mt-4 font-serif text-3xl text-fog sm:text-4xl">André Ferreira</h2>
					<div className="mt-6 grid gap-4">
						{about.paragraphs.map((paragraph) => (
							<p key={paragraph} className="leading-relaxed text-mist">
								{paragraph}
							</p>
						))}
					</div>
				</div>
				<ul className="grid min-w-0 gap-4">
					{about.facts.map((fact) => (
						<li key={fact.label} className="rounded-2xl border border-line bg-panel p-6">
							<p className="text-xs tracking-widest text-mist uppercase">{fact.label}</p>
							<p className="mt-2 text-fog">{fact.value}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
