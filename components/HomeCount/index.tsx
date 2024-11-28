import { FC, ReactNode, useEffect, useState } from "react";

interface IProps {
  children?: (data: any[]) => ReactNode;
  getList: (params: any) => Promise<any>;
  params: Record<string, any>;
}

const HomeCount: FC<IProps> = ({ children, getList, params }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList(params).then((res) => {
      setList(res?.list || []);
    });
  }, []);
  return <>{children && children(list)}</>;
};

export default HomeCount;
