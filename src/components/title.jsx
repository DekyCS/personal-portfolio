import * as React from "react"

export default function Title({ title }) {
    return (
        <h1 className='text-5xl calistoga-regular max-sm:text-[42px]'>
            {title}
        </h1>
    );
}