import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardProject({icon,title,url,textLink}) {
  return (
    <div className="border shadow p-5 rounded-lg">
      {/** icon */}
      <div className="bg-[#F6F4FD] rounded-full w-16 h-16 flex items-center justify-center">
        <Image src={icon} width={32} height={32} />
      </div>
      {/** title */}
      <h3 className="font-bold text-purple-dark text-lg mt-5">{title}</h3>
      <hr className="my-3" />
      {/** link to projects */}
      <Link href={url} >
        <div className="cursor-pointer flex justify-between rounded group">
          <span className="text-blue-semi-dark group-hover:text-blue-800 font-medium text-sm">
            {textLink}
          </span>
          <Image src="/images/rowr.svg" width={10} height={18} />
        </div>
      </Link>
    </div>
  );
}
