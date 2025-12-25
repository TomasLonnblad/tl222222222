"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  FolderClosed,
  CheckSquare,
  Settings,
  MessageSquare,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import SVGIMG from "../../public/vercel.svg";
interface NavItem {
  icon: React.ReactNode;
  href: string;
  label: string;
  isExpandable?: boolean;
  subItems?: { label: string; href: string }[];
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = React.useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      icon: <Home className="h-5 w-5" />,
      href: "/",
      label: "Home",
      isExpandable: true,
    },
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
      label: "Dashboard",
      isExpandable: true,
    },
    {
      icon: <FolderClosed className="h-5 w-5" />,
      href: "/projects",
      label: "Projects",
      isExpandable: true,
    },
    {
      icon: <CheckSquare className="h-5 w-5" />,
      href: "/tasks",
      label: "Tasks",
      isExpandable: true,
    },
    {
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
      label: "Settings",
      isExpandable: true,
      subItems: [
        { label: "My details", href: "/settings/details" },
        { label: "My profile", href: "/settings/profile" },
        { label: "Security", href: "/settings/security" },
        { label: "Integrations", href: "/settings/integrations" },
        { label: "Billing", href: "/settings/billing" },
      ],
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/messages",
      label: "Messages",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 w-16 lg:w-80 z-40">
      <div className="flex flex-row h-full">
        <div className="p-1.5 bg-gray-100 dark:bg-gray-900">
          <div className="px-3 py-4 flex flex-col h-full justify-between">
            <div className="flex flex-col gap-y-6">
              <div className="h-8 w-8">
                <div className="h-full w-full rounded-full bg-orange-500" />
              </div>
              <nav className="">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-2 py-2 rounded-lg mb-1 ${
                        pathname === item.href
                          ? "bg-gray-200 dark:bg-gray-800"
                          : "hover:bg-gray-200 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => {
                        if (item.isExpandable) {
                          setExpanded(
                            expanded === item.label ? null : item.label
                          );
                        }
                      }}
                    >
                      <div className="flex items-center">{item.icon}</div>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            <div className="mt-4 flex items-center">
              <div className="p-3 rounded-full bg-black dark:bg-gray-700">
                <Image alt="" src={SVGIMG} width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
        <div className="border-r"></div>
        <div className="lg:flex lg:flex-col lg:h-full hidden">
          <div className="flex-1 flex flex-col gap-y-4 overflow-y-auto px-4 py-5">
            <div className="flex items-center justify-between ">
              <span className="font-bold text-lg py-2">Overview</span>
            </div>
            <div className="hidden lg:block">
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-[4px] items-center px-4 py-2 justify-between ">
                <div className="flex items-center gap-x-2 w-full">
                  <SearchIcon className="w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="block items-center w-full placeholder:text-[#64748B] placeholder:text-base placeholder:font-normal bg-transparent cursor-pointer  rounded-lg  text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
              <div className="h-full flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">My account</span>
                  <span className="text-sm text-gray-500">Shared with me</span>
                </div>
              </div>
            </nav>
            <nav className="">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between px-2 py-2 rounded-lg mb-1 ${
                      pathname === item.href
                        ? "bg-gray-100 dark:bg-gray-800"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      if (item.isExpandable) {
                        setExpanded(
                          expanded === item.label ? null : item.label
                        );
                      }
                    }}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-3 text-sm hidden lg:block">
                        {item.label}
                      </span>
                    </div>
                    {item.isExpandable && (
                      <span className="text-sm hidden lg:block">
                        {expanded === item.label ? "-" : "+"}
                      </span>
                    )}
                  </Link>
                  {item.isExpandable && expanded === item.label && (
                    <div className="ml-6 border-l border-gray-200 dark:border-gray-700 hidden lg:block">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block py-2 pl-4 text-sm ${
                            pathname === subItem.href
                              ? "text-orange-500"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
