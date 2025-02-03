import Image from "next/image";

export default function StorySection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 items-center space-x-20">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B71F0] ml-36">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed ml-36">
              With 3 years of experience matching African digital talents to
              local and global job markets, we still remain with a big number of
              jobs that remain unfilled due to the lack of experienced African
              Talents.
            </p>
            <p className="leading-relaxed ml-36">
              Driven by our mission to place skilled and professional digital
              talent, we created Skills Challenges as a project-based learning
              solution for talents to gain real-world experience, solve
              problems, and builf portfolios so that they become ready for
              global job markets.
            </p>
          </div>
        </div>
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#2B71F0] p-4 w-[350px] h-[350px]">
          <Image
            src="/images/video.png"
            alt="Umurava Skills Challenges"
            fill
            className="w-[40px] h-[20px] rounded-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
