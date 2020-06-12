import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Logo } from './header-styles';
import { StyledLink } from '../nav/nav-styles';
import { Nav } from '../index';

export default function Header() {
  let location = useLocation();

  return (
    <header style={{ background: `rgb(28,30,36)`, width: `100vw`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>
      <Logo>
        <Link to='/' id='header'>
          <h1>The Cult{" "}
            <span style={{color: `rgb(105,128,221)` }}>|</span>{" "}
            <span style={{fontSize: `1.5rem`, fontWeight: 200}}> the official fan site of</span>
            <br />
            <span style={{
              marginLeft: `15px`, 
              display: `inline-block`, 
              transform: `rotate(-3deg)`, 
              fontSize: `4.5rem`, 
              fontWeight: 300,
              // color: `rgb(105,128,221)`, 
              // textShadow:
              //   `0 0 5px #fff,
              //   0 0 10px #fff,
              //   0 0 20px #fff,
              //   0 0 40px #0ff,
              //   0 0 80px #0ff,
              //   0 0 90px #0ff,
              //   0 0 100px #0ff,
              //   0 0 150px #0ff`
              }}
            >
              CHUCK PALAHNIUK
            </span>
            <br />
            <span style={{float: `right`, fontSize: `1.5rem`, fontWeight: 200}}>
              <span style={{color: `rgb(105,128,221)` }}>[{" "}</span>
                paula-nick
              <span style={{color: `rgb(105,128,221)` }}>{" "}]</span>
            </span>
          </h1>
        </Link>
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
