import { FC } from "react";

interface IProps {
  bgImage: string;
}

const CardItem: FC<IProps> = ({ bgImage }) => {
  return (
    <div
      className="h-[318px] xs:h-[600px] w-full bg-white relative rounded-[16px] bg-cover  bg-center cursor-pointer"
      style={{
        background: `url(${bgImage})`,
      }}
    ></div>
  );
};

export default CardItem;
