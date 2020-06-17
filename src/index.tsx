import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import './App.css';
import { Layout } from './containers';
import { Home, About, Books, NotFound, Terms, Contact } from './pages';

function App() {
	return (
		<Router>
			<ScrollToTop>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/chuck" component={About} />
						<Route path="/books" component={Books} />
						<Route path="/terms-of-service" component={Terms} />
						<Route path="/contact" component={Contact} />
						<Route path="/*" component={NotFound} />
					</Switch>
				</Layout>
			</ScrollToTop>
		</Router>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
