import styled from 'styled-components';

export const ContactContainer = styled.section`
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

export const Form = styled.form`
	width: 70%;
	margin: 0 auto;
	padding: 0;
	* {
		width: 100%;
		box-sizing: border-box;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	label {
		font-size: 2rem;
		margin: 5px 0;
		padding: 10px 0 0 0;
	}
	@media (max-width: 1100px) {
		max-width: 90%;
	}
`;

export const Input = styled.input`
	font-size: 1.55rem;
	margin: 5px 0;
	border: 0;
	border-bottom: 3px solid rgb(105, 128, 221);
	padding: 10px;
	background: none;
	color: #fff;
`;

export const Textarea = styled.textarea`
	display: block;
	background: rgb(42, 44, 53);
	color: #fff;
	border: 0;
	border-radius: 5px;
	font-size: 1.35rem;
	height: 175px;
	padding: 10px;
`;

export const SubmitButton = styled.input`
	display: block;
	background: rgb(42, 44, 53);
	color: rgb(105, 128, 221);
	font-family: 'Bebas Neue', sans-serif;
	margin: 15px 0;
	padding: 10px;
	border: 0;
	border-left: 3px solid rgb(105, 128, 221);
	border-bottom: 3px solid rgb(105, 128, 221);
	border-radius: 5px;
	cursor: pointer;
	text-align: center;
	font-size: 2rem;
	:focus {
		outline: none;
		animation: push 0.3s linear;
	}
	@keyframes push {
		0% {
			border-left: 3px solid rgb(105, 128, 221);
			border-bottom: 3px solid rgb(105, 128, 221);
		}
		50% {
			border: 0;
			transform: translate(-3px, 3px);
		}
		100% {
			border-left: 3px solid rgb(105, 128, 221);
			border-bottom: 3px solid rgb(105, 128, 221);
		}
	}
`;
