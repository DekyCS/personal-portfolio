import * as React from "react";
import { ThemeButton } from '@/components/theme-button'

export default function Navbar() {
    return (
        <nav className='sticky top-0 bg-white/75 dark:bg-[#0a0a0a]/70 backdrop-blur-md z-50'>
            <div className='flex items-center justify-between py-6'>
            <div className='flex gap-8 max-sm:gap-4'>
                <a className="opacity-60 hover:opacity-90" href="/">home</a>
                <a className="opacity-60 hover:opacity-90" href="/projects">projects</a>
                <a className="opacity-60 hover:opacity-90" href="/blog">blog</a>
                <a className="opacity-60 hover:opacity-90" href="/contact">contact</a>
            </div>

            <ThemeButton />
            </div>
        </nav>
    );
}