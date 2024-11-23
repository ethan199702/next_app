import { useAccount, useDisconnect } from "@particle-network/connectkit";
import Cookies from "js-cookie";
import { useWeb3 } from "./useWeb3";
import { post_auth_wallet_login, get_auth_wallet_nonce } from "api/user";

export const useApi = () => {
  //   const { signMessage } = useWeb3();
  //   const { disconnect } = useDisconnect();
  //   const { chainId } = useAccount();

  const login = async (address: string) => {
    const token = Cookies.get("Authorization");

    // if (!token) {
    //   const nonceData = await get_auth_wallet_nonce(address);
    //   const signature = await signMessage(nonceData.nonce);
    //   const res = await post_auth_wallet_login({ address, signature });
    // }
  };

  return {
    login,
  };
};
