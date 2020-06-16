import React from 'react';

import { Book, Props } from './book-types';
import { bookArr } from './book-constants';
import { Button, Card } from './book-styles';
import { ReactComponent as Amazon } from '../../assets/icons/amazon.svg';
import { ReactComponent as Goodreads } from '../../assets/icons/goodreads.svg';
import darkhorse from '../../assets/icons/darkhorse.webp';

export default function BookCard({ activeTab }: Props) {
	let books;
	if (activeTab === 'view all') {
		const booksArr: Book[] = bookArr;
		books = booksArr;
	} else if (activeTab === 'fiction') {
		const booksArrFiltered: Book[] = bookArr.filter(
			(book) =>
				!['graphic novel', 'non-fiction', 'short fiction'].includes(
					book.category
				)
		);
		books = booksArrFiltered;
	} else {
		const booksArrFiltered: Book[] = bookArr.filter(
			(book) => book.category === activeTab
		);
		books = booksArrFiltered;
	}
	return (
		<>
			{books &&
				books.map((book, i) => {
					const {
						title,
						released,
						img,
						amazonLink,
						goodreadsLink,
						darkHorseLink,
						description,
						category,
					} = book;
					const shortened: string = description.slice(0, 390);

					return (
						<Card key={i}>
							<img
								style={{
									minHeight: `310px`,
									maxWidth: `200px`,
									borderRadius: `5px`,
								}}
								src={img}
								alt={title + '-image'}
							/>
							<div style={{ marginLeft: `15px` }}>
								<h3
									style={{
										fontSize: `2.25rem`,
										padding: `5px`,
										marginTop: 0,
										marginBottom: 0,
										borderLeft: `3px solid rgb(105,128,221)`,
									}}
								>
									{title}
								</h3>
								<small style={{ fontSize: `1rem`, marginTop: `5px` }}>
									{released} -{' '}
									<span style={{ color: `rgb(105,128,221)` }}>{category}</span>
								</small>
								<p>
									{shortened}...{' '}
									<a
										style={{
											color: `rgb(105,128,221)`,
											textDecoration: `none`,
										}}
										href={goodreadsLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										Continue on Goodreads
									</a>
								</p>
								<div
									style={{
										display: `flex`,
										justifyContent: `flex-start`,
										alignItems: `center`,
									}}
								>
									{amazonLink ? (
										<a
											style={{ textDecoration: `none` }}
											href={amazonLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button style={{ background: `rgb(28,30,36)` }}>
												<Amazon
													style={{ fill: `rgb(105,128,221)`, margin: `0 5px` }}
												/>
											</Button>
										</a>
									) : null}
									{darkHorseLink ? (
										<a
											style={{ textDecoration: `none` }}
											href={darkHorseLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button style={{ background: `rgb(28,30,36)` }}>
												<img
													src={darkhorse}
													alt="darkhorse"
													style={{
														maxHeight: `24px`,
														padding: 0,
														margin: 0,
														background: `rgb(105,128,221)`,
													}}
												/>
											</Button>
										</a>
									) : null}
									<a
										style={{ textDecoration: `none` }}
										href={goodreadsLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button style={{ background: `rgb(28,30,36)` }}>
											<Goodreads
												style={{
													fill: `rgb(105,128,221)`,
													margin: `0 5px`,
													maxWidth: `24px`,
												}}
											/>
										</Button>
									</a>
								</div>
							</div>
						</Card>
					);
				})}
		</>
	);
}
