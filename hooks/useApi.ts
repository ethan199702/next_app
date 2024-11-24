import { useAccount, useDisconnect } from "@particle-network/connectkit";
import Cookies from "js-cookie";
import { useWeb3 } from "./useWeb3";
import {
  post_auth_wallet_login,
  get_auth_wallet_nonce,
  get_app_user_me,
} from "api/user";

import useUserStore from "store/user";

export const useApi = () => {
  const { signMessage } = useWeb3();
  const { updateState } = useUserStore();
  const { disconnect } = useDisconnect();
  const { chainId } = useAccount();

  const updateMe = async () => {
    const res = await get_app_user_me();
    if (updateState) updateState({ userInfo: res.Me, chainId });
    return res.Me;
  };

  const login = async (address: string) => {
    const token = Cookies.get("Authorization");

    if (!token) {
      const nonceData = await get_auth_wallet_nonce(address);

      const signature = await signMessage(nonceData.nonce);

      const res = await post_auth_wallet_login({ address, signature });

      Cookies.set("Authorization", `Bearer ${res.token}`);

      await updateMe();
    }
  };

  return {
    login,
  };
};
