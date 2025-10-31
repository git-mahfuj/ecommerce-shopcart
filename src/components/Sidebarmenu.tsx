"use client"
import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { headerData } from "@/Constants/data";
import SocialIcons from "./SocialIcons";
import { useOutsideClick } from "@/Hooks";

interface SidebarmenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebarmenu: FC<SidebarmenuProps> = ({ isOpen, onClose }) => {
    const pathName = usePathname()
    // closing sidebarmenu

    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)
    // then we make a hook 

  return (
    <div
      className={`fixed h-screen w-full bg-black/20 shadow-md top-0 left-0 z-50 hoverEffect ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      ref={sidebarRef}
      onClick={onClose}
    >
      <div className="w-2/3 bg-black h-screen text-white p-4">
        <div className="flex justify-between items-center">
          <Logo className="text-white text-[1.7rem]" spanDesign="text-white" />
          <button onClick={onClose} className="group cursor-pointer hover:text-green-500">
            <X
              size={32}
              className="hoverEffect group-hover:transform-3d group-hover:rotate-90"
             
            />
          </button>
        </div>
        <div className="flex flex-col w-fit justify-start gap-3 mt-5 px-4">
          {headerData?.map((i) => (
            <Link
              key={i?.title}
              href={i?.href}
              className={`hover:text-green-500 hoverEffect relative group text-white font-medium text-[1.2rem] ${
                pathName === i?.href && "text-green-500"
              }`}
            >
              {i?.title}
              <span
                className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-green-500  group-hover:w-1/2 transition-all duration-300  group-hover:left-0 ${
                  pathName === i?.href && "w-1/2"
                }`}
              />
              <span
                className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-green-500  group-hover:w-1/2  transition-all duration-300 group-hover:right-0 ${
                  pathName === i?.href && "w-1/2"
                }`}
              />
            </Link>
          ))}
        </div>
        <div><SocialIcons/></div>
      </div>
    </div>
  );
};

export default Sidebarmenu;
