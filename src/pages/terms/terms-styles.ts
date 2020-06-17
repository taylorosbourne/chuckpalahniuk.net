import styled from 'styled-components';

export const TermsContainer = styled.section`
	position: relative;
	border-radius: 5px;
	margin: 15px auto;
	width: 60%;
	background: rgb(28, 30, 36);
	padding: 100px 22px 22px 22px;
	font-size: 1.5rem;
	@media (max-width: 1000px) {
		width: 80%;
	}
`;

export const BannerHeader = styled.header`
	position: absolute;
	top: 5px;
	left: 0px;
	margin: 10px -10px;
	text-align: center;
	padding: 10px;
	background-color: rgb(42, 44, 53);
	border-right: 8px solid rgb(105, 128, 221);
	color: #fff;
	width: 50%;
	height: 50px;
	font-size: 3rem;
	:before,
	:after {
		content: '';
		border-top: 10px solid rgb(105, 128, 221);
		position: absolute;
		bottom: -10px;
	}
	:before {
		border-left: 10px solid transparent;
		left: 0;
	}
	@media (max-width: 1000px) {
		width: 80%;
	}
`;
