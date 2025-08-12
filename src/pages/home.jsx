import * as React from "react"
import { Button } from '@/components/ui/button'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IconButton from '@/components/icon-button'
import PlaceInfo from '@/components/place-info'
import SectionTitle from '@/components/section-title'
import ProjectCard from '@/components/project-card'
import { Card } from "@/components/ui/card"
import { FileDown, Mail, Github, Linkedin } from 'lucide-react';
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import { Separator } from "@/components/ui/separator"
import Footer from '@/components/footer'
import PostCard from "@/components/post-card"
import AwardCard from "@/components/awards-card"
import Title from "@/components/title"

/* Assets */

import cv from '@/assets/omar_cv.pdf'
import face from '@/assets/face.jpeg'

/* Data */
import { projects } from '@/data/projects'
import { jobs } from '@/data/jobs'
import { educations } from '@/data/educations'
import { awards } from '@/data/awards'
import { blogs } from '@/data/blogs'

export default function Home() {
    return (
        <ThemeProvider defaultTheme="light">
          <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>
    
            {/* Navbar */}
    
            <Navbar />
    
            {/* Heading */}
    
            <header className='flex flex-row items-center justify-between gap-32 pt-8 max-md:flex-col-reverse max-md:items-start'>
              <div className='flex flex-col gap-2'>
                <Title title="hi omar here. 👋"/>
                <p className='font-medium text-base'>19yo computer science student from Montreal 🇨🇦</p>
                <p className='pb-4 text-base'>I like to develop full stack websites, mobile applications and eat korean bbq</p>
                <div className='flex flex-row gap-6 items-center'>
                  <Button variant="outline">
                    <a href={cv} className="flex flex-row gap-2 items-center font-medium" target="_blank" rel="noopener noreferrer">
                      Resume <FileDown />
                    </a>
                  </Button>
                  
                  <IconButton Icon={Linkedin} link="https://www.linkedin.com/in/omar-lahlou-mimi/"></IconButton>
                  <IconButton Icon={Github} link="https://github.com/DekyCS"></IconButton>
                  <IconButton Icon={Mail} link="mailto:omarlahmimi@gmail.com"></IconButton>
                </div>
              </div>
              <div className='flex-shrink-0 w-44'>
                <AspectRatio ratio={1}>
                  <img 
                  src={face}
                  alt="Omar's photo"
                  className='rounded-md object-cover w-full h-full'/>
                </AspectRatio>
              </div>
            </header>
    
            {/* Work / Education */}
    
            <div className='pt-18'>
              <Tabs defaultValue="Work" className='w-full'>
                <TabsList className='w-full'>
                  <TabsTrigger className='flex-1 cursor-pointer' value="Work">Work</TabsTrigger>
                  <TabsTrigger className='flex-1 cursor-pointer' value="Education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="Work">
                  <Card className="flex flex-col gap-y-8 pt-4 pb-4 pl-6 pr-6">
                    {jobs.map((job, index) => (
                      <PlaceInfo place={job}/>
                    ))}
                  </Card>
                </TabsContent>
                <TabsContent value="Education">
                  <Card className="flex flex-col gap-y-8 pt-4 pb-4 pl-8 pr-16">
                    {educations.map((education, index) => (
                      <PlaceInfo place={education}/>
                    ))}
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
    
            {/* Featured Projects */}
    
            <div className='pt-18'>
              <SectionTitle title="featured projects" link="/projects" />
              
              <div className='flex flex-row gap-x-4 justify-between max-sm:flex-col gap-y-4'>
                {projects.slice(0, 2).map((project) => (
                  <ProjectCard project={project} />
                ))}
              </div>
              
            </div>
    
            {/* Featued Awards */}
    
            <div className='pt-18'>
              <SectionTitle title="featured awards" />

              <div className='flex flex-row flex-wrap gap-x-4 justify-between max-sm:flex-col gap-y-4'>
                {awards.map((project) => (
                  <AwardCard project={project} />
                ))}
              </div>
            </div>
    
            {/* Recent Posts */}
    
            <div className='pt-18'>
              <SectionTitle title="recent posts" link="/blog" />
    
              <Card>
                {blogs.slice(0, 2).map((post, index) => (
                    <>
                        <PostCard post={post}/>
                        {index < blogs.length - 1 && <Separator />}
                    </>
                ))}
              </Card>
            </div>
    
            {/* Footer */}
    
            <Footer />
    
          </div>
        </ThemeProvider>
      );
}