import React from "react";
import NavigationBar from "../../CommomComponents/NavigationBar";
import EditForm from "./EditForm";

const EditChallenge: React.FC = () => {
  const handleGoBack = () => {
    console.log("Go Back clicked");
  };

  const handleEditChallenge = () => {
    console.log("Edit New Challenge clicked");
  };

  return (
    <div>
      <NavigationBar
        onGoBack={handleGoBack}
        title="Challenges & Hackathons"
        actionText="Create New Challenge"
        onActionClick={handleEditChallenge}
      />
      <EditForm/>
    </div>
  );
};

export default EditChallenge;
