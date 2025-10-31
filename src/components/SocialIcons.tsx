import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassname?: string;
  tooltipClassname?: string;
}

const SocialIcons = ({ className, iconClassname, tooltipClassname }: Props) => {
  const SocialLinks = [
    {
      id: 1,
      icon: <Facebook />,
      href: "https://www.facebook.com/mahfujur.rahman.949195",
      title: "Facebook",
    },
    {
      id: 2,
      icon: <Instagram />,
      href: "https://www.instagram.com/gorib_mahfuj/",
      title: "Instagram",
    },
    {
      id: 3,
      icon: <Github />,
      href: "https://github.com/git-mahfuj",
      title: "Github",
    },
    {
      id: 4,
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/mahfujur-rahman-364233357/",
      title: "LinkedIn",
    },
  ];
  return (
    <div className="mt-8 px-4 flex flex-col  gap-3">
      <p className="text-[1.2rem] font-medium hoverEffect hover:translate-x-0.5">
        Socials
      </p>
      <div className="flex items-center gap-3">
        {SocialLinks?.map((i) => (
          <Tooltip key={i?.id}>
            <TooltipTrigger asChild className="">
              <Link
                href={i?.href}
                rel="noopener noreferrer"
                className={cn("px-3 py-3 ", iconClassname)}
              >
                {i?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-black font-semibold",
                tooltipClassname
              )}
            >
              <p>{i.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
