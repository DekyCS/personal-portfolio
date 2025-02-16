import * as React from "react"
import { ArrowLeft } from 'lucide-react';

export default function BackToBlog() {
    return (
        <a className='opacity-50 flex items-center gap-2 font-light hover:opacity-90 py-8' href="/blog">
            <ArrowLeft />
            back to blog
        </a>
    );
} 