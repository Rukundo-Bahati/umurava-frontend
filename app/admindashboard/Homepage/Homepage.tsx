"use client"
import React from "react";
import ChallengeStats from "./ChallengeStas";
import RecentChallenges from "../../CommomComponents/ChallengeCards";

const Homepage = () => {
    return(
        <div>
       <ChallengeStats
       
       totalChallenge={29405}
       totalParticipants={29405}
       completedChallenges={5837}
       openChallenges={5837}
       ongoingChallenges={5837}
       percentageChange={15}
     />
       <RecentChallenges/>
        </div>
    )
}
export default Homepage;