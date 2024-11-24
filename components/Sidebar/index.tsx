"use client";
import { useAccount, useWallets, useModal } from "@particle-network/connectkit";
import { useAsyncEffect } from "ahooks";
import { Button } from "ui/button";
import { useApi } from "hooks/useApi";
import useUserStore from "store/user";
import { formatAddress } from "lib/utils";

const SideBar = () => {
  const { login } = useApi();
  const { userInfo } = useUserStore();
  console.log(userInfo);

  const { setOpen } = useModal();
  const { address } = useAccount();
  const [primaryWallet] = useWallets();
  useAsyncEffect(async () => {
    if (address && primaryWallet) login(address);
  }, [address, primaryWallet]);

  const handleClickWallet = () => {
    setOpen(true);
  };

  return (
    <div className="flex justify-between items-center px-[60px] h-[120px] fixed left-0 right-0 top-0 z-50   bg-black/20 ">
      <div className="flex items-center">
        <img
          src="./image/logo.png"
          alt=""
          className="inline-block w-[214px] h-[38px] cursor-pointer"
        />
        <div className="flex gap-6 cursor-pointer  ml-4">
          <span>Discover</span>
          <span>Co-create</span>
          <span>Ranking</span>
          <span>Market</span>
          <span>DAO</span>
        </div>
      </div>

      <div className="flex items-center">
        <Button onClick={handleClickWallet}>Connect Wallet</Button>
        <img
          src={userInfo?.Avatar}
          alt=""
          className="w-[50px] h-[50px] inline-block rounded-full mx-[16px]"
        />

        <span>{formatAddress(userInfo?.Address)}</span>
      </div>
    </div>
  );
};
export default SideBar;
