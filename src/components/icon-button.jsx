import * as React from "react"

export default function IconButton({ Icon, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon className='opacity-50 hover:opacity-100' />
        </a>
    );
}