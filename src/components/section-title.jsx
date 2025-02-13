import * as React from "react"
import ViewMore from "./view-more";

export default function SectionTitle({ title, link }) {
    return (
        <div className='flex justify-between pb-8'>
            <h1 className='text-3xl calistoga-regular max-sm:text-2xl'>{title}</h1>
            {link && <ViewMore link={link}/>}
        </div>
    );
}