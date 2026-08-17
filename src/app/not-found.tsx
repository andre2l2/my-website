import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function NotFound() {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
				<p className="font-serif text-7xl text-signal">404</p>
				<h1 className="mt-6 font-serif text-3xl text-fog">Página não encontrada</h1>
				<a href="/" className="mt-8 text-sm text-signal underline-offset-4 hover:underline">
					Voltar ao início
				</a>
			</main>
			<Footer />
		</>
	);
}
