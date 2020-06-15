import React, { useState } from 'react';

import { BookCard } from '../../components';
import { Button, LatestContainer, TabContainer, Tab, BookCardContainer } from './books-styles';
import { ReactComponent as Amazon } from '../../assets/icons/amazon.svg';
import { ReactComponent as Goodreads } from '../../assets/icons/goodreads.svg';
import inventionOfSound from '../../assets/inventionofsound.jpeg'


export default function Books() {
  const [activeTab, setActiveTab] = useState('view all');
  return (
    <>
      <section
        style={{
          margin: `0 auto`,
          background: `rgb(28,30,36)`,
          padding: `22px`,
          marginTop: `10px`,
          maxWidth: `100vw`,
          paddingBottom: `54px`
        }}
      >
        <div style={{width: `80%`, margin: `0 auto`}}>
          <h2 style={{fontSize: `2.5rem`, padding: `5px`, borderLeft: `3px solid rgb(105,128,221)`}}>Upcoming</h2>
          <LatestContainer>
            <img style={{borderRadius: `5px`}} src={inventionOfSound} alt='upcoming-novel' />
            <div style={{width: `50%`}}>
              <h3 style={{fontSize: `2.25rem`, padding: `5px`, marginTop: 0, borderLeft: `3px solid rgb(105,128,221)`}}>The Invention of Sound</h3>
              <small style={{fontSize: `1rem`, marginTop: `5px`}}>Releasing{" "}<span style={{color: `rgb(105,128,221)`}}>September 8, 2020</span></small>
              <p style={{fontSize: `2.05rem`}}>His first novel with Grand Central, Palahniuk says The Invention of Sound is about <span style={{fontStyle: `italic`, color: `rgb(105,128,221)`}}>“a foley artist looking for the ultimate scream, and the hideous lengths she’ll go to in order to find it.”</span></p>
              <div style={{display: `flex`, justifyContent: `flex-start`, alignItems: `center`}}>
                <Button><Amazon style={{fill: `rgb(105,128,221)`, margin: `0 5px 0 0`}} /><span>Purchase on Amazon</span></Button>
                <Button><Goodreads style={{fill: `rgb(105,128,221)`, margin: `0 5px`}} /><span>See on Goodreads</span></Button>
              </div>
            </div>
          </LatestContainer>
        </div>
      </section>
      <section
        style={{
          margin: `0 auto`,
          padding: `22px`,
          marginTop: `10px`,
          maxWidth: `100vw`
        }}
      >
        <TabContainer>
          <Tab isActive={activeTab === 'view all'} onClick={() => setActiveTab('view all')}>View All</Tab>
          <Tab isActive={activeTab === 'fiction'} onClick={() => setActiveTab('fiction')}>Novels & Story Compilations</Tab>
          <Tab isActive={activeTab === 'short fiction'} onClick={() => setActiveTab('short fiction')}>Short Fiction</Tab>
          <Tab isActive={activeTab === 'non-fiction'} onClick={() => setActiveTab('non-fiction')}>Non-Fiction & Essays</Tab>
          <Tab isActive={activeTab === 'graphic novel'} onClick={() => setActiveTab('graphic novel')}>Graphic Novels</Tab>
        </TabContainer>
        <BookCardContainer>
          <BookCard activeTab={activeTab} />
        </BookCardContainer>
      </section>
    </>
  );
};
