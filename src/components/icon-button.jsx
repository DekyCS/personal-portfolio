import * as React from "react"

export default function IconButton({ Icon, link, size = 24 }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon size={size} className='opacity-60 hover:opacity-90' />
        </a>
    );
}