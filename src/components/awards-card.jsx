import * as React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Globe } from 'lucide-react'
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"


export default function AwardCard({ project }) {
    return (
        <Card className='w-31/64 max-sm:w-full'>
            <CardHeader>
                <AspectRatio ratio={16/9}>
                    <img 
                    src={project.image}
                    alt={project.title}
                    className='rounded-sm object-cover w-full h-full'/>
                </AspectRatio>
                <CardTitle className='pt-4'>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
                {project.links.map((link) => (
                    <Badge className='py-1'>
                        <Globe className="mr-2" size={12}/>
                        <Link to={link.link} target="_blank">
                            {link.name}
                        </Link>
                    </Badge>
                ))}
            </CardContent>
        </Card>
    );
}