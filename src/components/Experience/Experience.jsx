import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";

import './experience.css';

const technology = [
	{name: 'HTML', level: 'Experienced'},
	{name: 'CSS', level: 'Intermediate'},
	{name: 'JavaScript', level: 'Intermediate'},
	{name: 'Typescript', level: 'Experienced'},
	{name: 'React.js', level: 'Experienced'},
	{name: 'Redux', level: 'Experienced'},
	{name: 'Next.js', level: 'Intermediate'},
	{name: 'Redux Thunk', level: 'Experienced'},
	{name: 'Axios', level: 'Experienced'},
	{name: 'Git, GitHub', level: 'Intermediate'},
	{name: 'Styled Components', level: 'Experienced'},
	{name: 'SASS(SCSS)', level: 'Experienced'},
	{name: 'Gulp', level: 'Intermediate'},
];

const Experience = () => {
	return (
		<section id='experience'>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>
			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>Frontend Development</h3>
					<div className='experience__content'>
						{technology.map((t, idx) => (
							<article key={idx} className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon'/>
								<div>
									<h4>{t.name}</h4>
									<small className='text-light'>{t.level}</small>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
