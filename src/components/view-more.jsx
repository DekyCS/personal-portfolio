import * as React from "react"
import { ArrowRight } from 'lucide-react';

export default function ViewMore({ link }) {
    return (
        <a className='opacity-50 flex items-center gap-2 font-light hover:opacity-90' href={link}>
            view more
            <ArrowRight />
        </a>
    );
} 