import styled from 'styled-components';

export const Infos = styled.div`
	margin: 0 auto;
	width: 350px;
	border-radius: 30px;

	@media (min-width: 800px) {
		width: 800px;
		height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
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
