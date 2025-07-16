import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import * as React from "react"
import BackToBlog from "@/components/back-to-blog"
import BlogTitle from "@/components/blog-title"
import Title from "@/components/title"
import { AspectRatio } from "@/components/ui/aspect-ratio"

/* Images */

import face from '@/assets/face.jpeg'

export default function HelloWorld() {
    
    return (
        <ThemeProvider defaultTheme="light">
            <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>

            {/* Navbar */}

            <Navbar />

            <BackToBlog />

            {/* Image */}

            <div className="mb-12">
                <AspectRatio ratio={16/9}>
                    <img 
                    src={face}
                    alt="Omar's photo"
                    className='rounded-md object-cover w-full h-full'/>
                </AspectRatio>
            </div>

            {/* Title */}
            <Title title="Hello World!"/>

            {/* Date */}
            <p className="text-xs text-gray-500 mb-8">July 16th, 2025</p>

            {/* Content */}
            <div className="flex flex-col gap-8">
                <p>
                    Welcome to my blog! I'm Omar Lahlou Mimi, and this is my very first blog post. It feels surreal to finally be writing here after having my portfolio 
                    website live for almost a year now. I finally decided it was time to start sharing my thoughts and experiences through this blog.
                </p>
                <div>
                    <BlogTitle title="About Me"/>
                    <p>
                        I'm a full-stack developer and computer science student at John Abbott College in Montreal. I'm passionate about building innovative mobile and 
                        web applications, with experience in Flutter, React, Python, and Firebase. When I'm not coding, you'll find me working on side projects, hitting the 
                        gym, watching K-dramas, or eating.
                    </p>
                    <p className="mt-4">
                        I'm currently in the process of launching a SaaS named Kinteli and am working at an internship at CAE as an integration specialist, which has been an 
                        incredible learning experience in the enterprise software world.
                    </p>
                </div>

                <div>
                    <BlogTitle title="My Portfolio Journey: From Idea to Live Website"/>
                    <p>
                        Creating my portfolio has been an incredible learning experience. When I was creating my portfolio, it was my first time using React! What started 
                        as a simple idea to showcase my projects has evolved into a comprehensive platform that represents who I am as a developer.
                    </p>
                </div>
            </div>

            {/* Footer */}
            
            <Footer />

            </div>
        </ThemeProvider>

    )
}