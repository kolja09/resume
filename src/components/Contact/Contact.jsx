import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs"

import './contact.css';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_2x6zu3f', 'template_civ8qdp', form.current, 'VNCyJxRIQJLbfhVZD')

		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail />
						<h4>Email</h4>
						<h5>kolja9062005@gmail.com</h5>
						<a href='mailto:kolja9062005@gmail.com' target='_blank'>Send a message</a>
					</article>
					<article className='contact__option'>
						<RiMessengerLine />
						<h4>Messenger</h4>
						<h5>egatortutorials</h5>
						<a href='https://www.facebook.com/messages/t/100060699326613' target='_blank'>Send a message</a>
					</article>
					<article className='contact__option'>
						<BsTelegram />
						<h4>Telegram</h4>
						<h5>kolja09062005</h5>
						<a href='https://t.me/kolja09062005' target='_blank'>Send a message</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
				  <input type='text' name='name' placeholder='Your Full Name' required/>
				  <input type='email' name='email' placeholder='Your Email' required/>
					<textarea name='message' rows='7' placeholder='Your Message' required> </textarea>
					<button type='submit' className='btn btn-primary'>Send Message</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
