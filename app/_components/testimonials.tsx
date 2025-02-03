"use client";

import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
    {
      id: 2,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
    {
      id: 3,
      name: "Manzi Jack",
      role: "Product Designer, Kigali",
      avatarUrl: "/images/blue.png",
    },
  ];

  return (
    <section className="px-4 py-16 md:py-24 bg-[#F9FAFB]">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto mb-12 ml-[113px]">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Users are in Love with Skills Challenges Program
          </h2>
          <p className="text-muted-foreground">
            See what our clients say about working with us. Their success speaks
            for our dedication and expertise.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[1200px] ml-40 h-96 "
        >
          <CarouselContent className="-ml-2 md:-ml-4 gap-36">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border border-gray-200 shadow-xl rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-blue-600 flex items-center justify-center mb-6">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        aria-label={`Play ${testimonial.name}'s testimonial`}
                      >
                        <Play className="w-8 h-8 text-white" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((dot, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === 2 ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
