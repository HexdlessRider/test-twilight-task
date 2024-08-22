import { ILoggedDevice } from "@/types/types";
import { create } from "zustand";

interface StoreState {
  domain: string|null;
  loggedDevices: ILoggedDevice[];
  setDomain: (newDomain: string) => void;
  setLoggedDevice: (newloggedDevices: ILoggedDevice[]) => void;
}

export const useLoggedDevicesStore = create<StoreState>((set) => ({
  domain: null,
  loggedDevices: [],
  setDomain: (newDomain: string) => set({ domain: newDomain }),
  setLoggedDevice: (newloggedDevices: ILoggedDevice[]) => set({ loggedDevices: newloggedDevices }),
}));
