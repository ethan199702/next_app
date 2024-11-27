import { baseRequest } from "@/lib/utils/request";

export const get_auth_wallet_nonce = (address: string) =>
  baseRequest.get("/auth/wallet/nonce", { params: { address } });

export const post_auth_wallet_login = (data: any) =>
  baseRequest.post("/auth/wallet/login", data);

export const get_app_user_me = () => baseRequest.get("/app/user/me");

export const noAuthBannerList = (params: any) =>
  baseRequest.get("/no-auth/banner/list", { params });
