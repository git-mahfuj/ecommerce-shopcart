'use client'
import React from "react";
import { headerData } from "@/Constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Headerlinks = () => {
    const pathName = usePathname()
    console.log(pathName)
  return (
    <div className="hidden md:inline-flex gap-7">
      {headerData?.map((i) => (
        <Link
          key={i?.id}
          href={i?.href}
          className={`hover:text-green-500 hoverEffect relative group text-green-900 font-medium ${pathName === i?.href && "text-green-500"}`}
        >
          {i?.title}
          <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-green-500  group-hover:w-1/2 transition-all duration-300  group-hover:left-0 ${pathName === i?.href && "w-1/2"}`} />
          <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-green-500  group-hover:w-1/2  transition-all duration-300 group-hover:right-0 ${pathName === i?.href && "w-1/2"}`} />
        </Link>
      ))}
    </div>
  );
};

export default Headerlinks;
