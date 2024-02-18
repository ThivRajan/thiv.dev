import React from 'react';
import './App.scss';
import About from './Sections/About/About';
import Projects from './Sections/Projects/Projects';
import Footer from './Sections/Footer/Footer';

const App = (): JSX.Element =>
	<div className="App">
		<About />
		<Projects />
		<Footer />
	</div>;

export default App;
