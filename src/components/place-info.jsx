import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
                        <li className="max-w-lg" key={index}>{description}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}