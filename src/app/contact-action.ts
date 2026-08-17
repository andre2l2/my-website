'use server';

import { site } from '@/lib/site';

const needs = {
	construir: 'Quero construir um sistema novo',
	manutencao: 'Preciso de manutenção em um sistema existente',
	ambos: 'Construir e manter',
	conversar: 'Ainda não sei — quero conversar',
} as const;

export type ContactState = {
	status: 'idle' | 'sent' | 'error';
};

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
	const name = String(formData.get('name') ?? '').trim();
	const email = String(formData.get('email') ?? '').trim();
	const needKey = String(formData.get('need') ?? '') as keyof typeof needs;
	const need = needs[needKey] ?? '';
	const message = String(formData.get('message') ?? '').trim();

	if (!name || !email || !need || !message) {
		return { status: 'error' };
	}

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
			return { status: 'error' };
		}

		return { status: 'sent' };
	} catch {
		return { status: 'error' };
	}
}
