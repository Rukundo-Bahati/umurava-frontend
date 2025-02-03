import React from "react";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavigationBarProps {
  onGoBack: () => void;
  title: string;
  actionText: string;
  onActionClick: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  onGoBack,
  title,
  actionText,
  onActionClick,
}) => {
  const router = useRouter();

  const goToChallenges = () => {
    router.push("/talentdashboard");
  };

  return (
    <div className="flex items-center justify-between p-4">
      <MoveLeft
        className="cursor-pointer"
        onClick={goToChallenges} // Trigger onGoBack on click
      />
      <div className="flex-1 text-center">{title}</div>
      <button className="text-blue-500" onClick={onActionClick}>
        {actionText}
      </button>
    </div>
  );
};

export default NavigationBar;
