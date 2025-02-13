import * as React from "react"

export default function IconButton({ Icon, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon className='opacity-60 hover:opacity-90' />
        </a>
    );
}