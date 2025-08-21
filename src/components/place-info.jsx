import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { Globe } from 'lucide-react';

export default function PlaceInfo({ place }) {
    return (
        <div className="flex flex-row gap-4">
            <Avatar className="h-14 w-14 border">
                <AvatarImage 
                    src={place.imgSource} 
                    alt={place.company}
                    className="object-cover"
                />
                <AvatarFallback>{place.company[0]}</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm opacity-50">{place.time}</p>
                <p className="font-bold">{place.company}</p>
                <p className="text-base opacity-50">{place.title}</p>
                <ul className="list-disc pl-4 text-base opacity-75">
                    {place.descriptions.map((description, index) => (
                        <li className="max-w-lg text-[15px]" key={index}>{description}</li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                    {place.links.map((link) => (
                        <Badge className="mt-1">
                            <Globe className="mr-2" size={12}/>
                            <Link to={link.link} target="_blank">
                                {link.name}
                            </Link>
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
