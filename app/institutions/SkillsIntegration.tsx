import Image from "next/image";

export default function SkillsIntegration() {
  const integrationMethods = [
    {
      id: 1,
      text: "As Career Development and Job Readiness Program",
    },
    {
      id: 2,
      text: "As Skills Assessments Method after a course or a team",
    },
    {
      id: 3,
      text: "As extracurricular activities to complement academic courses",
    },
    {
      id: 4,
      text: "As the portfolios of the Students",
    },
    {
      id: 5,
      text: "As part of Capstone Projects or final-year assignments",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl bg-[#F9FAFB]">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16 max-w-3xl mx-auto">
        How Skills Challenges Program can be Integrated into your Learning
        Institution
      </h1>

      <div className="grid md:grid-cols-2 gap-x-96 items-center">
        <div className="space-y-6">
          {integrationMethods.map((method) => (
            <div key={method.id} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {method.id}
              </div>
              <p className="text-gray-700 mt-1">{method.text}</p>
            </div>
          ))}
        </div>

        <div className="relative h-[600px] w-full">
          <Image
            src="/images/banner.png"
            alt="Umurava Banner"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
