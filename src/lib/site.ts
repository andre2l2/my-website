export const site = {
	name: 'André Ferreira',
	url: 'https://andreferreira.xyz',
	email: 'delcferreira@gmail.com',
	formspree: 'https://formspree.io/f/moeakzbq',
	locale: 'pt_BR',
	title: 'André Ferreira | Desenvolvimento e manutenção de sistemas',
	description:
		'Engenheiro de Software com 7+ anos de experiência em construção e manutenção de sistemas. Node.js, TypeScript, NestJS, Next.js, Go e Elixir. Front-end, back-end e admin em produção.',
	keywords: [
		'desenvolvimento de sistemas',
		'manutenção de sistemas',
		'construção de sistemas',
		'engenheiro de software',
		'desenvolvedor de software',
		'manutenção de software',
		'Node.js',
		'TypeScript',
		'NestJS',
		'Next.js',
		'sistemas sob medida',
		'desenvolvedor full stack',
		'André Ferreira',
	],
	social: {
		github: 'https://github.com/andre2l2',
		linkedin: 'https://www.linkedin.com/in/andre-ferreira-37180318b/',
		medium: 'https://medium.com/@andre-ferreira',
		tabnews: 'https://www.tabnews.com.br/andre2l2/conteudos/1',
	},
} as const;

export const jsonLd = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'WebSite',
			'@id': `${site.url}/#website`,
			url: site.url,
			name: site.name,
			description: site.description,
			inLanguage: 'pt-BR',
		},
		{
			'@type': 'Person',
			'@id': `${site.url}/#person`,
			name: site.name,
			jobTitle: 'Engenheiro de Software',
			description: site.description,
			image: `${site.url}/images/profile.png`,
			knowsAbout: ['Node.js', 'TypeScript', 'NestJS', 'Next.js', 'Go', 'Elixir', 'Desenvolvimento de sistemas', 'Manutenção de sistemas'],
			url: site.url,
			email: site.email,
			sameAs: [site.social.github, site.social.linkedin, site.social.medium, site.social.tabnews],
		},
		{
			'@type': 'ProfessionalService',
			'@id': `${site.url}/#service`,
			name: 'Desenvolvimento e manutenção de sistemas',
			url: site.url,
			image: `${site.url}/images/icon.svg`,
			email: site.email,
			founder: { '@id': `${site.url}/#person` },
			areaServed: {
				'@type': 'Country',
				name: 'Brasil',
			},
			serviceType: [
				'Desenvolvimento de sistemas',
				'Manutenção de sistemas',
				'Construção de software sob medida',
				'Evolução e suporte de sistemas em produção',
			],
		},
		{
			'@type': 'FAQPage',
			mainEntity: [
				{
					'@type': 'Question',
					name: 'Você constrói sistemas do zero?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Sim. Eu projeto e desenvolvo sistemas sob medida — da ideia inicial à entrega em produção — com foco em clareza, estabilidade e facilidade de evolução.',
					},
				},
				{
					'@type': 'Question',
					name: 'Você presta manutenção em sistemas já existentes?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Sim. Faço manutenção corretiva e evolutiva: correção de falhas, melhorias, atualizações e acompanhamento contínuo de sistemas que já estão no ar.',
					},
				},
				{
					'@type': 'Question',
					name: 'Como começar um projeto?',
					acceptedAnswer: {
						'@type': 'Answer',
						text: 'Envie uma mensagem pelo formulário de contato com o contexto do sistema. Retorno para alinharmos escopo, prazo e a melhor forma de construir ou manter o que você precisa.',
					},
				},
			],
		},
	],
};

export const about = {
	paragraphs: [
		'Engenheiro de Software com 7+ anos de experiência. Cursando Engenharia de Computação.',
		'Comecei em Pascal, migrei para Python em 2017 e para JavaScript em 2019 — hoje minha stack principal é Node.js/TypeScript, NestJS, Next.js, Go e Elixir.',
		'Passei pela Checktudo, onde desenvolvi sistemas de comunicação de vendas, e pela Olho no Carro, onde construí o motor de consulta interno (apelidado de Tetris, por montar consultas dinamicamente), otimizei o page speed da home e criei o Mustang, uma camada de inteligência de dados para enriquecimento em tempo de consulta.',
		'Atualmente sou responsável por todo o sistema da Agilize Auto — front-end, back-end e admin — plataforma de despachante online com consultas e consultoria veicular.',
		'Gosto de entender o sistema por inteiro: hardware e software, do design à manutenção do que já está em produção.',
	],
	facts: [
		{
			label: 'Experiência',
			value: '7+ anos construindo e mantendo sistemas.',
		},
		{
			label: 'Stack',
			value: 'Node.js, TypeScript, NestJS, Next.js, Go e Elixir.',
		},
		{
			label: 'Agora',
			value: 'Sistema completo da Agilize Auto — front, back e admin.',
		},
	],
} as const;

export const nav = [
	{ href: '#servicos', label: 'Serviços' },
	{ href: '#sobre', label: 'Sobre' },
	{ href: '#trabalho', label: 'Trabalho' },
	{ href: '#contato', label: 'Contato' },
] as const;

export const services = [
	{
		id: '01',
		title: 'Construção de sistemas',
		description:
			'Do zero à produção: aplicações web, APIs e painéis sob medida. Eu desenho a estrutura, implemento e deixo o sistema pronto para crescer.',
	},
	{
		id: '02',
		title: 'Manutenção de sistemas',
		description:
			'Correção de falhas, atualizações, melhorias e acompanhamento de sistemas que já estão no ar. O objetivo é estabilidade sem interromper o negócio.',
	},
	{
		id: '03',
		title: 'Evolução contínua',
		description:
			'Novas funcionalidades, integrações e refatoração com segurança. O sistema continua operando enquanto avança — com código que dá para manter.',
	},
] as const;

export const projects = [
	{
		name: 'Agilize Auto',
		href: 'https://www.agilizeauto.com.br/',
		role: 'Sistema completo',
		image: '/images/projects/agilize.png',
		description:
			'Responsável por front-end, back-end e admin. Plataforma de despachante online com consultas e consultoria veicular.',
	},
	{
		name: 'Olho no Carro',
		href: 'https://www.olhonocarro.com.br/',
		role: 'Consulta veicular',
		image: '/images/projects/olhonocarro.png',
		description:
			'Construí o motor de consulta interno (Tetris), otimizei o page speed da home e criei o Mustang, camada de inteligência de dados para enriquecimento em tempo de consulta.',
	},
	{
		name: 'Checktudo',
		href: 'https://www.checktudo.com.br/',
		role: 'Inteligência de dados',
		image: '/images/projects/checktudo.png',
		description:
			'Desenvolvi sistemas de comunicação de vendas na plataforma de consultas e dados para negócios.',
	},
] as const;

export const faqs = [
	{
		q: 'Você constrói sistemas do zero?',
		a: 'Sim. Eu projeto e desenvolvo sistemas sob medida — da ideia inicial à entrega em produção — com foco em clareza, estabilidade e facilidade de evolução.',
	},
	{
		q: 'Você presta manutenção em sistemas já existentes?',
		a: 'Sim. Faço manutenção corretiva e evolutiva: correção de falhas, melhorias, atualizações e acompanhamento contínuo de sistemas que já estão no ar.',
	},
	{
		q: 'Como começar um projeto?',
		a: 'Envie uma mensagem pelo formulário com o contexto do sistema. Retorno para alinharmos escopo, prazo e a melhor forma de construir ou manter o que você precisa.',
	},
] as const;
