import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import * as React from "react"
import BackToBlog from "@/components/back-to-blog"
import BlogTitle from "@/components/blog-title"
import BlogSubTitle from "@/components/blog_subtitle"
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

                <div>
                    <BlogTitle title="Key Features I Built"/>

                    <BlogSubTitle title="1. Clean, Professional Design"/>
                    <p>
                        I focused on creating a minimalistic yet professional interface that puts my work front and center. The goal was to make sure visitors could quickly 
                        understand my skills and see my projects without any distractions.
                    </p>

                    <BlogSubTitle title="2. Mobile-First Approach" />
                    <p>
                        Being a developer in 2025, I knew mobile responsiveness wasn't optional. The entire site is designed to work seamlessly across all devices, ensuring 
                        a great experience whether you're viewing it on your phone during your commute or on a desktop at work.
                    </p>
                </div>

                <div>
                    <BlogTitle title="What I Learned Along the Way"/>

                    <BlogSubTitle title="Technical Growth"/>
                    <p>
                        Building this portfolio pushed me to refine my skills in modern web development. Since it was my first time using React, I experimented with new 
                        frameworks, improved my design sense, and learned the importance of performance optimization.
                    </p>

                    <BlogSubTitle title="The Importance of Storytelling"/>
                    <p>
                        I realized that a portfolio isn't just about showing what you can build—it's about telling the story of who you are as a developer and what drives 
                        your passion for technology.
                    </p>

                    <BlogSubTitle title="User Experience Matters"/>
                    <p>
                        Every decision, from the navigation structure to the color scheme, impacts how visitors perceive your work. I learned to think like a user, not 
                        just a developer.
                    </p>
                </div>

                <div>
                    <BlogTitle title="Thanks for Reading!"/>
                    <p>
                        Thank you for taking the time to read my first blog post! I'm excited to share more of my journey with you. Whether you're a fellow developer, 
                        a potential collaborator, or just someone interested in technology, I hope you'll find value in what I share here.
                    </p>
                    <p className="mt-4">
                        Feel free to explore my portfolio, check out my projects, and don't hesitate to reach out if you'd like to connect. You can find me on LinkedIn or 
                        through the contact form on my website.
                    </p>
                    <p className="mt-4">
                        Here's to new beginnings and the journey ahead! 🚀
                    </p>
                    <p className="mt-4">
                        – Omar
                    </p>
                </div>


            </div>

            {/* Footer */}
            
            <Footer />

            </div>
        </ThemeProvider>

    )
}