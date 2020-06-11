import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


import lookingUp from '../../assets/lookingup.jpeg';
import tattoo from '../../assets/tattoo.jpg';
import tattooBanner from '../../assets/tattoobanner.jpeg';
import { BannerImage } from './about-styles';

export default function About() {
  const [isTattoo, setIsTattoo] = useState(false);
  let location = useLocation()

  console.log(location);

  return (
    <>
      <section style={{ background: `rgb(28,30,36)`, width: `80%`, padding: `22px`, margin: `0 auto` }}>
        <div 
          // style={{display: `flex`, justifyContent: `space-around`, alignItems: `flex-start`}}
        >
          <img onClick={() => setIsTattoo(!isTattoo)} src={isTattoo ? tattoo : lookingUp} alt='chuck-palahniuk' style={{borderRadius: `5px`, width: `500px`, float: `right`}} />
          <div style={{width: `50%`}}>
            <h2 style={{fontSize: `2.5rem`, padding: `5px`, borderLeft: `3px solid rgb(105,128,221)`}}>Bio</h2>
            <small style={{color: `rgb(105,128,221)`, fontSize: `1.25rem`}}>written for ChuckPalahniuk.net by Joshua Chaplinsky</small>
            <p style={{fontSize: `1.25rem`}}>Truth is stranger than fiction, at least for those blessed with interesting lives. The rest of us have no choice but to live vicariously through their stories. In the case of bestselling cult author Chuck Palahniuk, the embellishment of his exploits by fans has made it hard to tell exactly where reality ends and the storytelling begins. There are those who would have us believe he entered this world kicking and screaming, brandishing a pen, when in fact he comes from much more humble (albeit interesting) beginnings.</p>
            <p style={{fontSize: `1.25rem`}}>Born February 21, 1962, Charles Michael Palahniuk spent his early childhood living out of a mobile home in Burbank, Washington. His parents, Carol and Fred Palahniuk, separated and divorced when he was fourteen, leaving Chuck and his siblings to spend much of their time on their maternal grandparent’s cattle ranch.</p>
            <p style={{fontSize: `1.25rem`}}>The surname, Palahniuk, which is Ukrainian in origin, can be spelled and pronounced numerous different ways. According to Chuck, his paternal grandparents decided to pronounce it as a combination of their first names, Paula and Nick. But Chuck never knew his father’s parents. As recounted in an interview with The Independent, his grandfather shot and killed his grandmother after an argument over the cost of a sewing machine. Chuck’s father, who was three at the time, watched from under a bed as Nick Palahniuk searched the house for additional victims, before turning the gun on himself. In the article, Chuck is quoted as saying, "My grandfather was hit over the head by a crane boom in Seattle. Some of the family claimed he was never a violent, crazy person before that. Some say he was. It depends who you believe." The tragic event is depicted on the U.S. cover of Stranger Than Fiction.</p>
          </div>
        </div>
      </section>
      <section style={{ background: `rgb(28,30,36)`, width: `80%`, padding: `22px`, margin: `0 auto` }}>
        <BannerImage src={tattooBanner} alt='chuck-palahniuk' />
      </section>
    </>
  );
};
