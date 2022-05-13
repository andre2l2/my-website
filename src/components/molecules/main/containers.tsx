import styled from 'styled-components';

export const Infos = styled.div`
	margin: 0 auto;
	width: 350px;

	@media (min-width: 800px) {
		width: 800px;
	}
`;

export const ProfileContainer = styled.div`
	img {
		border-radius: 30px;
		margin: 15px;
	}
`;

export const TextContainer = styled.div`
	p {
		text-align: justify;
		margin: 10px;
	}
`;
