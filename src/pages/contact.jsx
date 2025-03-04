import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import * as React from "react"
import { SendHorizontal } from 'lucide-react';

export default function Contact() {
    return (
        <ThemeProvider defaultTheme="light">
            <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>

            {/* Navbar */}

            <Navbar />

            <h1 className='text-5xl calistoga-regular py-8'>contact me.</h1>

            <form className="flex flex-col gap-y-4">
            <div className="flex flex-row gap-4 max-sm:flex-col">
                <Input type="name" placeholder="Name" />
                <Input type="email" placeholder="Email" />
            </div>
            <Textarea type="text" className="h-25 resize-none" placeholder="Leave feedback about the site, career opportunities or just to say hello etc." />

            <Button type="submit" className="cursor-pointer">
                Send Message <SendHorizontal />
            </Button>
            </form>

            {/* Footer */}
            
            <Footer />

            </div>
        </ThemeProvider>

    )
}