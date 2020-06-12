import React from 'react';

import bannerPortrait from '../../assets/bannerportrait.jpeg';
import books from '../../assets/books.jpeg';
import tattoo from '../../assets/tattoo.jpg';
import shirt from '../../assets/shirt.png';
import { HeadImageContainer, CardContainer, Card, Mark, BannerHeader } from './home-styles';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <HeadImageContainer>
        <div style={{animation: `1.5s fadeIn ease-in`, width: `100%`, height: `80vh`, backgroundImage: `url('${bannerPortrait}')`,  backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `flex-start`}}>
          <Mark fontSize='4rem'>Find out what you're</Mark>
          <Mark fontSize='4rem'>afraid of and go live</Mark>
          <Mark fontSize='4rem'>there.</Mark>
          <cite>- Chuck Palahniuk</cite>
        </div>
      </HeadImageContainer>
      <section  style={{margin: `10px auto`}}>
        <CardContainer>
          <Card imgUrl={books}>
            <BannerHeader>Books</BannerHeader>
            <Mark fontSize='1.85rem'>Chuck's books include fifteen original</Mark>
            <Mark fontSize='1.85rem'>novels, as well four works of non-fiction,</Mark>
            <Mark fontSize='1.85rem'>and over a dozen short fiction pieces.</Mark>
            <a 
              href='https://www.amazon.com/Chuck-Palahniuk/e/B000APV8ME?ref=sr_ntt_srch_lnk_1&qid=1578438672&sr=8-1&_encoding=UTF8&tag=officchuckpalaha&linkCode=ur2&linkId=8f35a9001574e3ef145e4b0225f4a557&camp=1789&creative=9325'
              target='_blank'
              rel='noopener noreferrer'
            >
              Shop Books
            </a>
          </Card>
          <Card imgUrl={tattoo}>
            <BannerHeader>Chuck</BannerHeader>
            <Mark fontSize='1.85rem'>Born February 21, 1962, [Chuck]</Mark>
            <Mark fontSize='1.85rem'>spent his early childhood living out of a</Mark>
            <Mark fontSize='1.85rem'>mobile home in Burbank, Washington...</Mark>
            <Link to='/chuck'>Read More</Link>
          </Card>
          <Card imgUrl={shirt}>
            <BannerHeader>Merch</BannerHeader>
            <Mark fontSize='1.85rem'>Chuck's store includes: shirts, outerwear,</Mark>
            <Mark fontSize='1.85rem'>accessories and more. Because sometimes</Mark>
            <Mark fontSize='1.85rem'>you are your fucking khakis.</Mark>
            <a
              href='https://chuckpalahniuk.threadless.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Shop Merch
            </a>
          </Card>
        </CardContainer>
      </section>
    </>
  );
};