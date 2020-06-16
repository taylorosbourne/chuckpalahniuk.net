import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		justify-self: end;
		font-size: 2rem;
		background: rgb(28, 30, 36);
		transform: scale(0.88);
	}
`;

export const StyledLink = styled(Link)<{ current: boolean }>`
	border-radius: 5px;
	margin-left: 15px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	padding: 1rem 3rem;
	display: flex;
	align-items: center;
	position: relative;
	text-transform: uppercase;
	font-weight: 900;
	font-size: 1.15rem;
	cursor: pointer;
	color: rgb(242, 242, 242);
	font-weight: 800;
	min-height: 48px;
	@media (max-width: 700px) {
		font-size: 1rem;
		padding: 0.5rem;
	}
	&:hover {
		background: rgb(39, 42, 50);
		color: rgb(105, 128, 221);
	}
	${(props) =>
		props.current &&
		css`
			background: rgb(39, 42, 50);
			color: rgb(105, 128, 221);
		`}
`;

export const StyledAnchorLink = styled.a`
	border-radius: 5px;
	margin-left: 15px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	padding: 1rem 3rem;
	display: flex;
	align-items: center;
	position: relative;
	text-transform: uppercase;
	font-weight: 900;
	font-size: 1.15rem;
	cursor: pointer;
	color: rgb(242, 242, 242);
	font-weight: 800;
	min-height: 48px;
	@media (max-width: 700px) {
		font-size: 1rem;
		padding: 0.5rem;
	}
	&:hover {
		background: rgb(39, 42, 50);
		color: rgb(105, 128, 221);
	}
`;
