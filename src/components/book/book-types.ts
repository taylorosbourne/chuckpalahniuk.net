export interface Props {
	activeTab: string;
}

export interface Book {
	title: string;
	released: number;
	img: string;
	amazonLink: string | null;
	goodreadsLink: string;
	darkHorseLink: string | null;
	description: string;
	category: string;
}
