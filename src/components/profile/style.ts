import styled from 'styled-components';

export const Section = styled.section`
	margin-top: 100px;
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	@media (min-width: 820px) {
		margin-top: 0;
		height: 60vh;
		flex-direction: row;
	}
`;

export const Image = styled.img`
	width: 200;
	height: 200;
	border-radius: 100%;
	border: 4px solid #f8f9fa;
	margin-bottom: 30px;

	@media (min-width: 820px) {
		width: 300px;
		height: 300px;
	}
`;
