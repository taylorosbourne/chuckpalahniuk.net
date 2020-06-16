import React from 'react';

import { Props } from './layout-types';
import { Main } from './layout-styles';
import { Footer, Header } from '../../components';

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
