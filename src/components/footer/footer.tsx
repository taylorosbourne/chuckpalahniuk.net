import React from 'react';

import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Amazon } from '../../assets/icons/amazon.svg';
import { ReactComponent as Goodreads } from '../../assets/icons/goodreads.svg';
import darkhorse from '../../assets/icons/darkhorse.png';
import { StyledFooter, LinkTitle, ListLink, FlexContainer } from './footer-styles';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <FlexContainer>
        <ul>
          <LinkTitle>Valuable Links</LinkTitle>
          <ListLink>Contact Us</ListLink>
          <ListLink>Terms of Service</ListLink>
          <ListLink>
            <a href='https://twitter.com/chuckpalahniuk' target='_blank' rel="noopener noreferrer"><Twitter style={{fill: `rgb(242,242,242)`}} /></a>
            <a href='https://www.facebook.com/chuckpalahniuk' target='_blank' rel="noopener noreferrer"><Facebook style={{fill: `rgb(242,242,242)`}} /></a>
            <a href='https://www.instagram.com/ChuckPalahniuk/' target='_blank' rel="noopener noreferrer"><Instagram style={{fill: `rgb(242,242,242)`}} /></a>
            <a href='https://www.amazon.com/Chuck-Palahniuk/e/B000APV8ME/ref=dp_byline_cont_ebooks_1' target='_blank' rel="noopener noreferrer"><Amazon style={{fill: `rgb(242,242,242)`}} /></a>
            <a href='https://www.goodreads.com/author/show/2546.Chuck_Palahniuk' target='_blank' rel="noopener noreferrer"><Goodreads style={{fill: `rgb(242,242,242)`, maxWidth: `24px`, maxHeight: `24px`}} /></a>
            <a href='https://www.darkhorse.com/Search/Chuck%20Palahniuk' target='_blank' rel="noopener noreferrer"><img src={darkhorse} alt='darkhorse' style={{maxHeight: `24px`, padding: 0, margin: 0}} /></a>
          </ListLink>
        </ul>
        {/* <ul>
          <LinkTitle>Valuable Links</LinkTitle>
          <ListLink>Contact Us</ListLink>
          <ListLink>Terms of Service</ListLink>
          <ListLink>
            <Twitter style={{fill: `rgb(242,242,242)`}} />
            <Facebook style={{fill: `rgb(242,242,242)`}} />
            <Instagram style={{fill: `rgb(242,242,242)`}} />
            <Amazon style={{fill: `rgb(242,242,242)`}} />
            <Goodreads style={{fill: `rgb(242,242,242)`}} />
            <Comic style={{fill: `rgb(242,242,242)`}} />
          </ListLink>
        </ul> */}
        <ul style={{ fontWeight: 100, width: `50%` }}>
          <LinkTitle>Important Disclaimer</LinkTitle>
          <li style={{ padding: `5px`, fontSize: `1.25rem`, listStyle: `none` }}> Although this is Chuck Palahniuk’s official website, we are in essence, more an official ‘fansite.’ Chuck Palahniuk himself does not own nor run this website. Nor did he create it. It was started by Dennis Widmyer, who is the webmaster and editor of most of the content. Chuck Palahniuk himself should not be held accountable nor liable for any of the content posted on this website. The opinions expressed in the news updates, content pages and message boards are not the opinions of Chuck Palahniuk nor his publishers. If you are trying to contact Chuck Palahniuk, sending emails to this website will not get you there.</li>
        </ul>
      </FlexContainer>
      <span style={{display: `inline-block`, margin: `5px 2%`}}>&#169; {year} Chuck Palhniuk</span>
    </StyledFooter>
  );
};
