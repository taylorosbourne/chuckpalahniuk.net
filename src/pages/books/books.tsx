import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { BookCard } from '../../components';
import {
	Button,
	LatestContainer,
	TabContainer,
	Tab,
	BookCardContainer,
} from './books-styles';
import { ReactComponent as Amazon } from '../../assets/icons/amazon.svg';
import { ReactComponent as Goodreads } from '../../assets/icons/goodreads.svg';
import inventionOfSound from '../../assets/books/inventionofsound.webp';
import inventionOfSoundPng from '../../assets/books/inventionofsound.png';

export default function Books() {
	const [activeTab, setActiveTab] = useState('view all');
	return (
		<>
			<Helmet>
				<title>Books - Chuck Palahniuk</title>
				<meta
					name="description"
					content="Chuck's books include fifteen original novels, as well four works of non-fiction, and over a dozen short fiction pieces."
				/>
			</Helmet>
			<section
				style={{
					margin: `0 auto`,
					background: `rgb(28,30,36)`,
					padding: `22px`,
					marginTop: `10px`,
					maxWidth: `100vw`,
					paddingBottom: `54px`,
				}}
			>
				<div style={{ width: `98%`, margin: `0 auto` }}>
					<h2
						style={{
							fontSize: `2.5rem`,
							padding: `5px`,
							borderLeft: `3px solid rgb(105,128,221)`,
						}}
					>
						Upcoming
					</h2>
					<LatestContainer>
						<picture>
							<source srcSet={inventionOfSound} type="image/webp" />
							<source srcSet={inventionOfSoundPng} type="image/png" />
							<img
								style={{ borderRadius: `5px` }}
								src={inventionOfSound}
								alt="upcoming-novel"
							/>
						</picture>
						<div style={{ width: `50%` }}>
							<h3
								style={{
									fontSize: `2.25rem`,
									padding: `5px`,
									marginTop: 0,
									borderLeft: `3px solid rgb(105,128,221)`,
								}}
							>
								The Invention of Sound
							</h3>
							<small style={{ fontSize: `1rem`, marginTop: `5px` }}>
								Releasing{' '}
								<span style={{ color: `rgb(105,128,221)` }}>
									September 8, 2020
								</span>
							</small>
							<p style={{ fontSize: `2.05rem` }}>
								His first novel with Grand Central, Palahniuk says The Invention
								of Sound is about{' '}
								<span
									style={{ fontStyle: `italic`, color: `rgb(105,128,221)` }}
								>
									“a foley artist looking for the ultimate scream, and the
									hideous lengths she’ll go to in order to find it.”
								</span>
							</p>
							<div
								className="button-container"
								style={{
									display: `flex`,
									justifyContent: `flex-start`,
									alignItems: `center`,
								}}
							>
								<Button style={{ minHeight: `48px` }}>
									<Amazon
										style={{ fill: `rgb(105,128,221)`, margin: `0 5px 0 0` }}
									/>
									<span>Purchase on Amazon</span>
								</Button>
								<Button style={{ minHeight: `48px` }}>
									<Goodreads
										style={{
											fill: `rgb(105,128,221)`,
											margin: `0 5px`,
											maxHeight: `24px`,
											maxWidth: `24px`,
											color: `rgb(105,128,221)`,
										}}
									/>
									<span>See on Goodreads</span>
								</Button>
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
					maxWidth: `100vw`,
				}}
			>
				<TabContainer>
					{[
						'view all',
						'fiction',
						'short fiction',
						'non-fiction',
						'graphic novel',
					].map((tab, i) => {
						return (
							<Tab
								key={i}
								isActive={activeTab === tab}
								onClick={() => setActiveTab(tab)}
							>
								{tab === 'fiction' ? 'Novels & Story Compilations' : tab}
							</Tab>
						);
					})}
				</TabContainer>
				<BookCardContainer>
					<BookCard activeTab={activeTab} />
				</BookCardContainer>
			</section>
		</>
	);
}
