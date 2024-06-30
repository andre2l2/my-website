import React, { Fragment } from 'react';

import { About } from '@/components/about';
import { Card } from '@/components/card';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { Profile } from '@/components/profile';
import { Social } from '@/components/social';

const index: React.FC = () => {
	return (
		<Fragment>
			<Header />
			<Main>
				<Profile />
				<About
					items={[
						{
							title: 'Um pouco mais de mim',
							details: `Me chamo Andre Ferreira, nasci em Alfenas - MG, a terra pão de queijo e do pastel de fubá. Atualmente moro no Litoral Norte de São Paulo. Curso Engenharia de Computação e no tempo livre ando de skate, tiro fotos dos lugares onde passo, leio livros, e tenho um otimo gosto musical, acredite!`,
						},
						{
							title: 'Minha jornada',
							details: `Meu primeiro trabalho foi como animador de festa infantil e fiz isso durante todo meu ensino médio. E já fui voluntário da Escola da Família (Programa do governo para crianças carentes) aqui da Cidade onde moro. Quando entrei na faculdade, logo fui atrás de estágio na prefeitura aqui da cidade, ajudava no Arquivo tomando conta do arquivamento de processos administrativos. Meu primeiro contato com programação foi com pascal, mas a primeira linguagem que aprendi realmente foi python em 2017, em 2019 descobri o nosso tão amado javascript, e desde então é a linguagem que mais domino, junto de alguns de seus frameworks. No início de 2021 fui recrutado para o time da Olho no Carro e é onde trabalho atualmente. Sou apaixonado por tecnologia, tanto hardware como software.`,
						},
					]}
				/>
				<Card />
				<Social />
			</Main>
			<Footer />
		</Fragment>
	);
};

export default index;
