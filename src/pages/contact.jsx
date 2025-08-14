import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import * as React from "react"
import { SendHorizontal } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                'service_y8lhiah',
                'template_jutb3bt',
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                '_x-dIGiobI1Rm4A4C'
            );

            console.log('Email sent successfully:', result);
            toast.success("Message sent!", {
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error('Failed to send email:', error);
            toast.error("Error", {
                description: "Failed to send message. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ThemeProvider defaultTheme="light">
            <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>

            {/* Navbar */}

            <Navbar />

            <h1 className='text-5xl calistoga-regular py-8'>contact me.</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                <div className="flex flex-row gap-4 max-sm:flex-col">
                    <Input 
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <Input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <Textarea 
                    name="message"
                    className="h-25 resize-none" 
                    placeholder="Leave feedback about the site, career opportunities or just to say hello etc." 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                />

                <Button type="submit" className="cursor-pointer" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'} <SendHorizontal />
                </Button>
            </form>

            {/* Footer */}
            
            <Footer />

            </div>
        </ThemeProvider>

    )
}