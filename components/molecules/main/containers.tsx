import styled from 'styled-components';

export const Infos = styled.div`
	margin: 0 auto;
	width: 350px;
	border-radius: 30px;

	@media (min-width: 600px) {
		width: 800px;
	}
`;

export const ProfileContainer = styled.div`
	img {
		border-radius: 30px;
		margin: 10px;
	}
`;

export const TextContainer = styled.div`
	p {
		text-align: justify;
		margin: 10px;
	}
`;