import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import * as React from "react"
import ProjectCard from "@/components/project-card"

/* Data */

import { projects } from '@/data/projects'

export default function Projects() {
    return (
        <ThemeProvider defaultTheme="light">
            <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>

            {/* Navbar */}

            <Navbar />

            <h1 className='text-5xl calistoga-regular py-8'>my projects.</h1>

            {/* Projects */}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>

            {/* Footer */}

            <Footer />

            </div>
        </ThemeProvider>

    )
}