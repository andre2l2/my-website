'use client';

import { FormEvent, useState } from 'react';

import { site } from '@/lib/site';

const needs = [
	{ value: 'construir', label: 'Quero construir um sistema novo' },
	{ value: 'manutencao', label: 'Preciso de manutenção em um sistema existente' },
	{ value: 'ambos', label: 'Construir e manter' },
	{ value: 'conversar', label: 'Ainda não sei — quero conversar' },
] as const;

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
	const [status, setStatus] = useState<Status>('idle');

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const need = needs.find((item) => item.value === data.get('need'))?.label ?? '';
		const message = String(data.get('message') ?? '').trim();

		setStatus('sending');

		try {
			const response = await fetch(site.formspree, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					need,
					message,
					_subject: `Contato pelo site — ${name}`,
				}),
			});

			if (!response.ok) {
				throw new Error('formspree');
			}

			form.reset();
			setStatus('sent');
		} catch {
			setStatus('error');
		}
	}

	if (status === 'sent') {
		return (
			<div className="rounded-2xl border border-line bg-panel p-8">
				<p className="font-serif text-2xl text-fog">Mensagem enviada.</p>
				<p className="mt-3 text-sm leading-relaxed text-mist">
					Recebi seu contato e retorno em breve. Se preferir, escreva também para{' '}
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
					disabled={status === 'sending'}
					className="w-full min-w-0 max-w-full rounded-xl border border-line bg-ink px-4 py-3 text-fog outline-none focus:border-signal disabled:opacity-60"
				/>
			</label>
			<label className="grid min-w-0 gap-2 text-sm">
				<span className="text-mist">E-mail</span>
				<input
					name="email"
					type="email"
					required
					autoComplete="email"
					disabled={status === 'sending'}
					className="w-full min-w-0 max-w-full rounded-xl border border-line bg-ink px-4 py-3 text-fog outline-none focus:border-signal disabled:opacity-60"
				/>
			</label>
			<label className="grid min-w-0 gap-2 text-sm">
				<span className="text-mist">O que você precisa</span>
				<select
					name="need"
					required
					defaultValue=""
					disabled={status === 'sending'}
					className="w-full min-w-0 max-w-full rounded-xl border border-line bg-ink px-4 py-3 text-fog outline-none focus:border-signal disabled:opacity-60"
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
					disabled={status === 'sending'}
					className="w-full min-w-0 max-w-full resize-y rounded-xl border border-line bg-ink px-4 py-3 text-fog outline-none placeholder:text-mist/60 focus:border-signal disabled:opacity-60"
				/>
			</label>
			{status === 'error' && (
				<p className="text-sm text-red-300">
					Não deu para enviar agora. Tente de novo ou escreva para{' '}
					<a className="underline underline-offset-4" href={`mailto:${site.email}`}>
						{site.email}
					</a>
					.
				</p>
			)}
			<button
				type="submit"
				disabled={status === 'sending'}
				className="mt-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition hover:brightness-110 disabled:opacity-60"
			>
				{status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
			</button>
		</form>
	);
}
