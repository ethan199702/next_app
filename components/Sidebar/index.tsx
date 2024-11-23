"use client";
import { useAccount, useWallets } from "@particle-network/connectkit";
import { useAsyncEffect } from "ahooks";
import { Button } from "ui/button";
import { useApi } from "hooks/useApi";

const SideBar = () => {
  const { login } = useApi();
  const { address } = useAccount();
  const [primaryWallet] = useWallets();
  useAsyncEffect(async () => {
    if (address && primaryWallet) login(address);
  }, [address, primaryWallet]);

  return (
    <div className="flex justify-between items-center px-[60px] h-[100px]">
      <div className="flex gap-6 cursor-pointer">
        <span>Discover</span>
        <span>Co-create</span>
        <span>Ranking</span>
        <span>Market</span>
        <span>DAO</span>
      </div>
      <div className="flex items-center">
        <Button>Connect Wallet</Button>
      </div>
    </div>
  );
};
export default SideBar;
