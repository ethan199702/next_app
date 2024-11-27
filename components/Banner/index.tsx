"use client";

import { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "ui/carousel";

interface BannerImageProps {
  list: any[];
}

const BannerImage: FC<BannerImageProps> = ({ list }) => {
  return (
    <div className="w-full h-full">
      <Carousel>
        <CarouselContent>
          {list.map((v) => (
            <CarouselItem key={v.id}>
              <img src={v.imageUrl} alt={v.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BannerImage;
