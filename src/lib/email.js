import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

export function createEmailTransporter() {
	const user = env.SMTP_USER;
	const pass = env.SMTP_PASS;

	if (!user || !pass) {
		throw new Error('SMTP_USER and SMTP_PASS must be configured to send contact emails.');
	}

	const port = Number(env.SMTP_PORT || 587);
	if (!Number.isInteger(port) || port < 1 || port > 65535) {
		throw new Error('SMTP_PORT must be a valid port number.');
	}

	return nodemailer.createTransport({
		host: env.SMTP_HOST || 'smtp.gmail.com',
		port,
		secure: port === 465,
		auth: { user, pass }
	});
}
