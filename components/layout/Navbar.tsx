"use client";
import React from "react";
// import { useDispatch } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar: React.FC = () => {
  // const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-auto bg-white border-b dark:bg-gray-900">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex justify-end">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-right p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
