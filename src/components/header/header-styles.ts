import styled from 'styled-components';

export const Logo = styled.div`
	width: 96%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 1300px) {
		flex-direction: column;
		justify-content: center;
	}
	a#header {
		color: #fff;
	}
	a {
		text-decoration: none;
		h1 {
			font-size: 2.5rem;
			font-weight: 300;
			cursor: pointer;
			padding-bottom: 15px;
		}
	}
`;

export const CigaretteBurn = styled.span`
	display: inline-block;
	height: 25px;
	width: 25px;
	background: #000;
	border: 3px solid #fff;
	border-radius: 50%;
	position: absolute;
	top: 15px;
	right: 15px;
	opacity: 0;
	animation: 10s flicker infinite;
	@keyframes flicker {
		0% {
			opacity: 0;
		}
		94% {
			opacity: 0;
		}
		95% {
			opacity: 1;
		}
		96% {
			opacity: 0;
		}
		97% {
			opacity: 1;
		}
		98% {
			opacity: 0;
		}
		99% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`;
