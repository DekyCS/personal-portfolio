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

/* Images */

import face from '@/assets/face.jpeg'
import planit from '@/assets/planit.jpg'
import bellWinner from "@/assets/bell_winner.jpg"
import mariWinner from "@/assets/mari_winner.jpg"
import jacWinner from "@/assets/jac_winner.jpg"
import dawsWinner from "@/assets/daws_winner.jpg"
import vanierProjectWinner from "@/assets/vanierproject_winner.jpg"
import vanierHacksWinner from "@/assets/vanierhacks-winner.jpg"
import faceit from '@/assets/faceit.png'
import cv from '@/assets/omar_cv.pdf'
import caeLogo from "@/assets/cae_logo.jpg"


export default function Home() {

    const jobs = [
        {
          "imgSource": caeLogo,
          "time": "Summer 2025",
          "company": "CAE",
          "title": "Research IVR integration specialist Intern",
          "descriptions": [
            "Involves C++"
          ]
        },
        {
          "imgSource": "https://assets.grenier.qc.ca/cdn-cgi/image/q=90,format=webp,fit=pad,w=200,h=200/uploads/images/Logo-ITHQ-Marine-rgb-154839.png",
          "time": "Summer 2024",
          "company": "Institut de tourisme et d'hôtellerie du Québec",
          "title": "Research Assistant (Intern)",
          "descriptions": [
            "Developed a Python desktop application with Tkinter for project organization and building a system to automatically sort and classify documents",
            "Built web scraping solutions using BeautifulSoup and APIs to analyze pet policies across 100+ hotels, creating reports on industry standards"
          ]
        }
      ];
      
      const educations = [
        {
          "imgSource": "https://catholicmontreal.ca/wp-content/uploads/cache/images/jac-t/jac-t-564307454.png",
          "time": "August 2023 - May 2026",
          "company": "John Abbott College CEGEP",
          "title": "Computer Science Technical Program",
          "descriptions": []
        }
      ];
      
      const featuredProjects = [
        {
          "image": planit,
          "title": "PlanIt Mobile App",
          "description": "Smart group planning app that makes organizing hangouts easy by matching everyone's schedules and preferences, taking the hassle out of making plans",
          "tags": ["Flutter", "Dart", "Firebase", "Places API", "Xcode"],
          "imageLink": "https://github.com/SaidBecerra/planit",
          "buttons": [
            {
              "type": "github",
              "link": "https://github.com/SaidBecerra/planit"
            },
            {
              "type": "testflight",
              "link": "https://testflight.apple.com/join/5EPuyFGF"
            }
          ]
        },
        {
          "image": faceit,
          "title": "FaceIt",
          "description": "\"Fake\" browser extension that merges facial recognition with autofill for secure, password-free logins, protecting your accounts even if your device is stolen",
          "tags": ["Flask", "Python", "SQLite", "Face Recognition"],
          "imageLink": "https://github.com/DekyCS/geekfest",
          "buttons": [
            {
              "type": "github",
              "link": "https://github.com/DekyCS/geekfest"
            }
          ]
        }
      ];

      const featuredAwards = [
        {
          "image": dawsWinner,
          "title": "1rst Place Hackathon Winner at DawsHacks",
          "source": "https://github.com/tedawf/tradingview-telegram-alerts"
        },
        {
          "image": jacWinner,
          "title": "Security Challenge Winner at JacHacks",
          "source": "https://github.com/tedawf/tradingview-telegram-alerts"
        },
        {
          "image": mariWinner,
          "title": "1rst Place Hackathon Winner at MariHacks",
          "source": "https://github.com/tedawf/tradingview-telegram-alerts"
        },
        {
          "image": bellWinner,
          "title": "2nd Place Hackathon Winner at Bell GeekFest",
          "source": "https://github.com/tedawf/tradingview-telegram-alerts"
        },
        {
          "image": vanierHacksWinner,
          "title": "2nd Place CTF Hackathon Winner at VanierHacks CSSA",
          "source": "https://github.com/tedawf/tradingview-telegram-alerts"
        },
        {
          "image": vanierProjectWinner,
          "title": "Most Creative Project at Vanier College",
          "source": "https://github.com/tedawf/tradingview-telegram-alerts"
        }
      ];
      
      const recentPosts = [
        {
          "title": "Blog is coming soon!",
          "description": "I am still writing my blogs are the moment",
          "date": "February 1, 2024",
          "source": ""
        },
      ];

    return (
        <ThemeProvider defaultTheme="light">
          <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>
    
            {/* Navbar */}
    
            <Navbar />
    
            {/* Heading */}
    
            <header className='flex flex-row items-center justify-between gap-12 pt-8 max-md:flex-col-reverse max-md:items-start'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-5xl calistoga-regular pb-4 max-sm:text-[42px]'>hi omar here 👋</h1>
                <p className='font-light'>19-year-old computer science student from Montreal 🇨🇦</p>
                <p className='font-light pb-4'>I like to develop full stack websites, mobile applications and eat korean bbq</p>
                <div className='flex flex-row gap-8 items-center'>
                  <Button variant="outline">
                    <a href={cv} className="flex flex-row gap-2 items-center" target="_blank" rel="noopener noreferrer">
                      Resume <FileDown />
                    </a>
                  </Button>
                  
                  <IconButton Icon={Linkedin} link="https://www.linkedin.com/in/omar-lahlou-mimi-000988251/"></IconButton>
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
                    <PlaceInfo place={educations[0]}/>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
    
            {/* Featured Projects */}
    
            <div className='pt-18'>
              <SectionTitle title="featured projects" link="/projects" />
              
              <div className='flex flex-row gap-x-4 justify-between max-sm:flex-col gap-y-4'>
                {featuredProjects.map((project) => (
                  <ProjectCard project={project} />
                ))}
              </div>
              
            </div>
    
            {/* Featued Awards */}
    
            <div className='pt-18'>
              <SectionTitle title="featured awards" />

              <div className='flex flex-row flex-wrap gap-x-4 justify-between max-sm:flex-col gap-y-4'>
                {featuredAwards.map((project) => (
                  <AwardCard project={project} />
                ))}
              </div>
            </div>
    
            {/* Recent Posts */}
    
            <div className='pt-18'>
              <SectionTitle title="recent posts" link="/blog" />
    
              <Card>
                <PostCard post={recentPosts[0]} />
                {/* 
                <Separator />
                <PostCard post={recentPosts[1]} />
                */}
              </Card>
            </div>
    
            {/* Footer */}
    
            <Footer />
    
          </div>
        </ThemeProvider>
      );
}