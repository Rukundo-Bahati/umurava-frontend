import React from "react";
import NavigationBar from "../../CommomComponents/NavigationBar";
import CreateForm from "./CreateForm";

const CreateChallenge: React.FC = () => {
  const handleGoBack = () => {
    console.log("Go Back clicked");
  };

  const handleCreateChallenge = () => {
    console.log("Create New Challenge clicked");
  };

  return (
    <div>
      <NavigationBar
        onGoBack={handleGoBack}
        title="Challenges & Hackathons"
        actionText="Create New Challenge"
        onActionClick={handleCreateChallenge}
      />
      <CreateForm/>
    </div>
  );
};

export default CreateChallenge;
