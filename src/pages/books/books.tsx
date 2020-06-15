import React from 'react';

import { Button } from './books-styles';
import { ReactComponent as Amazon } from '../../assets/icons/amazon.svg';
import { ReactComponent as Goodreads } from '../../assets/icons/goodreads.svg';
import inventionOfSound from '../../assets/inventionofsound.jpeg';
import fightClub from '../../assets/fightclub.jpeg';
import survivor from '../../assets/survivor.jpeg';
import invisibleMonsters from '../../assets/invisiblemonsters.jpeg';
import choke from '../../assets/choke.png';
import lullaby from '../../assets/lullaby.jpeg';
import diary from '../../assets/diary.jpeg';
import haunted from '../../assets/haunted.jpeg';
import rant from '../../assets/rant.jpeg';
import snuff from '../../assets/snuff.jpeg';
import pygmy from '../../assets/pygmy.jpeg';
import tellAll from '../../assets/tellall.jpeg';
import damned from '../../assets/damned.jpeg';
import imremix from '../../assets/imremix.jpeg';
import doomed from '../../assets/doomed.jpeg';
import burntTongues from '../../assets/burnttongues.jpeg';
import beautfulYou from '../../assets/beautifulyou.jpeg';
import makeSomethingUp from '../../assets/makesomethingup.jpeg';
import phoenix from '../../assets/phoenix.jpg';
import bait from '../../assets/bait.jpeg';
import legacy from '../../assets/legacy.png';
import adjustmentDay from '../../assets/adjustmentday.jpeg';

interface Book {
  title: string;
  released: number;
  img: string;
  amazonLink: string;
  goodreadsLink: string;
  description: string;
  fiction: boolean;
}

export default function Books() {
  const bookArr: Book[] = [
    {
      title: `Fight Club`,
      released: 1996,
      img: fightClub,
      amazonLink: `https://www.amazon.com/gp/product/B000U0O9FM/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0`,
      goodreadsLink: `https://www.goodreads.com/book/show/36236124-fight-club`,
      description: `Chuck Palahniuk showed himself to be his generation’s most visionary satirist in this, his first book. Fight Club’s estranged narrator leaves his lackluster job when he comes under the thrall of Tyler Durden, an enigmatic young man who holds secret after-hours boxing matches in the basement of bars. There, two men fight "as long as they have to." This is a gloriously original work that exposes the darkness at the core of our modern world.`,
      fiction: true,
    },
    {
      title: `Survivor`,
      released: 1999,
      img: survivor,
      amazonLink: `https://www.amazon.com/gp/product/B004SOBLIE/ref=dbs_a_def_rwt_bibl_vppi_i6`,
      goodreadsLink: `https://www.goodreads.com/book/show/36236123-survivor`,
      description: `From the author of the underground sensation Fight Club comes this wickedly incisive second novel, a mesmerizing, unnerving, and hilarious vision of cult and post-cult life. [...] Not since Kurt Vonnegut's Mother Night and Jerzy Kosinski's Being There has there been as dark and telling a satire on the wages of fame and the bedrock lunacy of the modern world. Unpredictable, compelling, and unforgettable, Survivor is Chuck Palahniuk at his deadpan peak; and it cements his place as one of the most original writers in fiction today.`,
      fiction: true,
    },
    {
      title: `Invisible Monsters`,
      released: 1999,
      img: invisibleMonsters,
      amazonLink: `https://www.amazon.com/gp/product/B004SO5SD8/ref=dbs_a_def_rwt_bibl_vppi_i2`,
      goodreadsLink: `https://www.goodreads.com/book/show/36236123-survivor`,
      description: `She's a catwalk model who has everything: a boyfriend, a career, a loyal best friend. But when a sudden motor 'accident' leaves her disfigured and incapable of speech, she goes from being the beautiful centre of attention to being an invisible monster, so hideous that no one will acknowledge she exists.  Enter Brandy Alexander, Queen Supreme, one operation away from being a real woman, who will teach her that reinventing yourself means erasing your past and making up something better, and that salvation hides in the last place you'll ever want to look.`,
      fiction: true,
    },
    {
      title: `Choke`,
      released: 2001,
      img: choke,
      amazonLink: `https://www.amazon.com/gp/product/B000QCS9NM/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i4`,
      goodreadsLink: `https://www.goodreads.com/book/show/29059.Choke`,
      description: `Victor Mancini, a medical-school dropout, is an antihero for our deranged times. Needing to pay elder care for his mother, Victor has devised an ingenious scam: he pretends to choke on pieces of food while dining in upscale restaurants. He then allows himself to be “saved” by fellow patrons who, feeling responsible for Victor’s life, go on to send checks to support him. When he’s not pulling this stunt, Victor cruises sexual addiction recovery workshops for action, visits his addled mom, and spends his days working at a colonial theme park. His creator, Chuck Palahniuk, is the visionary we need and the satirist we deserve.`,
      fiction: true,
    },
    {
      title: `Lullaby`,
      released: 2002,
      img: lullaby,
      amazonLink: `https://www.amazon.com/gp/product/B0013KAJR0/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i10`,
      goodreadsLink: `https://www.goodreads.com/book/show/22206.Lullaby`,
      description: `Carl Streator is a reporter investigating Sudden Infant Death Syndrome for a soft-news feature. After responding to several calls with paramedics, he notices that all the dead children were read the same poem from the same library book the night before they died. It's a 'culling song' - an ancient African spell for euthanising sick or old people. Researching it, he meets a woman who killed her own child with it accidentally. He himself accidentally killed his own wife and child with the same poem twenty years earlier. Together, the man and the woman must find and destroy all copies of this book, and try not to kill every rude sonofabitch that gets in their way. Lullaby is a comedy/drama/tragedy. In that order. It may also be Chuck Palahniuk's best book yet.`,
      fiction: true,
    },
    {
      title: `Diary`,
      released: 2003,
      img: diary,
      amazonLink: `https://www.amazon.com/gp/product/B000FCK4TA/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i11`,
      goodreadsLink: `https://www.goodreads.com/book/show/22284.Diary`,
      description: `Misty Wilmot has had it. Once a promising young artist, she’s now stuck on an island ruined by tourism, drinking too much and working as a waitress in a hotel. Her husband, a contractor, is in a coma after a suicide attempt, but that doesn’t stop his clients from threatening Misty with lawsuits over a series of vile messages they’ve found on the walls of houses he remodeled.  Suddenly, though, Misty finds her artistic talent returning as she begins a period of compulsive painting. Inspired but confused by this burst of creativity, she soon finds herself a pawn in a larger conspiracy that threatens to cost hundreds of lives. What unfolds is a dark, hilarious story from America’s most inventive nihilist, and Palahniuk’s most impressive work to date.`,
      fiction: true,
    },
    {
      title: `Haunted`,
      released: 2005,
      img: haunted,
      amazonLink: `https://www.amazon.com/gp/product/B000FCK40O/ref=dbs_a_def_rwt_bibl_vppi_i3`,
      goodreadsLink: `https://www.goodreads.com/book/show/22288.Haunted`,
      description: `Haunted is a novel made up of stories: twenty-three of the most horrifying, hilarious, mind-blowing, stomach-churning tales you'll ever encounter.  The stories are told by people who have all answered an ad headlined 'Artists Retreat: Abandon your life for three months'. They are led to believe that here they will leave behind all the distractions of 'real life' that are keeping them from creating the masterpiece that is in them.  But 'here' turns out to be a cavernous and ornate old theater where they are utterly isolated from the outside world - and where heat and power and, most importantly, food are in increasingly short supply. And the more desperate the circumstances become, the more desperate the stories they tell.`,
      fiction: true,
    },
    {
      title: `Rant`,
      released: 2007,
      img: rant,
      amazonLink: `https://www.amazon.com/gp/product/B00199B2YO/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i8`,
      goodreadsLink: `https://www.goodreads.com/book/show/22285.Rant`,
      description: `Buster “Rant” Casey just may be the most efficient serial killer of our time. A high school rebel, Rant Casey escapes from his small town home for the big city where he becomes the leader of an urban demolition derby called Party Crashing. Rant Casey will die a spectacular highway death, after which his friends gather the testimony needed to build an oral history of his short, violent life.`,
      fiction: true,
    },
    {
      title: `Snuff`,
      released: 2008,
      img: snuff,
      amazonLink: `https://www.amazon.com/gp/product/B0010SEMGY/ref=dbs_a_def_rwt_bibl_vppi_i15`,
      goodreadsLink: `https://www.goodreads.com/book/show/1840511.Snuff`,
      description: `Cassie Wright, porn priestess, intends to cap her legendary career by breaking the world record for serial fornication. On camera. With six hundred men. Snuff unfolds from the perspectives of Mr. 72, Mr. 137, and Mr. 600, who await their turn on camera in a very crowded green room. This wild, lethally funny, and thoroughly researched novel brings the huge yet underacknowledged presence of pornography in contemporary life into the realm of literary fiction at last. Who else but Chuck Palahniuk would dare do such a thing? Who else could do it so well, so unflinchingly, and with such an incendiary (you might say) climax?`,
      fiction: true,
    },
    {
      title: `Pygmy`,
      released: 2009,
      img: pygmy,
      amazonLink: `https://www.amazon.com/gp/product/B001NLL9IW/ref=dbs_a_def_rwt_bibl_vppi_i12`,
      goodreadsLink: `https://www.goodreads.com/book/show/4601396-pygmy`,
      description: `“Begins here first account of operative me, agent number 67 on arrival Midwestern American airport greater _____ area. Flight _____. Date _____. Priority mission top success to complete. Code name: Operation Havoc.”  Thus speaks Pygmy, one of a handful of young adults from a totalitarian state sent to the United States, disguised as exchange students, to live with typical American families and blend in, all the while planning an unspecified act of massive terrorism. Palahniuk depicts Midwestern life through the eyes of this thoroughly indoctrinated little killer, who hates us with a passion, in this cunning double-edged satire of an American xenophobia that might, in fact, be completely justified. For Pygmy and his fellow operatives are cooking up something big, something truly awful, that will bring this big dumb country and its fat dumb inhabitants to their knees.  It’s a comedy. And a romance.`,
      fiction: true,
    },
    {
      title: `Tell-All`,
      released: 2010,
      img: tellAll,
      amazonLink: `https://www.amazon.com/gp/product/B0036S4CRK/ref=dbs_a_def_rwt_bibl_vppi_i20`,
      goodreadsLink: `https://www.goodreads.com/book/show/6855294-tell-all`,
      description: `“The hyperactive love child of Page Six and Whatever Happened to Baby Jane? caught in a tawdry love triangle with The Fan. Even Kitty Kelly will blush.  Soaked, nay, marinated in the world of vintage Hollywood, Tell-All is a Sunset Boulevard–inflected homage to Old Hollywood when Bette Davis and Joan Crawford ruled the roost; a veritable Tourette’s syndrome of rat-tat-tat  name-dropping, from the A-list to the Z-list; and a merciless  send-up of Lillian Hellman’s habit of butchering the truth that will have Mary McCarthy cheering from the beyond.  Our Thelma Ritter–ish narrator is Hazie Coogan, who for decades has tended to the outsized needs of Katherine “Miss Kathie”  Kenton—veteran of multiple marriages, career comebacks, and cosmetic surgeries. But danger arrives with gentleman caller Webster Carlton Westward III, who worms his way into Miss Kathie’s heart (and boudoir). Hazie discovers that this bounder has already written a celebrity tell-all memoir foretelling Miss Kathie’s death in a forthcoming Lillian Hellman–penned musical extravaganza; as the body count mounts, Hazie must execute a plan to save Katherine Kenton for her fans—and for posterity.  Tell-All is funny, subversive, and fascinatingly clever. It’s wild, it’s wicked, it’s  boldfaced—it’s vintage Chuck.`,
      fiction: true,
    },
    {
      title: `Damned`,
      released: 2011,
      img: damned,
      amazonLink: `https://www.amazon.com/gp/product/B004KPM1LM/ref=dbs_a_def_rwt_bibl_vppi_i9`,
      goodreadsLink: `https://www.goodreads.com/book/show/9912994-damned`,
      description: `Madison, a thirteen year old girl, finds herself in Hell, unsure of why she will be there for all eternity, but tries to make the best of it.  The author described the novel as "if The Shawshank Redemption had a baby by The Lovely Bones and it was raised by Judy Blume." And "it's kind of like The Breakfast Club set in Hell."`,
      fiction: true,
    },
    {
      title: `Invisible Monsters Remix`,
      released: 2012,
      img: imremix,
      amazonLink: `https://www.amazon.com/gp/product/B007HXF5GM/ref=dbs_a_def_rwt_hsch_vapi_tkin_p2_i9`,
      goodreadsLink: `https://www.goodreads.com/book/show/12813565-invisible-monsters-remix?from_search=true&from_srp=true&qid=GrLzjd85ou&rank=1`,
      description: `Injected with new material and special design elements, Invisible Monsters Remix fulfills Chuck Palahniuk’s original vision for his 1999 novel, turning a daring satire on beauty and the fashion industry into an even more wildly unique reading experience. Palahniuk’s fashion-model protagonist has it all—boyfriend, career, loyal best friend—until an accident destroys her face, her ability to speak, and her self-esteem. Enter Brandy Alexander, Queen Supreme, one operation away from becoming a bona-fide woman. Laced in are new chapters of memoir and further scenes with the book’s characters. Readers will jump between chapters, reread the book to understand the dissolve between fiction and fact, and decipher the playful book design, embarking on a ride they’ll never forget.`,
      fiction: true,
    },
    {
      title: `Doomed`,
      released: 2013,
      img: doomed,
      amazonLink: `https://www.amazon.com/gp/product/B00CCPIJ6I/ref=dbs_a_def_rwt_bibl_vppi_i19`,
      goodreadsLink: `https://www.goodreads.com/book/show/17262208-doomed`,
      description: `Madison Spencer, the liveliest and snarkiest dead girl in the universe, continues the afterlife adventure begun in Chuck Palahniuk’s bestseller Damned. Just as that novel brought us a brilliant Hell that only he could imagine, Doomed is a dark and twisted apocalyptic vision from this provocative storyteller.  The bestselling Damned chronicled Madison’s journey across the unspeakable (and really gross) landscape of the afterlife to confront the Devil himself. But her story isn’t over yet. In a series of electronic dispatches from the Great Beyond, Doomed describes the ultimate showdown between Good and Evil.`,
      fiction: true,
    },
    {
      title: `Phoenix`,
      released: 2013,
      img: phoenix,
      amazonLink: `https://www.amazon.com/Chuck-Palahniuk/e/B000APV8ME/ref=dp_byline_cont_book_1`,
      goodreadsLink: `https://www.goodreads.com/book/show/17380711-phoenix`,
      description: `Rachel married Ted because he was uncomplicated and loyal. But he was also devoted to his wretched house (done up in black granite, black appliances, even black dishware) and his first love, an old, flatulent cat named Belinda Carlisle. Once Rachel becomes pregnant, Ted reluctantly agrees to move and give up the cat. But the house doesn't sell, and Belinda Carlisle still haunts their home: every day the creature becomes fatter and more malodorous. When the house burns to the ground in a freak conflagration and the couple's daughter, April, is born blind soon thereafter, the marriage is never the same again. Only on a business trip three years later does Rachel begin to reckon with the damage.`,
      fiction: true,
    },
    {
      title: `Burnt Tongues (Editor)`,
      released: 2014,
      img: burntTongues,
      amazonLink: `https://www.amazon.com/gp/product/1605427349/ref=dbs_a_def_rwt_bibl_vppi_i64`,
      goodreadsLink: `https://www.goodreads.com/book/show/20344952-burnt-tongues`,
      description: `Transgressive fiction authors write stories some are afraid to tell. Stories with taboo subjects, unique voices, shocking images—nothing safe or dry.  Burnt Tongues is a collection of transgressive stories selected by a rigorous nomination and vetting process and hand-selected by Chuck Palahniuk, author of Fight Club, as the best of The Cult workshop, his official fan website.  These stories run the gamut from horrific and fantastic to humorous and touching, but each leaves a lasting impression.  Some may say even a scar.`,
      fiction: true,
    },
    {
      title: `Beautiful You`,
      released: 2014,
      img: beautfulYou,
      amazonLink: `https://www.amazon.com/gp/product/B00JYWUHDA/ref=dbs_a_def_rwt_bibl_vppi_i16`,
      goodreadsLink: `https://www.goodreads.com/book/show/19523454-beautiful-you`,
      description: `Penny Harrigan is a low-level associate in a big Manhattan law firm with an apartment in Queens and no love life at all. So it comes as a great shock when she finds herself invited to dinner by one C. Linus Maxwell, a software mega-billionaire and lover of the most gorgeous and accomplished women on earth. After dining at Manhattan's most exclusive restaurant, he whisks Penny off to a hotel suite in Paris, where he proceeds, notebook in hand, to bring her to previously undreamed-of heights of gratification for days on end. What's not to like?`,
      fiction: true,
    },
    {
      title: `Make Something Up`,
      released: 2015,
      img: makeSomethingUp,
      amazonLink: `https://www.amazon.com/gp/product/1101971967/ref=dbs_a_def_rwt_bibl_vppi_i85`,
      goodreadsLink: `https://www.goodreads.com/book/show/22822857-make-something-up`,
      description: `Stories you'll never forget—just try—from literature's favorite transgressive author.  Funny, caustic, bizarre, poignant; these stories represent everything readers have come to love and expect from Chuck Palahniuk. They have all the impact of a sharp blow to the solar plexus, with considerable collateral damage to the funny bone.`,
      fiction: true,
    },
    {
      title: `Bait`,
      released: 2016,
      img: bait,
      amazonLink: `https://www.amazon.com/gp/product/1506703119/ref=dbs_a_def_rwt_bibl_vppi_i54`,
      goodreadsLink: `https://www.goodreads.com/book/show/30641072-bait`,
      description: `New York Times best-selling novelist Chuck Palahniuk (Fight Club, Lullaby) presents the ultimate coloring book for adults with this new collection of short stories, illustrated by some of the most exciting artists in comics and beyond.`,
      fiction: true,
    },
    {
      title: `Legacy`,
      released: 2017,
      img: legacy,
      amazonLink: `https://www.amazon.com/gp/product/1506706150/ref=dbs_a_def_rwt_bibl_vppi_i55`,
      goodreadsLink: `https://www.goodreads.com/book/show/35517083-legacy`,
      description: `An amoral investment banker named Vincent receives an inheritance promising immortality. Unfortunately for Vincent, to obtain immortality he has to contend with a flame-retardant stripper, a ruthless stalker, and a bloodthirsty horde of aspiring immortals dead set in their desire to separate Vincent from his destiny.`,
      fiction: true,
    },
    {
      title: `Adjustment Day`,
      released: 2019,
      img: adjustmentDay,
      amazonLink: `https://www.amazon.com/gp/product/B0777T1T89/ref=dbs_a_def_rwt_bibl_vppi_i5`,
      goodreadsLink: `https://www.goodreads.com/book/show/36349731-adjustment-day?from_search=true&from_srp=true&qid=yIx25IATWP&rank=1`,
      description: `People pass the word only to those they trust most: Adjustment Day is coming. They’ve been reading a mysterious book and memorizing its directives. They are ready for the reckoning.  When Adjustment Day arrives, it fearlessly makes real the logical conclusion of every separatist fantasy, alternative fact, and conspiracy theory lurking in the American psyche.`,
      fiction: true,
    },
  ];

  const fictionBooks: Book[] = bookArr.filter(book => book.fiction);
  const nonFictionBooks: Book[] = bookArr.filter(book => !book.fiction);

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
          <div style={{width: `100%`, display: `flex`, justifyContent: `space-around`, alignItems: `flex-start`, margin: `0 auto`}}>
            <img src={inventionOfSound} alt='upcoming-novel' />
            <div style={{width: `50%`}}>
              <h3 style={{fontSize: `2.25rem`, padding: `5px`, marginTop: 0, borderLeft: `3px solid rgb(105,128,221)`}}>The Invention of Sound</h3>
              <small style={{fontSize: `1rem`, marginTop: `5px`}}>Releasing{" "}<span style={{color: `rgb(105,128,221)`}}>September 8, 2020</span></small>
              <p style={{fontSize: `2.05rem`, padding: `5px`}}>His first novel with Grand Central, Palahniuk says The Invention of Sound is about <span style={{fontStyle: `italic`, color: `rgb(105,128,221)`}}>“a foley artist looking for the ultimate scream, and the hideous lengths she’ll go to in order to find it.”</span></p>
              <div style={{display: `flex`, justifyContent: `flex-start`, alignItems: `center`}}>
                <Button><Amazon style={{fill: `rgb(105,128,221)`, margin: `0 5px`}} /><span>Purchase on Amazon</span></Button>
                <Button><Goodreads style={{fill: `rgb(105,128,221)`, margin: `0 5px`}} /><span>See on Goodreads</span></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          margin: `0 auto`,
          // background: `rgb(28,30,36)`,
          padding: `22px`,
          marginTop: `10px`,
          maxWidth: `100vw`
        }}
      >
        <h2 style={{fontSize: `2.5rem`, padding: `5px`, borderLeft: `3px solid rgb(105,128,221)`}}>Novels and other Fiction</h2>
        <div style={{width: `80%`, margin: `0 auto`, display: `flex`, justifyContent: `space-between`, alignItems: `flex-start`, flexWrap: `wrap`}}>
          {fictionBooks.map((book, i) => {
            const { title, released, img, amazonLink, goodreadsLink, description, fiction } = book;
		        const shortened: string = description.slice(0, 390);

            return (
              <div key={i} style={{display: `flex`, justifyContent: `space-between`, alignItems: `flex-start`, maxWidth: `46%`, margin: `10px 0`}}>
                <img style={{maxWidth: `200px`}} src={img} alt={title + '-image'} />
                <div style={{marginLeft: `15px`}}>
                  <h3 style={{fontSize: `2.25rem`, padding: `5px`, marginTop: 0, marginBottom: 0, borderLeft: `3px solid rgb(105,128,221)`}}>{title}</h3>
                  <small style={{fontSize: `1rem`, marginTop: `5px`}}>{released}{" "}-{" "}<span style={{color: `rgb(105,128,221)`}}>{fiction ? 'Fiction' : 'Non-Fiction'}</span></small>
                  <p>{shortened}... <a style={{color: `rgb(105,128,221)`, textDecoration: `none`}} href={goodreadsLink} target='_blank' rel="noopener noreferrer">Read More</a></p>
                  <div style={{display: `flex`, justifyContent: `flex-start`, alignItems: `center`}}>
                    <a style={{textDecoration: `none`}} href={amazonLink} target='_blank' rel="noopener noreferrer" ><Button style={{background: `rgb(28,30,36)`}}><Amazon style={{fill: `rgb(105,128,221)`, margin: `0 5px`}} /></Button></a>
                    <a style={{textDecoration: `none`}} href={goodreadsLink} target='_blank' rel="noopener noreferrer" ><Button style={{background: `rgb(28,30,36)`}}><Goodreads style={{fill: `rgb(105,128,221)`, margin: `0 5px`}} /></Button></a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section
        style={{
          margin: `0 auto`,
          // background: `rgb(28,30,36)`,
          padding: `22px`,
          marginTop: `10px`,
          maxWidth: `100vw`
        }}
      >
        <h2 style={{fontSize: `2.5rem`, padding: `5px`, borderLeft: `3px solid rgb(105,128,221)`}}>Non-Fiction</h2>
        <div style={{width: `80%`, margin: `0 auto`, display: `flex`, justifyContent: `space-between`, alignItems: `flex-start`, flexWrap: `wrap`}}>
          {nonFictionBooks.map((book, i) => {
            const { title, released, img, amazonLink, goodreadsLink, description, fiction } = book;
		        const shortened: string = description.slice(0, 390);

            return (
              <div key={i} style={{display: `flex`, justifyContent: `space-between`, alignItems: `flex-start`, maxWidth: `46%`, margin: `10px 0`}}>
                <img style={{maxWidth: `200px`}} src={img} alt={title + '-image'} />
                <div style={{marginLeft: `15px`}}>
                  <h3 style={{fontSize: `2.25rem`, padding: `5px`, marginTop: 0, marginBottom: 0, borderLeft: `3px solid rgb(105,128,221)`}}>{title}</h3>
                  <small style={{fontSize: `1rem`, marginTop: `5px`}}>{released}{" "}-{" "}<span style={{color: `rgb(105,128,221)`}}>{fiction ? 'Fiction' : 'Non-Fiction'}</span></small>
                  <p>{shortened}... <a style={{color: `rgb(105,128,221)`, textDecoration: `none`}} href={goodreadsLink} target='_blank' rel="noopener noreferrer">Read More</a></p>
                  <div style={{display: `flex`, justifyContent: `flex-start`, alignItems: `center`}}>
                    <a style={{textDecoration: `none`}} href={amazonLink} target='_blank' rel="noopener noreferrer" ><Button style={{background: `rgb(28,30,36)`}}><Amazon style={{fill: `rgb(105,128,221)`, margin: `0 5px`}} /></Button></a>
                    <a style={{textDecoration: `none`}} href={goodreadsLink} target='_blank' rel="noopener noreferrer" ><Button style={{background: `rgb(28,30,36)`}}><Goodreads style={{fill: `rgb(105,128,221)`, margin: `0 5px`}} /></Button></a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};
