import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Logo, CigaretteBurn } from './header-styles';
import { StyledLink, StyledAnchorLink } from '../nav/nav-styles';
import { Nav } from '../index';

export default function Header() {
	let location = useLocation();

	return (
		<header
			style={{
				background: `rgb(28,30,36)`,
				width: `100vw`,
				display: `flex`,
				justifyContent: `center`,
				alignItems: `center`,
			}}
		>
			<CigaretteBurn />
			<Logo>
				<Link to="/" id="header">
					<h1>
						The Cult <span style={{ color: `rgb(105,128,221)` }}>|</span>{' '}
						<span style={{ fontSize: `1.5rem`, fontWeight: 200 }}>
							{' '}
							the official fan site of
						</span>
						<br />
						<span
							style={{
								marginLeft: `15px`,
								display: `inline-block`,
								transform: `rotate(-3deg)`,
								fontSize: `4.5rem`,
								fontWeight: 300,
							}}
						>
							CHUCK PALAHNIUK
						</span>
						<br />
						<span
							style={{ float: `right`, fontSize: `1.5rem`, fontWeight: 200 }}
						>
							<span style={{ color: `rgb(105,128,221)` }}>[ </span>
							paula-nick
							<span style={{ color: `rgb(105,128,221)` }}> ]</span>
						</span>
					</h1>
				</Link>
				<Nav>
					<li style={{ listStyle: `none` }}>
						<StyledLink to="/" current={location.pathname === '/'}>
							Home
						</StyledLink>
					</li>
					<li style={{ listStyle: `none` }}>
						<StyledLink to="/books" current={location.pathname === '/books'}>
							Books
						</StyledLink>
					</li>
					<li style={{ listStyle: `none` }} cy-data="about">
						<StyledLink to="/chuck" current={location.pathname === '/chuck'}>
							Chuck
						</StyledLink>
					</li>
					<li style={{ listStyle: `none` }}>
						<StyledAnchorLink
							href="https://chuckpalahniuk.threadless.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Merch
						</StyledAnchorLink>
					</li>
				</Nav>
			</Logo>
		</header>
	);
}
