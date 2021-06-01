import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
// import Portfolio from './Components/Portfolio';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foo: 'bar',
			resumeData: {},
		};

		ReactGA.initialize('UA-110570651-1');
		ReactGA.pageview(window.location.pathname);
	}

	getResumeData() {
		$.ajax({
			url: '/resumeData.json',
			dataType: 'json',
			cache: false,
			success: function (data) {
				this.setState({ resumeData: data });
			}.bind(this),
			error: function (xhr, status, err) {
				console.log(err);
				alert(err);
			},
		});
	}

	componentDidMount() {
		this.getResumeData();
	}

	render() {
		return (
			<div className='App'>
				<Header data={this.state.resumeData.main} />
				<About data={this.state.resumeData.main} />
				<Resume data={this.state.resumeData.resume} />
				<Footer data={this.state.resumeData.main} />
			</div>
		);
	}
}

//Fun console log
let msg = '%c Hi 👋! Welcome to my site!';

let styles = [
	'font-size: 12px',
	'font-family: monospace',
	'background: white',
	'display: inline-block',
	'color: black',
	'padding: 8px 19px',
	'border: 1px dashed;',
].join(';');
console.log(msg, styles);
export default App;
