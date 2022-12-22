import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Envoyer les données du formulaire
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });

            alert('Votre message a été envoyé avec succès !');
            console.log(response);
        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue lors de l'envoi du message");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={formData.name}
                        onChange={handleChange}
                        className="inputStyle"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="inputStyle"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Objet"
                        value={formData.subject}
                        onChange={handleChange}
                        className="inputStyle"
                        required
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="inputStyle"
                        rows={6}
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="socialNetworkBtn rounded-none text-white"
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}
