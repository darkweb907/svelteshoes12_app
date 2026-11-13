import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { createEmailTransporter } from '$lib/email.js';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const number = formData.get('number');
		const body = formData.get('message');

		if (
			typeof name !== 'string' ||
			typeof email !== 'string' ||
			typeof number !== 'string' ||
			typeof body !== 'string' ||
			!name.trim() ||
			!email.trim() ||
			!body.trim()
		) {
			return fail(400, { error: 'Please complete all contact form fields.' });
		}

		try {
			const transporter = createEmailTransporter();
			await transporter.sendMail({
				from: env.SMTP_FROM || env.SMTP_USER,
				to: 'barryopeyemi@gmail.com',
				bcc: 'hello@webjeda.com',
				replyTo: email,
				subject: `Contact form: ${email}`,
				text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${body}`
			});

			return { success: 'Email is sent' };
		} catch (error) {
			console.error('Contact email delivery failed:', error);
			return fail(500, { error: 'Unable to send your message. Please try again later.' });
		}
	}
};
