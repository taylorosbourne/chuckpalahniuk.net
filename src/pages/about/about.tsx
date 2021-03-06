import React from 'react';
import { Helmet } from 'react-helmet';

import lookingUp from '../../assets/portraits/lookingup.webp';
import lookingUpPng from '../../assets/portraits/lookingup.png';
import tattooBanner from '../../assets/portraits/tattoobanner.webp';
import beanieBanner from '../../assets/portraits/beanieBanner.webp';
import reading from '../../assets/portraits/reading.webp';
import {
	Section,
	BioContainer,
	BannerContainer,
	BannerImage,
	ChuckQuote,
} from './about-styles';

export default function About() {
	return (
		<>
			<Helmet>
				<title>About - Chuck Palahniuk</title>
				<meta
					name="description"
					content="Born February 21, 1962, Charles Michael Palahniuk spent his early childhood living out of a mobile home in Burbank, Washington. His parents, Carol and Fred Palahniuk, separated and divorced when he was fourteen, leaving Chuck and his siblings to spend much of their time on their maternal grandparent’s cattle ranch."
				/>
			</Helmet>
			<Section top={true} bottom={false} imgBreak={false}>
				<BioContainer>
					<div>
						<h2
							style={{
								fontSize: `2.5rem`,
								padding: `5px`,
								borderLeft: `3px solid rgb(105,128,221)`,
							}}
						>
							Bio
						</h2>
						<small style={{ color: `rgb(105,128,221)`, fontSize: `1.25rem` }}>
							written for ChuckPalahniuk.net by Joshua Chaplinsky
						</small>
						<p>
							Truth is stranger than fiction, at least for those blessed with
							interesting lives. The rest of us have no choice but to live
							vicariously through their stories. In the case of bestselling cult
							author Chuck Palahniuk, the embellishment of his exploits by fans
							has made it hard to tell exactly where reality ends and the
							storytelling begins. There are those who would have us believe he
							entered this world kicking and screaming, brandishing a pen, when
							in fact he comes from much more humble (albeit interesting)
							beginnings.
						</p>
						<p>
							Born February 21, 1962, Charles Michael Palahniuk spent his early
							childhood living out of a mobile home in Burbank, Washington. His
							parents, Carol and Fred Palahniuk, separated and divorced when he
							was fourteen, leaving Chuck and his siblings to spend much of
							their time on their maternal grandparent’s cattle ranch.
						</p>
						<p>
							The surname, Palahniuk, which is Ukrainian in origin, can be
							spelled and pronounced numerous different ways. According to
							Chuck, his paternal grandparents decided to pronounce it as a
							combination of their first names, Paula and Nick. But Chuck never
							knew his father’s parents. As recounted in an interview with The
							Independent, his grandfather shot and killed his grandmother after
							an argument over the cost of a sewing machine. Chuck’s father, who
							was three at the time, watched from under a bed as Nick Palahniuk
							searched the house for additional victims, before turning the gun
							on himself. In the article, Chuck is quoted as saying, "My
							grandfather was hit over the head by a crane boom in Seattle. Some
							of the family claimed he was never a violent, crazy person before
							that. Some say he was. It depends who you believe." The tragic
							event is depicted on the U.S. cover of Stranger Than Fiction.
						</p>
					</div>
					<div>
						<picture>
							<source srcSet={lookingUp} type="image/webp" />
							<source srcSet={lookingUpPng} type="image/png" />
							<img
								src={lookingUp}
								alt="chuck-palahniuk"
								style={{
									borderRadius: `5px`,
									width: `500px`,
									borderRight: `8px solid rgb(105,128,221)`,
									borderTop: `8px solid rgb(105,128,221)`,
								}}
							/>
						</picture>
						<caption
							style={{
								display: `block`,
								margin: `15px auto`,
								fontStyle: `italic`,
								fontSize: `1.25rem`,
							}}
						>
							Photo by{' '}
							<a
								href="https://allanamato.com/"
								target="_blank"
								rel="noopener noreferrer"
								style={{ color: `rgb(105,128,221)`, textDecoration: `none` }}
							>
								Allan Amato
							</a>
						</caption>
					</div>
				</BioContainer>
			</Section>
			<Section top={false} bottom={false} imgBreak={true}>
				<BannerContainer>
					<BannerImage src={tattooBanner} alt="chuck-palahniuk" />
					<ChuckQuote className="quote">
						<p
							style={{
								borderTop: `5px solid rgb(28,30,36)`,
								borderRight: `5px solid rgb(28,30,36)`,
								padding: `10px`,
								borderRadius: `5px`,
							}}
						>
							“All God does is watch us and kill us when we get boring. We must
							never, ever be boring.”
							<cite>― Chuck Palahniuk, Invisible Monsters</cite>
						</p>
					</ChuckQuote>
				</BannerContainer>
			</Section>
			<Section top={false} bottom={false} imgBreak={false}>
				<div style={{ width: `68%`, margin: `0 auto` }}>
					<h2
						style={{
							fontSize: `2.5rem`,
							padding: `5px`,
							borderLeft: `3px solid rgb(105,128,221)`,
						}}
					>
						Early Life
					</h2>
					<p>
						Aside from what's revealed in his writing, not much is known about
						Palahniuk’s formative years. In 1980 he graduated from Columbia High
						School in Burbank, winning the award for “Most Wittiest” in the
						process. Some regard this award as the catalyst for his nascent
						interest in writing, but according to Chuck, that honor belongs to
						Mr. Olsen, his fifth grade teacher, who told him:
					</p>
					<blockquote
						style={{
							margin: `15px auto`,
							fontSize: `1.45rem`,
							textAlign: `center`,
						}}
					>
						"Chuck,{' '}
						<span
							style={{
								display: `inline-block`,
								color: `rgb(105,128,221)`,
								fontSize: `2.15rem`,
								transform: `rotate(-0.5deg)`,
								textDecoration: `underline`,
							}}
						>
							you do this really well.
						</span>{' '}
						And{' '}
						<span
							style={{
								display: `inline-block`,
								color: `rgb(105,128,221)`,
								fontSize: `2.15rem`,
								transform: `rotate(0.5deg)`,
								textDecoration: `underline`,
							}}
						>
							this is much better
						</span>{' '}
						than setting fires, so{' '}
						<span
							style={{
								display: `inline-block`,
								color: `rgb(105,128,221)`,
								fontSize: `2.15rem`,
								transform: `rotate(-0.5deg)`,
								textDecoration: `underline`,
							}}
						>
							keep it up
						</span>
						."
					</blockquote>
					<p>
						After high school, Chuck attended the University of Oregon,
						graduating with a BA in journalism in 1986. He entered the workforce
						as a journalist for a local Portland newspaper, but soon grew tired
						of the job. He then gained employment as a diesel mechanic, spending
						his days repairing trucks and writing technical manuals. It was
						during this time that Chuck experienced much of what would become
						fodder for his early work, including working as an escort for
						terminally ill hospice patients and becoming a member of the
						notorious Cacophony Society. Said to be the inspiration for Project
						Mayhem in Fight Club, The Cacophony Society was dedicated to
						experiencing things outside of the mainstream and performing
						large-scale pranks in public places.
					</p>
				</div>
			</Section>
			<Section top={false} bottom={false} imgBreak={false}>
				<div style={{ width: `68%`, margin: `0 auto` }}>
					<h2
						style={{
							fontSize: `2.5rem`,
							padding: `5px`,
							borderLeft: `3px solid rgb(105,128,221)`,
						}}
					>
						Writing Career - Beginnings
					</h2>
					<p>
						In his mid-thirties, Chuck decided to try his hand at writing
						fiction. A friend suggested he attend a workshop hosted by Tom
						Spanbauer, minimalist guru behind the art of “Dangerous Writing.”
						The resulting short story, Negative Reinforcement, appeared in the
						now defunct literary journal Modern Short Stories in August 1990,
						and is Chuck’s first known published work. The Love Theme of Sybil
						and William followed in October.
					</p>
					<p>
						Chuck’s first attempt at a novel, If You Lived Here, You’d be Home
						Already, was also written while attending the workshop. The 700-page
						monster of a book was Chuck’s attempt at emulating Stephen King, and
						was rejected across the board (although parts were later recycled
						for use in Fight Club.) Unfazed, Chuck dabbled with even darker
						material, writing a manuscript called Manifesto, which would go on
						to become Invisible Monsters. As with If You Lived Here, agents just
						couldn't embrace the dark tone in Chuck's work, and while his voice
						as a writer got some recognition, nobody was willing to take a
						chance on him.
					</p>
					<p>
						That all changed when Chuck "gave up" on the mainstream and decided
						to make his next manuscript even darker. Written in stolen moments
						under truck chassis and on park benches to a soundtrack of The
						Downward Spiral and Pablo Honey, Fight Club came into existence.
						Within months, Gerry Howard (then editor at WW Norton) convinced the
						higher-ups to take a chance on the fledgling writer, and Chuck soon
						had a book deal with a major publisher. But it wasn't until 20th
						Century Fox took notice that Chuck nabbed an agent in Edward Hibbert
						(best known as Gil Chesterton, the food critic on Frasier,) who
						would go on to broker the deal for Fight Club the movie.
					</p>
				</div>
			</Section>
			<Section top={false} bottom={false} imgBreak={false}>
				<div style={{ width: `68%`, margin: `0 auto` }}>
					<h2
						style={{
							fontSize: `2.5rem`,
							padding: `5px`,
							borderLeft: `3px solid rgb(105,128,221)`,
						}}
					>
						Fight Club Film
					</h2>
					<p>
						Directed by David Fincher, the adaptation of Fight Club was a flop
						at the box office, but achieved cult status on DVD. The year of its
						release, the film was Fox’s top selling disc, and critics everywhere
						finally began to embrace it. The film’s popularity drove sales of
						the novel, resulting in multiple re-printings over the next few
						years.
					</p>
					<p>
						Due to this success, Chuck was given free reign, creatively. He put
						out two novels in 1999—religious satire Survivor, and the rewritten
						Invisible Monsters—and has written almost a book a year since.
						Choke, published in 2001, became Chuck’s first New York Times
						bestseller. All of his novels thereafter have had similar success.
					</p>
				</div>
			</Section>
			<Section top={false} bottom={false} imgBreak={true}>
				<BannerContainer>
					<BannerImage
						style={{ width: `800px` }}
						src={beanieBanner}
						alt="chuck-palahniuk"
					/>
					<ChuckQuote className="quote">
						<p
							style={{
								borderTop: `5px solid rgb(28,30,36)`,
								borderRight: `5px solid rgb(28,30,36)`,
								padding: `10px`,
								borderRadius: `5px`,
							}}
						>
							“We all die. The goal isn't to live forever, the goal is to create
							something that will.”
							<cite>― Chuck Palahniuk</cite>
						</p>
					</ChuckQuote>
				</BannerContainer>
			</Section>
			<Section top={false} bottom={false} imgBreak={false}>
				<div style={{ width: `68%`, margin: `0 auto` }}>
					<h2
						style={{
							fontSize: `2.5rem`,
							padding: `5px`,
							borderLeft: `3px solid rgb(105,128,221)`,
						}}
					>
						Writing Career - Continued
					</h2>
					<p>
						Chuck’s work has always been infused with personal experience, and
						his next novel, Lullaby, was no exception. Chuck credits writing
						Lullaby with helping him cope with the tragic death of his father,
						who was murdered in 1999 by the jealous ex of a woman met through a
						personal ad. A major theme of the book is power, and Chuck has gone
						on record as saying it was inspired by sitting in the court room, in
						judgment of the man who killed his father. That man was found guilty
						and sentenced to death in 2001.
					</p>
					<p>
						With the trial behind him, Chuck threw himself into his work. 2003
						would go down as a banner year, but not many people realize it began
						with a small literary conference in Edinboro, Pennsylvania. The
						three-day event gave fans unprecedented access to the author and his
						work, and was presided over by Chuck himself. The schedule consisted
						of exclusive readings, Q&As, book signings, dissertations- all
						devoted to Chuck. Not one to revel in the spotlight, Chuck
						selflessly used this forum to promote the art of storytelling, and
						to encourage a generation of young readers to evolve into writers.
						The entire affair was thoroughly documented by a crew from
						ChuckPalahniuk.net in the film,{' '}
						<span style={{ color: `rgb(105,128,221)` }}>
							Postcards From the Future: The Chuck Palahniuk Documentary.
						</span>
					</p>
					<p>
						Both Diary and the non-fiction guide to Portland, Fugitives and
						Refugees, were released later that year. While on the road in
						support of Diary, Chuck began reading a short story entitled 'Guts,'
						which would eventually become part of the novel Haunted. 'Guts'
						instantly became one of Chuck’s most infamous stories, due in large
						part to the graphic nature of its content- extreme masturbation gone
						awry- and the fact that it caused people to faint at his readings.
					</p>
					<p>
						Over a hundred faintings have been reported, one of the most severe
						occurring during a reading at Columbia University, where a man fell
						to the ground and awoke screaming. The incident was caught on tape
						and is featured in the Postcards From the Future documentary.
					</p>
					<p>
						It was also around this time that Chuck publicly came out as
						homosexual. For a long time it was assumed that Chuck was married,
						and some members of the press even perpetuated the myth that he had
						a wife, but he set the record straight via an audio message posted
						on ChuckPalahniuk.net.
					</p>
					<p>
						In the years that followed, things seemed to settle down for Chuck.
						He continued to write, publishing the bestselling Rant, Snuff,
						Pygmy, Tell-All, a 'remix' of Invisible Monsters, Damned and most
						recently, Doomed. To this day, he still attends a weekly workshop
						with close friends and writers such as Lidia Yuknavitch, Monica
						Drake, Chelsea Cain and Suzy Vitello, and they are the first people
						to read anything he writes. Chuck is a vocal proponent of the
						minimalist writing style, and credits Tom Spanbauer and his mentor,
						Gordon Lish, as major influences, along with Amy Hempel, Denis
						Johnson and Bret Easton Ellis.
					</p>
					<p>
						In regards to his own writing, Chuck has stated that he writes each
						chapter of his novels as if they were a short story. He feels every
						one of his novels should be able to be condensed into a short story
						and still work.
					</p>
					<p>
						Chuck is also known for doing extensive research. He says that
						research is his favorite part of the writing process and is the fuel
						that drives his novels. He has been known to consume entire books
						and distil that information into a single descriptive line. He
						writes in public, spending hours people-watching as he does. If you
						have a passing conversation with Chuck on the street, there’s a good
						chance it ends up in one of his books. According to Chuck,
					</p>
				</div>
			</Section>
			<Section top={false} bottom={false} imgBreak={true}>
				<BannerContainer>
					<BannerImage
						style={{ height: `400px` }}
						src={reading}
						alt="chuck-palahniuk"
					/>
					<ChuckQuote className="quote">
						<p
							style={{
								borderTop: `5px solid rgb(28,30,36)`,
								borderRight: `5px solid rgb(28,30,36)`,
								padding: `10px`,
								borderRadius: `5px`,
							}}
						>
							“I am the combined effort of everyone I’ve ever known.”
							<cite>― Chuck Palahniuk</cite>
						</p>
					</ChuckQuote>
				</BannerContainer>
			</Section>
			<Section top={false} bottom={true} imgBreak={false}>
				<div style={{ width: `68%`, margin: `0 auto` }}>
					<h2
						style={{
							fontSize: `2.5rem`,
							padding: `5px`,
							borderLeft: `3px solid rgb(105,128,221)`,
						}}
					>
						Chuck's Friends & Teaching
					</h2>
					<p>
						But it is better to give than to receive. Chuck has used his
						experience and success to help his fellow writers. So far three of
						Chuck’s workshop peers- Chelsea Cain (Heartsick), Lidia Yuknavitch
						(The Chronology of Water), and Monica Drake (Clown Girl) - have gone
						on to successful writing careers of their own, due in part to
						Chuck’s assistance. In 2003, he wrote a blurb for the paperback
						edition of Craig Clevenger’s The Contortionist’s Handbook, and
						promoted it on tour as one of the best books he’d read in a decade,
						after which, awareness of Clevenger’s work skyrocketed.
					</p>
					<p>
						Chuck also enjoys giving back to his fans, and teaching the art of
						storytelling has been an important part of that. In 2004, Chuck
						began submitting essays to ChuckPalahniuk.net on the craft of
						writing. These were 'How To' pieces, straight out of Chuck's
						personal bag of tricks, based on the tenants of minimalism he
						learned from Tom Spanbauer. Every month, a “Homework Assignment”
						would accompany the lesson, so Workshop members could apply what
						they had learned. (all 36 of these essays can currently be found on
						The Cult's sister-site, LitReactor.com). Then, in 2009, Chuck
						increased his involvement by committing to read and review a
						selection of fan-written stories each month. He would then provide
						detailed feedback and criticism to aid in the revision process. The
						best stories are currently set to be published in Burnt Tongues, a
						forthcoming anthology, with an introduction written by Chuck
						himself.
					</p>
					<p>
						It has been almost fifteen years since the landmark publication of
						Fight Club, and Chuck shows no signs of slowing down. He currently
						divides his time between two homes- one in Oregon and one in
						Washington State- both of which he shares with his partner of twenty
						years and their dogs. When he is not on tour, Chuck is constantly
						writing.
					</p>
				</div>
			</Section>
		</>
	);
}
