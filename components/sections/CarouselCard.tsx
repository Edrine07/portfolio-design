import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import firstImage from '@/app/assets/images/sportscomplex.jpg'
import secondImage from '@/app/assets/images/tulaytibo.jpg'
import thirdImage from '@/app/assets/images/panbeh2.jpg'
import fourthImage from '@/app/assets/images/received_553778980226693.jpeg'
import fithImage from '@/app/assets/images/SORSU-BC-JOINS-126TH-INDEPENDENCE-DAY-4.jpg'

const photos = [
    {
      src: firstImage,
      alt: "kupal",
      description:
        "Sorsogon Sports Complex inspired by the Roman Colosseum, featuring elegant arches, modern facilities, and tiered seating for unforgettable events.",
    },
    {
      src: secondImage,
      alt: "kupal",
      description:
        "Tulay sa tibo is a mangrove area, featuring three aesthetic viewing towers that provide breathtaking 360-degree views of the vibrant mangrove forest.",
    },
    {
      src: thirdImage,
      alt: "Kupal",
      description:
        "Kuppal, my fluffy companion, brings joy to every day.",
    },
    {
      src: fourthImage,
      alt: "Kupal",
      description: "Okeyy",
    },
    {
      src: fithImage,
      alt: "Kupal",
      description: "Graduated from Sorsogon State University Bulan Campus with a Bachelor of Science in Information Technology",
    },
  ];

export default function CarouselCard() {
  return (
    <div>
         <div className="w-full max-w-7xl mx-auto py-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {photos.map((photo, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
                >
                  <Card className="border-none rounded-s bg-zinc-900">
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover rounded-sm"
                        />
                      </div>
                      <p className="mt-2 text-sm sm:text-sm text-muted-foreground line-clamp-2">
                        {photo.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:-left-12" />
            <CarouselNext className="right-2 sm:-right-12" />
          </Carousel>
        </div>
    </div>
  )
}
