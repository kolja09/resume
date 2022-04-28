import React from 'react';
import { VscFolderLibrary } from "react-icons/vsc";
import { SiCodewars } from "react-icons/si";

import ME from './../../assets/IMG_20210808_163127_732.jpg';
import './about.css';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt={'About Image'}/>
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<VscFolderLibrary className='about__icon'/>
							<h5>Projects</h5>
							<small>26 GitHub repositories</small>
						</article>
						<article className='about__card'>
							<SiCodewars className='about__icon'/>
							<h5>Codewars</h5>
							<small>44 completed kata </small>
						</article>
					</div>
					<p>
						I’m a highly motivated, responsible, communicable, and enthusiastic
						front-end developer who really loves programming and always wants to
						learn something new. I’d like to be useful to the company and improve
						my professional skills in a good team.
					</p>
					<a href='#contact' className='btn btn-primary'>Let's Talk</a>
				</div>
			</div>
		</section>
	);
};

export default About;
