import * as React from "react"
import { Link } from "react-router-dom"

export default function PostCard({ post }) {
    return (
        <Link to={post.source} className="block hover:bg-gray-50 transition-colors">
            <div className='flex flex-row items-center justify-between p-6 max-sm:flex-col gap-y-2'>
                <div>
                    <h1 className='text-lg font-semibold'>{post.title}</h1>
                    <p className='text-sm opacity-60 line-clamp-2'>{post.description}</p>
                </div>
                <p className='text-sm whitespace-nowrap max-sm:self-end'>{post.date}</p>
            </div>
        </Link>
    )
}