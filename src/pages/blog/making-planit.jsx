import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import * as React from "react"
import BackToBlog from "@/components/back-to-blog";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

/* Images */
import planit from '@/assets/planit.jpg'
import planit1 from '@/assets/planit1.jpg'
import planit2 from '@/assets/planit2.jpg'
import planit3 from '@/assets/planit3.jpg'
import planit4 from '@/assets/planit4.jpg'

export default function MakingPlanIt() {
    
    const carouselImages = [planit, planit1, planit2, planit3, planit4];

    return (
        <ThemeProvider defaultTheme="light">
            <div className='min-h-screen flex flex-col max-w-3xl mx-auto text-lg px-8'>

            {/* Navbar */}

            <Navbar />

            <BackToBlog />

            {/* Image */}

            <div className="flex justify-center">
            <Carousel className="">
                <CarouselContent>
                    {carouselImages.map((image) => (
                        <CarouselItem className="flex justify-center">
                            <div className="p-2 max-w-fit">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-4 h-96">
                                    <img 
                                    src={image}
                                    alt={"planit"}
                                    className='rounded-sm object-cover w-full h-full'/>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            </div>

            {/* Title */}

            {/* Content */}

            {/* Footer */}
            
            <Footer />

            </div>
        </ThemeProvider>

    )
}