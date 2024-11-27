import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type ICreations = {
  activeTabPance: "trends" | "popular";
  activeSelect: "all" | "image" | "music" | "video";
};
interface IHomeStore {
  creations: ICreations;
  updateCreation?: (payload: Partial<ICreations>) => void;
}

const initState: IHomeStore = {
  creations: {
    activeTabPance: "trends",
    activeSelect: "all",
  },
};

const useHomePageStore = create<IHomeStore>()(
  devtools(
    persist(
      (set) => {
        return {
          ...initState,
          updateCreation(payload) {
            set((state) => {
              return {
                ...state,
                ...payload,
              };
            });
          },
        };
      },
      {
        name: "home-store",
      }
    )
  )
);

export default useHomePageStore;
