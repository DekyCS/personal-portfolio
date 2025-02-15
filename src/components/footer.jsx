import * as React from "react"
import { Mail, Github, Linkedin } from 'lucide-react';
import IconButton from '@/components/icon-button'


export default function Footer() {
    return (
        <footer className="pt-18 pb-32 flex justify-between items-center max-sm:flex-col-reverse gap-y-8 mt-auto">
          <p className="text-gray-400 text-xs">
              © 2025 <a className="hover:text-gray-700" href="https://omarlahloumimi.com">omarlahloumimi.com</a>
          </p>
          <div className='flex flex-row gap-8'>
            <IconButton Icon={Linkedin} size={18} link="https://www.linkedin.com/in/omar-lahlou-mimi-000988251/"></IconButton>
            <IconButton Icon={Github} size={18} link="https://github.com/DekyCS"></IconButton>
            <IconButton Icon={Mail} size={18} link="mailto:omarlahmimi@gmail.com"></IconButton>
          </div>
        </footer>
    );
}