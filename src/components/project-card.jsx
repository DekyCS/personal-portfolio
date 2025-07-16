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
import { Github, FlaskConical, Globe } from 'lucide-react';
import { Link } from "react-router-dom"

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
                            <Badge className='mt-4 py-1'>
                                {button.type === "github" ? (
                                    <>
                                        <Github className="mr-2" size={12}/>
                                        <Link to={button.link} target="_blank">
                                            GitHub
                                        </Link>
                                    </>
                                    ) : button.type === "testflight" ? (
                                    <>
                                        <FlaskConical className="mr-2" size={12}/>
                                        <Link to={button.link} target="_blank">
                                            TestFlight
                                        </Link>
                                    </>
                                    ) : button.type === "website" ? (
                                    <>
                                        <Globe className="mr-2" size={12}/>
                                        <Link to={button.link} target="_blank">
                                            Website
                                        </Link>
                                    </>
                                    ) : null
                                }
                            </Badge>
                            
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
