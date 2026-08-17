import Image from 'next/image';

import { projects } from '@/lib/site';

export function Work() {
	return (
		<section id="trabalho" className="border-t border-line px-4 py-20 sm:px-6 md:py-28">
			<div className="mx-auto w-full min-w-0 max-w-6xl">
				<p className="text-xs font-medium tracking-[0.28em] text-signal uppercase">Trabalho</p>
				<h2 className="mt-4 font-serif text-3xl text-fog sm:text-4xl">Sistemas em produção</h2>
				<p className="mt-4 max-w-2xl text-mist">
					Produtos que ajudei a construir e manter — do motor interno à experiência na home.
				</p>
				<ul className="mt-12 grid min-w-0 gap-8">
					{projects.map((project) => (
						<li key={project.href} className="min-w-0">
							<a
								href={project.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group grid min-w-0 overflow-hidden rounded-2xl border border-line bg-panel transition hover:border-mist lg:grid-cols-[1.35fr_1fr]"
							>
								<div className="min-w-0 overflow-hidden border-b border-line lg:border-r lg:border-b-0">
									<div className="flex gap-1.5 border-b border-line px-4 py-3">
										<span className="h-2.5 w-2.5 rounded-full bg-line" />
										<span className="h-2.5 w-2.5 rounded-full bg-line" />
										<span className="h-2.5 w-2.5 rounded-full bg-line" />
									</div>
									<Image
										src={project.image}
										alt={`Home de ${project.name}`}
										width={1600}
										height={1000}
										className="h-56 w-full max-w-full object-cover object-top sm:h-72 lg:h-full"
									/>
								</div>
								<div className="flex min-w-0 flex-col justify-center p-6 md:p-8">
									<p className="text-xs tracking-widest text-signal uppercase">{project.role}</p>
									<h3 className="mt-3 font-serif text-3xl text-fog transition group-hover:text-signal">
										{project.name}
									</h3>
									<p className="mt-4 leading-relaxed text-mist">{project.description}</p>
									<p className="mt-6 text-sm text-fog">Ver site ↗</p>
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
