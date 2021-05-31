import React, { Component } from 'react';

class Resume extends Component {
	render() {
		if (this.props.data) {
			var education = this.props.data.education.map(function (education) {
				return (
					<div key={education.school}>
						<h3>{education.school}</h3>
						<p className='info'>
							{education.degree} <span>&bull;</span>
							<em className='date'>{education.graduated}</em>
						</p>
						<p>{education.description}</p>
					</div>
				);
			});
			var work = this.props.data.work.map(function (work) {
				return (
					<div key={work.company}>
						<h3>{work.company}</h3>
						<p className='info'>
							{work.title}
							<span>&bull;</span> <em className='date'>{work.years}</em>
						</p>
						<p>{work.description}</p>
					</div>
				);
			});
			var skillmessage = this.props.data.skillmessage;
			//var testcert = this.props.data.testcert;
			// console.log(certificate);
			// var certificate = this.props.data.certificate.map(function (certificate) {
			// 	return (
			// 		<div key={certificate.title}>
			// 			<h3>{certificate.title}</h3>
			// 			<p className='info'>
			// 				<span>&bull;</span> <em className='date'>{certificate.years}</em>
			// 			</p>
			// 			<p>{certificate.description}</p>
			// 		</div>
			// 	);
			// });
		}

		return (
			<section id='resume'>
				<div className='row education'>
					<div className='three columns header-col'>
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div className='nine columns main-col'>
						<div className='row item'>
							<div className='twelve columns'>{education}</div>
						</div>
					</div>
				</div>
				<div className='row work'>
					<div className='three columns header-col'>
						<h1>
							<span>Work</span>
						</h1>
					</div>
					<div className='nine columns main-col'>{work}</div>
				</div>
				<div className='row item'></div>
				<div className='row certificate'>
					<div className='three columns header-col'>
						<h1>
							<span>Certificate</span>
						</h1>
					</div>
					<div className='nine columns main-col'>{skillmessage}</div>
				</div>
			</section>
		);
	}
}

export default Resume;
