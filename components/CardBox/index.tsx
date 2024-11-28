import { FC } from "react";
import CardItem from "components/CardItem";

interface Iprops {
  list?: any[];
}

const CardBox: FC<Iprops> = ({ list }) => {
  console.log(list);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[24px] gap-x-[40px]">
      {list?.map((v) => (
        <CardItem key={v.id} />
      ))}
    </div>
  );
};

export default CardBox;
