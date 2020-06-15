import React from 'react';

import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
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
            <Twitter style={{fill: `rgb(242,242,242)`}} />
            <Facebook style={{fill: `rgb(242,242,242)`}} />
            <Instagram style={{fill: `rgb(242,242,242)`}} />
          </ListLink>
        </ul>
        <ul>
          <LinkTitle>Valuable Links</LinkTitle>
          <ListLink>Contact Us</ListLink>
          <ListLink>Terms of Service</ListLink>
          <ListLink>
            <Twitter style={{fill: `rgb(242,242,242)`}} />
            <Facebook style={{fill: `rgb(242,242,242)`}} />
            <Instagram style={{fill: `rgb(242,242,242)`}} />
          </ListLink>
        </ul>
        <ul style={{ fontWeight: 100, width: `50%` }}>
          <LinkTitle>Important Disclaimer</LinkTitle>
          <li style={{ padding: `5px`, fontSize: `1.25rem`, listStyle: `none` }}> Although this is Chuck Palahniuk’s official website, we are in essence, more an official ‘fansite.’ Chuck Palahniuk himself does not own nor run this website. Nor did he create it. It was started by Dennis Widmyer, who is the webmaster and editor of most of the content. Chuck Palahniuk himself should not be held accountable nor liable for any of the content posted on this website. The opinions expressed in the news updates, content pages and message boards are not the opinions of Chuck Palahniuk nor his publishers. If you are trying to contact Chuck Palahniuk, sending emails to this website will not get you there.</li>
        </ul>
      </FlexContainer>
      <span style={{display: `inline-block`, margin: `5px 2%`}}>&#169; {year} Chuck Palhniuk</span>
    </StyledFooter>
  );
};
