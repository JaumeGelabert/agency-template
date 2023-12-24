"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export default function HeroCarousel() {
  return (
    <Carousel
      className="mt-20 w-full"
      plugins={[
        Autoplay({
          delay: 7000
        }),
        WheelGesturesPlugin()
      ]}
      opts={{
        loop: true,
        align: "center"
      }}
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="lg:basis-1/2">
            <div className="p-2 bg-neutral-100 h-[550px] rounded-lg flex flex-col justify-center items-center mx-4 md:mx-0"></div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
