import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-[36px] leading-[1.2] font-bold text-blue-500 ml-24">
            Accelerate Your Students and Trainees Employability and Career
            Growth through Project-based Learning Solution
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed ml-24">
            We partner with Universities, Schools, and Trainig Institutions to
            build the work experience of their students and trainees through
            project based learning challenges and hackathons.
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-md ml-24"
          >
            Partner with us
          </Button>
        </div>
        <div className="relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -z-10" />

          <Image
            src="/images/students.png"
            alt="Students on computers"
            width={500}
            height={250}
            className="rounded-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
