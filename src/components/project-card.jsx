import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import { Github, FlaskConical } from 'lucide-react';

export default function ProjectCard({ project }) {
    return (
        <Card className='w-full'>
            <CardHeader>
                <AspectRatio ratio={16/9}>
                    <a href={project.imageLink} target="_blank" rel="noopener noreferrer">
                        <img 
                        src={project.image}
                        alt={project.title}
                        className='rounded-sm object-cover w-full h-full'/>
                    </a>
                </AspectRatio>
                <CardTitle className='pt-4'>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                    <Badge variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <div>
                    <div className="flex flex-wrap gap-2">
                        {project.buttons.map((button) => (
                            <Button className='mt-4 h-8 text-xs cursor-pointer'>
                                {button.type === "github" ? (
                                    <a href={button.link} target="_blank" rel="noopener noreferrer" className="flex">
                                        <Github className="mr-2" />
                                        Source
                                    </a>
                                    ) : button.type === "testflight" ? (
                                        <a href={button.link} target="_blank" rel="noopener noreferrer" className="flex">
                                        <FlaskConical className="mr-2" />
                                        TestFlight
                                    </a>
                                    ) : null
                                }
                            </Button>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
