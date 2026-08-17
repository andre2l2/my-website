import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Work } from '@/components/work';

export default function HomePage() {
	return (
		<>
			<Header />
			<main className="w-full min-w-0 overflow-x-hidden">
				<Hero />
				<Services />
				<About />
				<Work />
				<Faq />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
