import * as React from "react"

export default function BlogSubTitle({ title }) {
    return (
        <h1 className='text-xl py-2 font-medium'>
            {title}
        </h1>
    );
}