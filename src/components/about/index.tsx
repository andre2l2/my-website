import React from 'react';
import styled from 'styled-components';

import { ColorDark } from '../../css/color.enum';

const Section = styled.section`
	margin-top: 80px;
	width: 100%;
	max-width: 1000px;
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: 820px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const DivSection = styled.div`
	margin-bottom: 20px;
	padding: 20px;
`;

const H2 = styled.h2`
	color: ${ColorDark.WHITE};
	margin-bottom: 20px;
`;

const P = styled.p`
	text-align: justify;
	line-height: 23px;
	color: ${ColorDark.WHITE};
`;

export const About: React.FC = () => {
	return (
		<Section id="about">
			<DivSection>
				<H2>Um pouco mais de mim</H2>
				<P>
					Me chamo Andre Ferreira, nasci em Alfenas - MG, a terra pão de queijo e do pastel de fubá, mas atualmente,
					moro no Litoral Norte de São Paulo. Curso Engenharia de Computação e no tempo livre ando de skate, tiro fotos
					dos lugares onde passo, leio alguns livros, e tenho um bom gosto para música, acredite!
				</P>
			</DivSection>
			<DivSection>
				<H2>Minha jornada</H2>
				<P>
					Meu primeiro trabalho foi como animador de festa infantil e fiz isso durante todo meu ensino médio. E já fui
					voluntário da Escola da Família (Programa do governo para crianças carentes) aqui da Cidade onde moro. Quando
					entrei na faculdade, logo fui atrás de estágio na prefeitura aqui da cidade, ajudava no Arquivo tomando conta
					do arquivamento de processos administrativos. Meu primeiro contato com programação foi com pascal, mas a
					primeira linguagem que aprendi realmente foi python em 2017, em 2019 descobri o nosso tão amado javascript, e
					desde então é a linguagem que mais domino, junto de alguns de seus frameworks. No início de 2021 fui recrutado
					para o time da Olho no Carro e é onde trabalho atualmente. Sou apaixonado por tecnologia, tanto hardware como
					software, adoro ensinar o que aprendi.
				</P>
			</DivSection>
		</Section>
	);
};
