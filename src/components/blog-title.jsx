import * as React from "react"

export default function BlogTitle({ title }) {
    return (
        <h1 className='text-2xl pb-4 font-bold'>
            {title}
        </h1>
    );
}