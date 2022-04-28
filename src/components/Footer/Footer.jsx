import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from 'react-icons/fi';
import { BsTelegram } from "react-icons/bs";


import './footer.css';

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>KOLJA09</a>
			<ul className='permalinks'>
				<li><a href='#'>Home</a></li>
				<li><a href='#about'>About</a></li>
				<li><a href='#experience'>Experience</a></li>
				<li><a href='#portfolio'>Portfolio</a></li>
				<li><a href='#contact'>Contact</a></li>
			</ul>
			<div className='footer__socials'>
				<a href='https://www.facebook.com/profile.php?id=100060699326613'>
					<FaFacebookF />
				</a>
				<a href='https://www.instagram.com/kolja9062005/'>
					<FiInstagram />
				</a>
				<a href='https://t.me/kolja09062005'>
					<BsTelegram />
				</a>
			</div>
			<div className='footer__copyright'>
				<small>&copy; kolja09 Turorials. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;

