import { baseRequest } from "@/lib/utils/request";

export const noAuthBannerList = (params: any) =>
  baseRequest.get("/no-auth/banner/list", { params });

export const noAuthNftList = (params: any) =>
  baseRequest.get("/no-auth/nft/list", { params });
