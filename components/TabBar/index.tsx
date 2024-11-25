"use client";

import { FC, useState } from "react";

interface ITabBarProps {
  title: string;
  TabPanceList: Array<{ value: string; label: string }>;
  SelectList?: Array<{ value: string; label: string }>;
  tabChange?: (value: string) => void;
  selectChange?: (value: string) => void;
}

const TabBar: FC<ITabBarProps> = ({ title, TabPanceList, SelectList }) => {
  const [tabValue, setTabValue] = useState<string>(TabPanceList[0].value);
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <p className="m-0 text-[32px] font-medium">{title}</p>
        <span className="inline-block mx-[22px] font-bold text-[22px]">|</span>
        <div className="flex  items-center">
          {TabPanceList.map((tab) => (
            <span key={tab.value} className="mx-[22px] cursor-auto">
              {tab.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabBar;
