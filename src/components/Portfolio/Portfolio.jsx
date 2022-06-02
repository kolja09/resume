import React from 'react';

import './portfolio.css';
import IMG1 from './../../assets/freshnesecom.jpg';
import IMG2 from './../../assets/virtual-banking.jpg';
import IMG3 from './../../assets/agency-website.jpg';
import IMG4 from './../../assets/todo-list.jpg';
import IMG5 from './../../assets/real-estate.jpg';
import IMG6 from './../../assets/movie.jpg';
import IMG7 from './../../assets/posts.jpg';
import IMG8 from './../../assets/game.jpg';
import IMG9 from './../../assets/car-sharing.jpg';
import IMG10 from './../../assets/desire.jpg';
import IMG11 from './../../assets/go-surf.jpg';
import IMG12 from './../../assets/hover-board.jpg';
import IMG13 from './../../assets/aim-game.jpg';
import IMG14 from './../../assets/chart.PNG';
import IMG15 from './../../assets/currency-converter.PNG';

const data = [
	{
		image: IMG1,
		title: "Shop Freshnesecom",
		github: 'https://github.com/kolja09/shop-freshnesecom',
		demo: 'https://shop-freshnesecom.vercel.app/'
	},
	{
		image: IMG14,
		title: "Chart App",
		github: 'https://github.com/kolja09/chart-app',
		demo: 'https://chart-app-inky.vercel.app/'
	},
	{
		image: IMG15,
		title: "Currency Converter (Angular)",
		github: 'https://github.com/kolja09/currency-converter',
		demo: 'https://currency-converter-opal-eight.vercel.app/',
	},
	{
		image: IMG2,
		title: 'Virtual Banking',
		github: 'https://github.com/kolja09/virtual-banking/tree/master',
		demo: 'https://kolja09.github.io/virtual-banking/'
	},
	{
		image: IMG3,
		title: 'Agency Website',
		github: 'https://github.com/kolja09/agency-website/tree/main',
		demo: 'https://kolja09.github.io/agency-website/'
	},
	{
		image: IMG4,
		title: 'Todo List',
		github: 'https://github.com/kolja09/react-todo-list/tree/master',
		demo: 'https://kolja09.github.io/react-todo-list'
	},
	{
		image: IMG5,
		title: 'Real Estate',
		github: 'https://github.com/kolja09/real-estate/tree/master',
		demo: 'https://kolja09.github.io/real-estate/',
	},
	{
		image: IMG6,
		title: 'Movie',
		github: 'https://github.com/kolja09/react-movie/tree/master',
		demo: 'https://kolja09.github.io/react-movie/'
	},
	{
		image: IMG7,
		title: 'Posts',
		github: 'https://github.com/kolja09/react-posts/tree/master',
		demo: 'https://kolja09.github.io/react-posts',
	},
	{
		image: IMG8,
		title: 'Stone, Scissors, Paper Game',
		github: 'https://github.com/kolja09/react-game',
		demo: 'https://kolja09.github.io/react-game/',
	},
	{
		image: IMG9,
		title: 'Car Sharing',
		github: 'https://github.com/kolja09/car-sharing',
		demo: 'https://kolja09.github.io/car-sharing/'
	},
	{
		image: IMG10,
		title: 'Interior Shop',
		github: 'https://github.com/kolja09/desire',
		demo: 'https://kolja09.github.io/desire/',
	},
	{
		image: IMG11,
		title: 'Go Surf',
		github: 'https://github.com/kolja09/go-surf',
		demo: 'https://kolja09.github.io/go-surf/',
	},
	{
		image: IMG12,
		title: 'Hover Board',
		github: 'https://github.com/kolja09/hover-board',
		demo: 'https://kolja09.github.io/hover-board/',
	},
	{
		image: IMG13,
		title: 'AIM Game',
		github: 'https://github.com/kolja09/AIM-Game',
		demo: 'https://kolja09.github.io/AIM-Game/',
	}
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
      <h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className='container portfolio__container'>
				{
					data.map((p, idx) => (
						<article key={idx} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={p.image} alt={p.title} />
							</div>
							<h3>{p.title}</h3>
							<div className='portfolio__item-cta'>
								<a href={p.github} className='btn' target='_blank'>Github</a>
								<a href={p.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
							</div>
						</article>
					))
				}
			</div>
		</section>
	);
};

export default Portfolio;
