"use client";

import React, { useState } from "react";
import DashboardLayout from "../CommomComponents/DashboardLayout";
import Homepage from "./Homepage/Homepage";
import Challenges from "./Challenges/Challenges";
import CreateChallenge from "./CreateChallenge/CreateChallenge";
import EditChallenge from "./EditChallenge/EditChallenge";
import AdminDetails from "./AdminDetails/AdminDetails";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const handleNavigation = (page: string) => {
    setActivePage(page);
  };

  return (
    <DashboardLayout activePage={activePage} onNavigate={handleNavigation}>
      <div className="p-8">
        <Homepage />
        <Challenges />
        <CreateChallenge />
        <EditChallenge />
        <AdminDetails />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
