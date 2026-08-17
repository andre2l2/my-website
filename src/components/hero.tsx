import Image from 'next/image';

export function Hero() {
	return (
		<section id="topo" className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 md:pt-40 md:pb-28">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(209,245,110,0.08),_transparent_55%)]"
			/>
			<div className="relative mx-auto grid w-full min-w-0 max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
				<div className="min-w-0">
					<p className="text-xs font-medium tracking-[0.18em] text-signal uppercase sm:tracking-[0.28em]">
						Engenheiro de Software
					</p>
					<h1 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.15] break-words text-fog sm:text-5xl lg:text-6xl lg:leading-[1.1]">
						Desenvolvimento e manutenção de sistemas
					</h1>
					<p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
						Eu construo software sob medida e presto manutenção contínua em sistemas que precisam permanecer
						estáveis, claros e fáceis de evoluir.
					</p>
					<div className="mt-10 flex flex-wrap gap-3">
						<a
							href="#contato"
							className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition hover:brightness-110"
						>
							Solicitar conversa
						</a>
						<a
							href="#servicos"
							className="rounded-full border border-line px-6 py-3 text-sm text-fog transition hover:border-mist"
						>
							Ver serviços
						</a>
					</div>
				</div>
				<div className="mx-auto w-full min-w-0 max-w-xs sm:max-w-sm lg:max-w-md">
					<div className="relative aspect-square overflow-hidden rounded-full ring-2 ring-signal/40 ring-offset-4 ring-offset-ink sm:ring-offset-8">
						<Image
							src="/images/profile.png"
							alt="André Ferreira, engenheiro de software"
							fill
							priority
							sizes="(min-width: 1024px) 28rem, 20rem"
							className="object-cover object-[center_12%]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
