"use client";
import { AlignLeft } from "lucide-react";
import React from "react";
import Sidebarmenu from "./Sidebarmenu";
import { useState } from "react";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="hoverEffect cursor-pointer hover:text-green-900 md:hidden"
      >
        <AlignLeft className="font-medium translate-y-1" size={27}  />
      </button>
      <div>
        <Sidebarmenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
