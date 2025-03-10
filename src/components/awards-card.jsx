import * as React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react';

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
                <Button className='w-26 h-8 text-xs cursor-pointer'>
                    <BookOpen /> Read More
                </Button>
            </CardContent>
        </Card>
    );
}