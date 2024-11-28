"use client";
import { FC, useEffect, useState } from "react";

import { noAuthBannerList } from "@/api/nft";
import useUserStore from "store/user";
import BannerImage from "components/Banner";

enum BannerType {
  DISCOVER_PRIMARY = "DISCOVER_PRIMARY",
  DISCOVER_ADVERTISE = "DISCOVER_ADVERTISE",
}

interface BannerBoxProps {
  type: "DISCOVER_PRIMARY" | "DISCOVER_ADVERTISE";
}

const BannerBox: FC<BannerBoxProps> = ({ type }) => {
  const { lang } = useUserStore();
  const [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    if (type === BannerType.DISCOVER_PRIMARY) {
      noAuthBannerList({ type: BannerType.DISCOVER_PRIMARY, lang }).then(
        (res) => {
          setBannerList(res.list);
        }
      );
    }
  }, []);
  return (
    <>
      <BannerImage list={bannerList} />
    </>
  );
};

export default BannerBox;
