import { baseRequest } from "@/lib/utils/request";

export const get_auth_wallet_nonce = (addtress: string) => {
  return baseRequest.get("/user/auth_wallet_nonce", { params: { addtress } });
};

export const post_auth_wallet_login = (data: any) => {
  return baseRequest.post("/user/auth_wallet_login", data);
};
