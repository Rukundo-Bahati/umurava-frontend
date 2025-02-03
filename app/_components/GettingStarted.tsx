import Image from "next/image";

export default function GettingStarted() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#03192E] mb-2">
          How to Get Started
        </h1>
        <div className="w-12 h-1 bg-pink-500 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#2B71F0] text-white text-sm font-medium mb-4">
              Step 1
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Sign up on Umurava Platform
            </h2>
            <p className="text-gray-600 mb-4">
              Submit your completed project for evaluation
            </p>
            <div className="relative h-[200px] w-[200px] mx-auto md:ml-40">
              <Image
                src="/images/frame1.png"
                alt="Platform sign up interface"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#2B71F0] text-white text-sm font-medium mb-4">
              Step 2
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Browse Open Challenges
            </h2>
            <p className="text-gray-600 mb-4">
              Sign up for the challenge and start working on the project.
            </p>
            <div className="relative h-[200px] w-[200px] mx-auto md:ml-40">
              <Image
                src="/images/frame2.png"
                alt="Registration interface"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-20 md:space-y-40">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#2B71F0] text-white text-sm font-medium mb-4">
              Step 3
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Register and Participate
            </h2>
            <p className="text-gray-600">
              Explore the range of challenges and hackathons and choose one that
              aligns with your interests and career goals.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#2B71F0] text-white text-sm font-medium mb-4">
              Step 4
            </div>
            <h2 className="text-xl font-semibold mb-2">Submit your work</h2>
            <p className="text-gray-600">
              Submit your completed project for evaluation.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#2B71F0] text-white text-sm font-medium mb-4">
              Step 5
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Receive Feedback and Recognition
            </h2>
            <p className="text-gray-600">
              Get feedback on your work and celebrate your achievement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
