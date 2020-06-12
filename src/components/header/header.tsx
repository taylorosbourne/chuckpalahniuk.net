import React from 'react';
import { useLocation } from 'react-router-dom';

import { Logo } from './header-styles';
import { StyledLink } from '../nav/nav-styles';
import { Nav } from '../index';

export default function Header() {
  let location = useLocation();

  return (
    <header style={{ background: `rgb(28,30,36)`, width: `100vw`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>
      <Logo>
        <h1>The Cult{" "}
          <span style={{color: `rgb(105,128,221)` }}>|</span>{" "}
          <span style={{fontSize: `1.5rem`, fontWeight: 200}}> the official fan site of</span>
          <br />
          <span style={{marginLeft: `15px`, display: `inline-block`, transform: `rotate(-3deg)`, fontSize: `4.5rem`, fontWeight: 300}}>CHUCK PALAHNIUK</span>
          <br />
          <span style={{float: `right`, fontSize: `1.5rem`, fontWeight: 200}}>
            <span style={{color: `rgb(105,128,221)` }}>[{" "}</span>
              paula-nick
            <span style={{color: `rgb(105,128,221)` }}>{" "}]</span>
          </span>
        </h1>
        <Nav>
          <StyledLink to='/' currentpage={location.pathname === '/'}>Home</StyledLink>
          <StyledLink to='/books' currentpage={location.pathname === '/books'}>Books</StyledLink>
          <StyledLink to='/chuck' currentpage={location.pathname === '/chuck'}>Chuck</StyledLink>
          <StyledLink to='/merch' currentpage={location.pathname === '/merch'}>Merch</StyledLink>
        </Nav>
      </Logo>
    </header>
  );
};
