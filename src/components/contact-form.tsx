'use client';

import { FormEvent, useState } from 'react';

import { site } from '@/lib/site';

const needs = [
	{ value: 'construir', label: 'Quero construir um sistema novo' },
	{ value: 'manutencao', label: 'Preciso de manutenção em um sistema existente' },
	{ value: 'ambos', label: 'Construir e manter' },
	{ value: 'conversar', label: 'Ainda não sei — quero conversar' },
] as const;

type Status = 'idle' | 'sent';

export function ContactForm() {
	const [status, setStatus] = useState<Status>('idle');

	function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const need = needs.find((item) => item.value === data.get('need'))?.label ?? '';
		const message = String(data.get('message') ?? '').trim();

		const subject = encodeURIComponent(`Contato pelo site — ${name}`);
		const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\nNecessidade: ${need}\n\n${message}`);
		window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
		setStatus('sent');
	}

	if (status === 'sent') {
		return (
			<div className="rounded-2xl border border-line bg-panel p-8">
				<p className="font-serif text-2xl text-fog">Mensagem pronta para envio.</p>
				<p className="mt-3 text-sm leading-relaxed text-mist">
					Se o e-mail não abriu, escreva direto para{' '}
					<a className="text-signal underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
						{site.email}
					</a>
					.
				</p>
				<button
					type="button"
					className="mt-6 text-sm text-fog underline-offset-4 hover:underline"
					onClick={() => setStatus('idle')}
				>
					Enviar outra mensagem
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={onSubmit} className="grid min-w-0 gap-4 rounded-2xl border border-line bg-panel p-6 md:p-8">
			<label className="grid min-w-0 gap-2 text-sm">
				<span className="text-mist">Nome</span>
				<input
					name="name"
					required
					autoComplete="name"
					className="w-full min-w-0 max-w-full rounded-xl border border-line bg-ink px-4 py-3 text-fog outline-none focus:border-signal"
				/>
			</label>
			<label className="grid min-w-0 gap-2 text-sm">
				<span className="text-mist">E-mail</span>
				<input
					name="email"
					type="email"
					required
					autoComplete="email"
					className="w-full min-w-0 max-w-full rounded-xl border border-line bg-ink px-4 py-3 text-fog outline-none focus:border-signal"
				/>
			</label>
			<label className="grid min-w-0 gap-2 text-sm">
				<span className="text-mist">O que você precisa</span>
				<select
					name="need"
					required
					defaultValue=""
					className="w-full min-w-0 max-w-full rounded-xl border border-line bg-ink px-4 py-3 text-fog outline-none focus:border-signal"
				>
					<option value="" disabled>
						Selecione
					</option>
					{needs.map((item) => (
						<option key={item.value} value={item.value}>
							{item.label}
						</option>
					))}
				</select>
			</label>
			<label className="grid min-w-0 gap-2 text-sm">
				<span className="text-mist">Mensagem</span>
				<textarea
					name="message"
					required
					rows={5}
					placeholder="Conte um pouco do sistema ou da ideia."
					className="w-full min-w-0 max-w-full resize-y rounded-xl border border-line bg-ink px-4 py-3 text-fog outline-none placeholder:text-mist/60 focus:border-signal"
				/>
			</label>
			<button
				type="submit"
				className="mt-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition hover:brightness-110"
			>
				Enviar mensagem
			</button>
		</form>
	);
}
