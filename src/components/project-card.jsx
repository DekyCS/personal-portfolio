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
import { Github } from 'lucide-react';

export default function ProjectCard({ project }) {
    return (
        <Card className='w-full'>
            <CardHeader>
                <AspectRatio ratio={16/9}>
                    <img 
                    src={project.image}
                    alt={project.title}
                    className='rounded-sm object-cover w-full h-full'/>
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
                <Button className='mt-4 w-22 h-8 text-xs cursor-pointer'>
                    <Github /> Source
                </Button>
            </CardContent>
        </Card>
    );
}