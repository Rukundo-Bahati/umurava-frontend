"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

export default function ChallengePage() {
  const router = useRouter();
  const { data, isLoading, isError} = useQuery({ queryKey: ["api/challenges"] })

  const challenges = [
    {
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
    },
    {
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
    },
    {
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
    },
  ];

  if (isLoading){
    // TODO: loading state
    return null;
  }

  if (isError){
    return null;
  }

  const goToChallengesPage = () => {
    router.push("/challenges");
  };

  console.log(data)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Explore Challenges & Hackathons
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Join the Skills Challenges Program to accelerate your career growth
          and become part of Africa's largest workforce of digital
          professionals.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 w-[1800px] ml-14">
        {challenges.map((challenge, index) => (
          <Card
            key={index}
            className="p-4 bg-white border border-gray-300 rounded-xl shadow-lg"
          >
            <Card className="relative overflow-hidden bg-white border border-gray-200 shadow-md rounded-lg">
              <Badge
                variant="secondary"
                className="absolute right-4 top-4 bg-[#0F973D] text-white text-xs px-2 py-1"
              >
                Open
              </Badge>

              <CardHeader className="p-4 bg-[#2B71F0] flex justify-center items-center h-48 sm:h-56">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logo1.png"
                    alt="Umurava logo"
                    width={40}
                    height={40}
                  />
                  <h2 className="text-white font-bold text-lg">Umurava</h2>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {challenge.title}
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-bold text-black">
                      Skills Needed:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {challenge.skills.map((skill, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="text-blue-600 border-blue-600 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-black">
                      Seniority Level:
                    </p>
                    <p className="text-sm">{challenge.seniority}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-black">Timeline:</p>
                    <p className="text-sm">{challenge.timeline}</p>
                  </div>
                </div>
                <hr className="mt-5 border-t-2" />
              </CardContent>

              <CardFooter className="p-4">
                <Button
                  className="w-40 rounded-lg bg-[#2B71F0] hover:bg-[#3158d0] text-white text-sm"
                  onClick={goToChallengesPage}
                >
                  View Challenge
                </Button>
              </CardFooter>
            </Card>
          </Card>
        ))}
      </div>
    </div>
  );
}
