import { site } from '@/lib/site';

import { ContactForm } from './contact-form';

export function Contact() {
	return (
		<section id="contato" className="border-t border-line px-4 py-20 sm:px-6 md:py-28">
			<div className="mx-auto grid w-full min-w-0 max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
				<div className="min-w-0">
					<p className="text-xs font-medium tracking-[0.28em] text-signal uppercase">Contato</p>
					<h2 className="mt-4 font-serif text-3xl text-fog sm:text-4xl">Vamos falar do seu sistema</h2>
					<p className="mt-4 leading-relaxed text-mist">
						Se você precisa construir um sistema novo ou prestar manutenção no que já existe, me escreva.
						Respondo em horário comercial.
					</p>
					<ul className="mt-8 grid gap-3 text-sm">
						<li>
							<a className="text-signal underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
								{site.email}
							</a>
						</li>
						<li>
							<a
								className="text-mist underline-offset-4 hover:text-fog hover:underline"
								href={site.social.linkedin}
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								className="text-mist underline-offset-4 hover:text-fog hover:underline"
								href={site.social.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</li>
					</ul>
				</div>
				<ContactForm />
			</div>
		</section>
	);
}
