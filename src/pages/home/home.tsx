import React from 'react';

import bannerPortrait from '../../assets/bannerportrait.jpeg';
import { HeadImageContainer } from './home-styles';

export default function Home() {
  return (
    <>
      <HeadImageContainer>
        <div style={{width: `100%`, height: `80vh`, backgroundImage: `url('${bannerPortrait}')`,  backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `flex-start`}}>
          <mark style={{ margin: `5px 25px`, padding: `0px 22px`, fontSize: `4rem`, maxWidth: `500px`, color: `#fff`, borderLeft: `8px solid rgb(105,128,221)`, background: `rgba(28,30,36,0.9)`}}>Find out what you're</mark>
          <mark style={{margin: `5px 25px`, padding: `0px 22px`, fontSize: `4rem`, maxWidth: `500px`, color: `#fff`, borderLeft: `8px solid rgb(105,128,221)`, background: `rgba(28,30,36,0.9)`}}>afraid of and go live</mark>
          <mark style={{ margin: `5px 25px`, padding: `0px 22px`, fontSize: `4rem`, maxWidth: `500px`, color: `#fff`, borderLeft: `8px solid rgb(105,128,221)`, background: `rgba(28,30,36,0.9)`}}>there.</mark>
          <cite>- Chuck Palahniuk</cite>
        </div>
      </HeadImageContainer>
    </>
  );
};