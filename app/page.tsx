"use client";

import { useState } from "react";

import TabBar from "components/TabBar";
import BannerBox from "components/BannerBox";
import HomeCount from "components/HomeCount";
import CardBox from "components/CardBox";

import { noAuthNftList } from "api/nft";

const PageHome = () => {
  const [nftParams] = useState({
    page: 0,
    size: 8,
    orderBy: "id desc",
    status: -1,
  });
  return (
    <div className="w-full h-full">
      <div className="w-full h-[902px] relative">
        <BannerBox type="DISCOVER_PRIMARY"></BannerBox>
      </div>

      <div className="px-[240px] mt-[55px]">
        <TabBar
          title="Creations"
          TabPanceList={[
            {
              label: "Trends",
              value: "trends",
            },
            {
              label: "Popular",
              value: "popular",
            },
          ]}
          SelectList={[
            {
              value: "all",
              label: "all Categories",
            },
            {
              value: "IMAGE",
              label: "image",
            },
            {
              value: "MUSIC",
              label: "music",
            },
            {
              value: "VIDEO",
              label: "video",
            },
          ]}
        />
        <HomeCount getList={noAuthNftList} params={nftParams}>
          {(data) => <CardBox list={data}></CardBox>}
        </HomeCount>
      </div>
    </div>
  );
};

export default PageHome;
