import { faqs } from '@/lib/site';

export function Faq() {
	return (
		<section id="faq" className="border-t border-line px-4 py-20 sm:px-6 md:py-28">
			<div className="mx-auto w-full min-w-0 max-w-6xl">
				<p className="text-xs font-medium tracking-[0.28em] text-signal uppercase">Perguntas</p>
				<h2 className="mt-4 font-serif text-3xl text-fog sm:text-4xl">Antes de chamar</h2>
				<div className="mt-12 grid gap-8 md:grid-cols-3">
					{faqs.map((item) => (
						<article key={item.q}>
							<h3 className="text-lg text-fog">{item.q}</h3>
							<p className="mt-3 text-sm leading-relaxed text-mist">{item.a}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
