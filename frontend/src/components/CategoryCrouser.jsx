import React from 'react'
import {
  Code2,
  Server,
  Database,
  Palette,
  Layers
} from 'lucide-react'

const category = [
  { name: "Frontend Developer", icon: Code2 },
  { name: "Backend Developer", icon: Server },
  { name: "Data Science", icon: Database },
  { name: "Graphic Designer", icon: Palette },
  { name: "Fullstack Developer", icon: Layers }
]

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function CategoryCrouser() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 px-4">

      <Carousel>
        <CarouselContent>

          {category.map((item, index) => {
            const Icon = item.icon

            return (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-2">
                  
                  <div className="group cursor-pointer rounded-2xl p-5 text-center 
                  bg-white shadow-md border
                  hover:shadow-2xl hover:scale-105 
                  transition-all duration-300
                  bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50
                  hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100">

                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                      text-white shadow-md 
                      group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-sm md:text-base font-semibold text-gray-700 
                    group-hover:text-purple-600 transition">
                      {item.name}
                    </h3>

                    {/* Glow line */}
                    <div className="mt-3 h-1 w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                    mx-auto rounded-full group-hover:w-10 transition-all duration-300"></div>

                  </div>

                </div>
              </CarouselItem>
            )
          })}

        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />

      </Carousel>

    </div>
  )
}

export default CategoryCrouser