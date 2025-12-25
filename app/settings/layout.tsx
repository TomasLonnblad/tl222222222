"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();

  const getPageTitle = () => {
    switch (currentPage) {
      case "details":
        return "My Details";
      case "profile":
        return "My Profile";
      case "security":
        return "Security Settings";
      case "integrations":
        return "Integrations";
      case "billing":
        return "Billing Settings";
      default:
        return "Settings";
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">{getPageTitle()}</h1>
      {children}
    </div>
  );
}
