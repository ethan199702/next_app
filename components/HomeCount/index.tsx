import { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const HomeCoune: FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default HomeCoune;
