import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import PostCard from "@/components/post-card";
import { ThemeProvider } from "@/components/theme-provider"
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import * as React from "react"

/* Data */
import { blogs } from '@/data/blogs'

export default function Blog() {
    return (
        <ThemeProvider defaultTheme="light">
            <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>

            {/* Navbar */}

            <Navbar />

            {/* Content */}

            <h1 className='text-5xl calistoga-regular py-8'>my blog.</h1>

            <Card>
                {blogs.map((post, index) => (
                    <>
                        <PostCard post={post}/>
                        {index < blogs.length - 1 && <Separator />}
                    </>
                ))}
            </Card>

            {/* Footer */}
            
            <Footer />

            </div>
        </ThemeProvider>

    )
}