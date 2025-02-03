import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CareerSection() {
  return (
    <section className="relative overflow-hidden bg-[#2B71F0] text-white rounded-xl mx-4 sm:mx-8 lg:mx-20 mb-12">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-blue-400 opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl mx-auto gap-8 md:gap-12">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/images/footer1.png"
              alt="Student with a laptop"
              width={398}
              height={395}
              className="w-full h-auto max-w-[398px] rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Ready to Unlock Your Career Potential Today!
            </h2>
            <p className="text-blue-50 text-base sm:text-lg">
              Join a challenge or a hackathon to gain valuable work experience,
              build an impressive portfolio, and increase your chances to land
              job opportunities and accelerate your career growth.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-200"
              >
                View Challenge
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
