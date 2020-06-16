import React from 'react';

import { Props } from './nav-types';
import { Navbar } from './nav-styles';

export default function Nav({ children }: Props) {
	return (
		<Navbar>
			<ul>{children}</ul>
		</Navbar>
	);
}
