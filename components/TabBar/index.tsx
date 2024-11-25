import { FC } from "react";

interface ITabBarProps {
  title: "string";
  TabPanceList: Array<{ value: string; label: string }>;
  SelectList?: Array<{ value: string; label: string }>;
  tabChange?: (value: string) => void;
  selectChange?: (value: string) => void;
}

const TabBar: FC<ITabBarProps> = ({ title, TabPanceList, SelectList }) => {
  return <div>TabBar</div>;
};

export default TabBar;
