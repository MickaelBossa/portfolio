import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'POST') {
        // Récupère les données du formulaire de contact
        const formData = req.body as ContactFormData;
        const { name, email, subject, message } = formData;

        // Créer un transporteur de messagerie avec nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.VPS_IP,
            port: 25,
            secure: true,
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASSWORD,
            },
        });

        // Créez l'e-mail à envoyer
        const mailOptions = {
            from: process.env.MAIL,
            to: 'email_adress',
            subject,
            text: `De: ${name} (${email})\n\n${message}`,
        };

        // Envoyez l'e-mail
        try {
            await transporter.sendMail(mailOptions);
        } catch (err) {
            console.log(err);
        }

        // Envoyez une réponse à l'utilisateur pour confirmer que l'e-mail a été envoyé avec succès
        res.status(200).send('Email envoyé');
    } else {
        // Si la requête n'est pas une requête POST, renvoyez une erreur
        res.status(405).send('Méthode non autorisée');
    }
}
