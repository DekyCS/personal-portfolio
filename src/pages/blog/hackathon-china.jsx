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

export default function HackathonChina() {
    
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
            <Title title="AdventureX: My First Hackathon in China"/>

            {/* Date */}
            <p className="text-xs text-gray-500 mb-8">August 12th, 2025</p>

            {/* Content */}
            <div className="flex flex-col gap-8">
                <p>
                    Sometimes the most transformative experiences come from the most unexpected places. A random Discord message about something called “AdventureX” in 
                    Hangzhou, China caught my attention, and despite my nerves about the selective application process, I decided to take a leap. Four months later, I 
                    found myself on a plane to China for what would become the most significant adventure of my computer science journey so far.
                </p>
                <div>
                    <BlogTitle title="Taking the Leap"/>
                    <p>
                        As a CS student from Montreal, I’d never traveled internationally without my family, let alone to a country where I didn’t speak the language. The 
                        thought of being one of only 70 international hackers among 800 Chinese participants was both thrilling and terrifying. This was AdventureX’s first 
                        year accepting international students, making us part of something truly pioneering.
                    </p>
                    <p className="mt-4">
                        Traveling with a friend definitely helped ease the nerves, but nothing could have prepared me for the scale and energy of what awaited us in 
                        Hangzhou.
                    </p>
                </div>

                <div>
                    <BlogTitle title="A Hardware Paradise"/>
                    <p>
                        Walking into the AdventureX venue felt like stepping into a tech enthusiast’s dream. Dozens of 3D printers hummed quietly in corners, robotic arms 
                        demonstrated precise movements, and Nothing phones lay scattered across workbenches like everyday tools. For the first time, I got my hands on an 
                        Apple Vision Pro and Meta Quest Pro, technologies I’d only read about suddenly became tangible realities.
                    </p>
                    <p className="mt-4">
                        But perhaps the most impressive sight was the robot dogs casually roaming the space, a reminder that we weren’t just coding websites here, we were 
                        in a place where the future was being built with servos and sensors as much as with syntax and algorithms.
                    </p>
                </div>

                <div>
                    <BlogTitle title="Beyond the Code: The Real Prize"/>
                    <p>
                        I’ll be honest, I didn’t come to AdventureX with the intention of building the next unicorn startup. With many challenges presented in Chinese and my 
                        focus split between hacking and exploring an entirely new country, I knew I wouldn’t be taking home any prizes. But that wasn’t the point.
                    </p>
                    <p className="mt-4">
                        The real treasure was the connections. In broken English and the occasional burst of French (surprisingly more common than I expected!), I found myself 
                        in conversations that opened my eyes to the global tech landscape. I learned how French universities are leveraging AI in biotechnology, got insights 
                        from Y Combinator founders about the startup ecosystem, and witnessed projects that challenged my assumptions about what’s possible with current technology.
                    </p>
                    <p className="mt-4">
                        Each conversation felt like a masterclass in thinking bigger and more globally about technology’s role in solving real problems.
                    </p>
                </div>

                <div>
                    <BlogTitle title="Exploring China: A Sensory Overload"/>
                    <p>
                        My strategy was unconventional but unforgettable: every night after the hackathon, I’d take the incredibly efficient and affordable train from Hangzhou to Shanghai. 
                        The contrast was striking, from the innovation hub of the hackathon to the neon-lit streets of Shanghai, where every corner offered a new culinary adventure.
                    </p>
                    <p className="mt-4">
                        The journey didn’t stop there. Chongqing’s sweltering heat and mouth-numbing spicy food created an almost cyberpunk atmosphere as I gazed at the city’s stunning night 
                        skyline. The ancient beauty of Zhangjiajie’s Tianmen Mountains provided a peaceful counterpoint to the urban intensity, while Furong Ancient Town’s traditional architecture 
                        and cascading waterfall felt like stepping into a different era entirely.
                    </p>
                </div>

                <div>
                    <BlogTitle title="The WeChat Revelation"/>
                    <p>
                        Perhaps the most eye-opening discovery wasn’t hardware or code – it was WeChat. This single app seamlessly integrated ride-hailing (called Didi), food delivery, payments, 
                        social networking, and countless other services. As someone from Canada, where we juggle multiple apps for basic daily tasks, I was amazed by this unified ecosystem.
                    </p>
                    <p className="mt-4">
                        The people were incredibly welcoming despite the language barrier, often going out of their way to help two obviously lost Canadian students navigate their digital-first 
                        society. This experience sparked what might become my next big project idea: bringing that level of integration and convenience to the Canadian market.
                    </p>
                </div>

                <div>
                    <BlogTitle title="Lessons Beyond the Classroom"/>
                    <p>
                        AdventureX taught me that the most valuable learning often happens outside your comfort zone. While I didn’t ship a polished product or win any competitions, I gained 
                        something arguably more important: a global perspective on technology and innovation.
                    </p>
                    <p className="mt-4">
                        I learned that curiosity and genuine interest can bridge almost any communication gap, that the tech community is more welcoming and interconnected than I’d imagined, 
                        and that sometimes the best strategy is to prioritize relationships over immediate results.
                    </p>
                    <p className="mt-4">
                        Most importantly, I discovered that being one of only 70 international students in a sea of 800 wasn’t intimidating, it was an opportunity to represent my background while 
                        learning from entirely different approaches to problem-solving and innovation.
                    </p>
                </div>

                <div>
                    <BlogTitle title="Looking Forward"/>
                    <p>
                        Returning to Montreal, I carry with me not just memories of incredible food and stunning landscapes, but a expanded vision of what’s possible in technology. The conversations, 
                        connections, and experiences from those five days continue to influence my approach to computer science and my career aspirations.
                    </p>
                    <p className="mt-4">
                        AdventureX wasn’t just my first international hackathon, it was a reminder that the best opportunities often come disguised as random Discord messages, and that sometimes the 
                        most valuable thing you can do is show up with an open mind and genuine curiosity about the world around you.
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