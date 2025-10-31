import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const FavouriteIcon = () => {
  return (
    <Link
      href={"/cart"}
      className="hoverEffect hover:text-green-700 relative cursor-pointer"
    >
      <Heart />
      <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-700 flex justify-center rounded-full item-center text-white text-[.7rem] font-medium">
        0
      </span>
    </Link>
  );
};

export default FavouriteIcon;
