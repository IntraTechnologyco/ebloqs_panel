import Image from "next/image";
import React from "react";
import { rowbIcon } from "../../public/images/svgsIcons";
import ProgressHorizontal from "../progressBars/ProgressHorizontal";

export default function CardDashboarLastWeek({text,icon,value,progressPercent,lastWeekPercent,up}) {
  return (
    <div className="border border-[#EAE4FC] rounded p-5 text-purple-dark shadow">
      <div className="flex justify-between">
        <div className="w-full">
          <div>
            <h2 className="font-bold text-right capitalize">{text}</h2>
            <p className="font-semibold text-right text-sm">{value}</p>
          </div>
        </div>
        <div className="bg-purple-semi-light rounded p-2 ml-2 w-16 flex items-center justify-center">
          <Image src={icon} width={39} height={39} />
        </div>
      </div>
      {/**progress bar */}
      <div className="my-3">
      <ProgressHorizontal percent={progressPercent}/>
      </div>
      <p className="flex text-xs justify-end">Last week <span className={`flex ml-2 ${up?"text-green-600":"text-red-600"} `} >{lastWeekPercent}% <span className={`${up&&"rotate-180"}`} >{rowbIcon}</span> </span></p>
    </div>
  );
}
