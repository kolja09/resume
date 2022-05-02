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

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Shop Freshnesecom",
		github: 'https://github.com/kolja09/shop-freshnesecom',
		demo: 'https://shop-freshnesecom.vercel.app/'
	},
	{
		id: 2,
		image: IMG2,
		title: 'Virtual Banking',
		github: 'https://github.com/kolja09/virtual-banking/tree/master',
		demo: 'https://kolja09.github.io/virtual-banking/'
	},
	{
		id: 3,
		image: IMG3,
		title: 'Agency Website',
		github: 'https://github.com/kolja09/agency-website/tree/main',
		demo: 'https://kolja09.github.io/agency-website/'
	},
	{
		id: 4,
		image: IMG4,
		title: 'Todo List',
		github: 'https://github.com/kolja09/react-todo-list/tree/master',
		demo: 'https://kolja09.github.io/react-todo-list'
	},
	{
		id: 5,
		image: IMG5,
		title: 'Real Estate',
		github: 'https://github.com/kolja09/real-estate/tree/master',
		demo: 'https://kolja09.github.io/real-estate/',
	},
	{
		id: 6,
		image: IMG6,
		title: 'Movie',
		github: 'https://github.com/kolja09/react-movie/tree/master',
		demo: 'https://kolja09.github.io/react-movie/'
	},
	{
		id: 7,
		image: IMG7,
		title: 'Posts',
		github: 'https://github.com/kolja09/react-posts/tree/master',
		demo: 'https://kolja09.github.io/react-posts',
	},
	{
		id: 8,
		image: IMG8,
		title: 'Stone, Scissors, Paper Game',
		github: 'https://github.com/kolja09/react-game',
		demo: 'https://kolja09.github.io/react-game/',
	},
	{
		id: 9,
		image: IMG9,
		title: 'Car Sharing',
		github: 'https://github.com/kolja09/car-sharing',
		demo: 'https://kolja09.github.io/car-sharing/'
	},
	{
		id: 10,
		image: IMG10,
		title: 'Interior Shop',
		github: 'https://github.com/kolja09/desire',
		demo: 'https://kolja09.github.io/desire/',
	},
	{
		id: 11,
		image: IMG11,
		title: 'Go Surf',
		github: 'https://github.com/kolja09/go-surf',
		demo: 'https://kolja09.github.io/go-surf/',
	},
	{
		id: 13,
		image: IMG12,
		title: 'Hover Board',
		github: 'https://github.com/kolja09/hover-board',
		demo: 'https://kolja09.github.io/hover-board/',
	},
	{
		id: 14,
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
					data.map(p => (
						<article key={p.id} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={p.image} alt={p.title} />
							</div>
							<h3>{p.title}</h3>
							<div className='portfolio__item-cta'>
								<a href={p.github} className='btn'>Github</a>
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
