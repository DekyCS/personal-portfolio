import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import * as React from "react"

export default function Contact() {
    return (
        <ThemeProvider defaultTheme="light">
            <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>

            {/* Navbar */}

            <Navbar />

            <h1 className='text-5xl calistoga-regular pt-8'>contact me.</h1>

            {/* Footer */}
            
            <Footer />

            </div>
        </ThemeProvider>

    )
}