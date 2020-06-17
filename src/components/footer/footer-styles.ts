import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background: rgb(28, 30, 36);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	color: #fff;
`;

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 98%;
	padding-top: 15px;
	color: #fff;
	@media (max-width: 1300px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const ListLink = styled.li`
	cursor: pointer;
	padding: 5px;
	font-size: 1.25rem;
	list-style: none;
	color: #fff;
	:hover {
		color: rgb(105, 128, 221);
		a {
			color: rgb(105, 128, 221);
		}
	}
	* {
		margin: 0 2.5px;
	}
	a {
		margin: 5px;
		padding: 0;
		color: #fff;
		text-decoration: none;
		img {
			background: rgb(242, 242, 242);
		}
	}
	a:hover {
		* {
			fill: rgb(105, 128, 221);
		}
		img {
			background: rgb(105, 128, 221);
		}
	}
	*:hover {
		fill: rgb(105, 128, 221);
	}
`;

export const LinkTitle = styled.li`
	padding: 5px;
	font-size: 1.55rem;
	list-style: none;
	border-left: 3px solid rgb(105, 128, 221);
	color: #fff;
`;
