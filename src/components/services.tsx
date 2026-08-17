import { services } from '@/lib/site';

export function Services() {
	return (
		<section id="servicos" className="border-t border-line px-4 py-20 sm:px-6 md:py-28">
			<div className="mx-auto w-full min-w-0 max-w-6xl">
				<p className="text-xs font-medium tracking-[0.28em] text-signal uppercase">Serviços</p>
				<h2 className="mt-4 max-w-2xl font-serif text-3xl text-fog sm:text-4xl">
					Construir o sistema. Cuidar para que ele continue no ar.
				</h2>
				<p className="mt-4 max-w-2xl text-mist">
					Trabalho com quem precisa de um profissional para desenvolver um sistema novo ou assumir a
					manutenção de um que já existe — sem enrolação e com responsabilidade pelo que entra em produção.
				</p>
				<div className="mt-12 grid gap-4 md:grid-cols-3">
					{services.map((service) => (
						<article key={service.id} className="rounded-2xl border border-line bg-panel p-6 md:p-8">
							<p className="font-serif text-2xl text-signal">{service.id}</p>
							<h3 className="mt-6 text-xl text-fog">{service.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
