import * as React from "react"
import ViewMore from "./view-more";

export default function SectionTitle({ title, link }) {
    return (
        <div className='flex justify-between'>
            <h1 className='text-3xl calistoga-regular'>{title}</h1>
            {link && <ViewMore link={link}/>}
        </div>
    );
}