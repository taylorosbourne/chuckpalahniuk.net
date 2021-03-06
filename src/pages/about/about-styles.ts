import styled, { css } from 'styled-components';

export const Section = styled.section<{
	top: boolean;
	bottom: boolean;
	imgBreak: boolean;
}>`
  background: rgb(28,30,36);
  max-width: 100vw;
  padding: 22px;
	margin: 0 auto;
	color: #fff;
  ${(props) =>
		props.top &&
		css`
			margin: 10px auto 0px;
		`}
  ${(props) =>
		props.bottom &&
		css`
			margin: 0px auto 10px;
		`}
  ${(props) =>
		props.imgBreak &&
		css`
			background: none;
		`}
  div p {
    font-size: 1.35rem;
  }
  @media(max-width: 800px) {
  div {
      min-width: 90%;
  }
  }
  @media(max-width: 800px) {
    padding: 10px 0px;
  }
`;

export const BioContainer = styled.div`
	width: 78%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	div {
		max-width: 50%;
	}
	@media (max-width: 1300px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		div {
			max-width: 90%;
			img {
				max-width: 90%;
			}
		}
	}
`;

export const BannerContainer = styled.div`
	width: 68%;
	margin: 0 auto;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	:hover {
		.quote {
			opacity: 1;
			right: 0px;
		}
	}
`;

export const BannerImage = styled.img`
	border-radius: 5px;
	filter: grayscale(80%);
	transition: 0.8s ease;
	border-left: 8px solid rgb(105, 128, 221);
	border-bottom: 8px solid rgb(105, 128, 221);
	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
	&:hover {
		filter: grayscale(0%);
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

export const ChuckQuote = styled.blockquote`
	border-radius: 5px;
	color: rgb(242, 242, 242);
	background: rgb(105, 128, 221);
	padding: 5px;
	position: absolute;
	top: 0px;
	right: -100px;
	font-size: 1.75rem;
	width: 300px;
	opacity: 0;
	transition: 0.3s ease;
	p {
		margin: 0;
		padding: 0;
	}
	cite {
		display: block;
		margin-top: 1.65rem;
		font-size: 1rem;
		text-align: right;
	}
	@media (max-width: 800px) {
		position: relative;
		margin: 0 auto;
		top: 0;
		right: 0;
		opacity: 1;
		font-size: 0.75rem;
	}
`;
