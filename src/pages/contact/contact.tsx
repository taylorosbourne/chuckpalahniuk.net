import React, { useState } from 'react';

import {
	ContactContainer,
	BannerHeader,
	Form,
	Input,
	Textarea,
	SubmitButton,
} from './contact-styles';

export default function Contact() {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		message: '',
	});

	const encode = (data: any) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	};

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e: any) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...formValues }),
		}).catch((error) => alert(error));

		setFormValues({
			name: '',
			email: '',
			message: '',
		});

		e.preventDefault();
	};

	return (
		<ContactContainer>
			<BannerHeader>Contact Us</BannerHeader>
			<Form
				name="contact"
				noValidate
				autoComplete="off"
				method="POST"
				data-netlify="true"
				onSubmit={handleSubmit}
			>
				<label htmlFor="name">Name</label>
				<Input
					type="text"
					name="name"
					placeholder="Chuck's Biggest Fan"
					onChange={handleChange}
					value={formValues.name}
				/>
				<label htmlFor="email">Email</label>
				<Input
					type="email"
					name="email"
					placeholder="you@snowflake.net"
					onChange={handleChange}
					value={formValues.email}
				/>
				<label htmlFor="message">Message</label>
				<Textarea
					name="message"
					placeholder="Where do you get off?"
					onChange={handleChange}
					value={formValues.message}
				></Textarea>
				<SubmitButton type="submit" value="Submit" />
			</Form>
		</ContactContainer>
	);
}
