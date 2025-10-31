import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "../../images";

const Homebanner = () => {
  return (
    <div className="mt-6 py-16 md:py-0 bg-pink-100 rounded-lg px-10 lg:px-24 flex items-center justify-between xl:w-2/3 mx-auto">
      <div>
        <Title className="pb-4">
          Grab Upto 50% Off on <br /> Selected Products
        </Title>
        <Link href={"/shop"} className=" bg-green-900 text-white px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-green-800 hoverEffect">
        Buy Now</Link>
      </div>
      <div>
        <Image src={banner_1} alt="banner_1" className="hidden md:inline-flex w-96"/>
      </div>
    </div>
  );
};

export default Homebanner;
