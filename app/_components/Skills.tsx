import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SkillsChallenges() {
  const skills = [
    { name: "UI/UX Design", active: true },
    { name: "Data Science", active: false },
    { name: "Graphic Design", active: false },
    { name: "Data Analysis & Research", active: false },
    { name: "Animation", active: false },
    { name: "Videography & Photography", active: false },
    { name: "Data Science", active: false },
    { name: "AI & Machine Learning", active: false },
    { name: "Web3", active: false },
    { name: "Digital Marketing & Communication", active: false },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Skills Challenges Cover various in-demand skills
          <br />
          and Careers for the digital economy
        </h2>
        <p className="text-muted-foreground">
          Explore the projects that various talents are working on.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {skills.map((skill, index) => (
          <Button
            key={index}
            variant={skill.active ? "default" : "secondary"}
            className={`rounded-full ${
              skill.active
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {skill.name}
          </Button>
        ))}
      </div>

      <Card className=" p-8 rounded-xl bg-[#F1F1F1]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="h-8 w-8 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">
                <span className="text-[#228B22]">s</span>f.
              </span>
            </div>
            <p className="text-lg">
              The Embedded Finance Platform and Payroll Management Software
              Solutions for yout organization and Workforce
            </p>
            <Button
              variant="link"
              className="text-blue-500 hover:text-blue-600 p-0 h-auto font-semibold"
            >
              Learn more →
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/images/dashboard.png"
              alt="Dashboard preview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Card>

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
  );
}
