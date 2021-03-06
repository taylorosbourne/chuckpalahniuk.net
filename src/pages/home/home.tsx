import React from 'react';
import { Helmet } from 'react-helmet';

import bannerPortrait from '../../assets/portraits/bannerportrait.webp';
import tattoo from '../../assets/portraits/tattoo.png';
import books from '../../assets/books.png';
import shirt from '../../assets/shirt.png';
import {
	HeadImageContainer,
	HeadImage,
	CardContainer,
	Card,
	Mark,
	BannerHeader,
} from './home-styles';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<Helmet>
				<title>Home - Chuck Palahniuk</title>
				<meta
					name="description"
					content="Chuck's books include fifteen original novels, as well four works of non-fiction, and over a dozen short fiction pieces."
				/>
			</Helmet>
			<HeadImageContainer>
				<HeadImage imgUrl={bannerPortrait}>
					<Mark fontSize="4rem" mobileFontSize="2.75rem">
						Find out what you're
					</Mark>
					<Mark fontSize="4rem" mobileFontSize="2.75rem">
						afraid of and go live
					</Mark>
					<Mark fontSize="4rem" mobileFontSize="2.75rem">
						there.
					</Mark>
					<cite>- Chuck Palahniuk</cite>
				</HeadImage>
			</HeadImageContainer>
			<section style={{ margin: `10px auto` }}>
				<CardContainer>
					<Card imgUrl={books}>
						<BannerHeader>Books</BannerHeader>
						<Mark fontSize="1.85rem" mobileFontSize="1.5rem">
							Chuck's books include fifteen original novels, as well four works
							of non-fiction, and over a dozen short fiction pieces.
							<a
								href="https://www.amazon.com/Chuck-Palahniuk/e/B000APV8ME?ref=sr_ntt_srch_lnk_1&qid=1578438672&sr=8-1&_encoding=UTF8&tag=officchuckpalaha&linkCode=ur2&linkId=8f35a9001574e3ef145e4b0225f4a557&camp=1789&creative=9325"
								target="_blank"
								rel="noopener noreferrer"
							>
								Shop Books
							</a>
						</Mark>
					</Card>
					<Card imgUrl={tattoo}>
						<BannerHeader>Chuck</BannerHeader>
						<Mark fontSize="1.85rem" mobileFontSize="1.5rem">
							Born February 21, 1962, [Chuck] spent his early childhood living
							out of a mobile home in Burbank, Washington...{' '}
							<Link to="/chuck">About Chuck</Link>
						</Mark>
					</Card>
					<Card imgUrl={shirt}>
						<BannerHeader>Merch</BannerHeader>
						<Mark fontSize="1.85rem" mobileFontSize="1.5rem">
							Chuck's store includes: shirts, outerwear, accessories and more.
							Because sometimes you are your fucking khakis.
							<a
								href="https://chuckpalahniuk.threadless.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Shop Merch
							</a>
						</Mark>
					</Card>
				</CardContainer>
			</section>
		</>
	);
}
