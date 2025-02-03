"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  activePage,
  onNavigate,
}) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar activePage={activePage} onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header className="z-10" />
        <main className="flex-1 overflow-y-auto mt-16 p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
