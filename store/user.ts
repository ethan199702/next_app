import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface IUserStore {
  userInfo: Record<string, any> | null;
  lang: string;
  chainId: number | null;
  account: string | null;
  updateState?: (payload: Partial<IUserStore>) => void;
  clearState?: () => void;
}

const initState: IUserStore = {
  userInfo: null,
  lang: "zh-CN",
  chainId: null,
  account: null,
};
const useUserStore = create<IUserStore>()(
  devtools(
    persist(
      (set) => ({
        ...initState,
        updateState: (data: any) => {
          set((state: any) => {
            Object.keys(data).forEach((key) => (state[key] = data[key]));
            return { ...state };
          });
        },
        clearState: () => set({ ...initState }),
      }),
      { name: "user-store" }
    )
  )
);

export default useUserStore;
