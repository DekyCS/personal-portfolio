import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import * as React from "react"

/* Images */

import planit from '@/assets/planit.jpg'
import faceit from '@/assets/faceit.png'
import repocats from '@/assets/repocats.jpg'
import ProjectCard from "@/components/project-card"

export default function Projects() {
    const featuredProjects = [
    {
        "image": repocats,
        "title": "Repocats",
        "description": "AI-powered tool that analyzes GitHub repositories and generates walkthroughs, tutorials, and diagrams to help developers understand codebases quickly.",
        "tags": ["NextJS", "OpenAI", "Supabase", "TypeScript"],
        "imageLink": "https://github.com/DekyCS/repocats",
        "buttons": [
        {
            "type": "github",
            "link": "https://github.com/DekyCS/repocats"
        },
        {
            "type": "website",
            "link": "https://www.repocats.com/"
        }
        ]
    },
    {
        "image": planit,
        "title": "PlanIt Mobile App",
        "description": "Smart group planning app that makes organizing hangouts easy by matching everyone's schedules and preferences, taking the hassle out of making plans.",
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
        "description": "\"Fake\" browser extension that merges facial recognition with autofill for secure, password-free logins, protecting your accounts even if your device is stolen.",
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

    return (
        <ThemeProvider defaultTheme="light">
            <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>

            {/* Navbar */}

            <Navbar />

            <h1 className='text-5xl calistoga-regular py-8'>my projects.</h1>

            {/* Projects */}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {featuredProjects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>

            {/* Footer */}

            <Footer />

            </div>
        </ThemeProvider>

    )
}