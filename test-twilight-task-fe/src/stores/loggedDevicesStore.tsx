import { IDevice, ILoggedDevice } from "@/types/types";
import { create } from "zustand";
import axios from "axios";
interface StoreState {
  domain: string | null;
  loggedDevices: ILoggedDevice[];
  setDomain: (newDomain: string) => void;
  setLoggedDevice: (newloggedDevices: ILoggedDevice[]) => void;
  fetchLoggedDevices: (val?: string) => void;
  aggregateDataForOs: () => { name: string; value: number }[];
  aggregateDataForMalWare: () => { name: string; value: number }[];
  aggregateDataForDateOfInfection: () => { name: string; value: number }[];
  aggregateDataForStealer: () => { name: string; value: number }[];
}

export const useLoggedDevicesStore = create<StoreState>((set, get) => ({
  domain: null,
  loggedDevices: [],
  setDomain: (newDomain: string) => set({ domain: newDomain }),
  setLoggedDevice: (newloggedDevices: ILoggedDevice[]) => {
    set({ loggedDevices: newloggedDevices });
  },
  fetchLoggedDevices: async (val = "15") => {
    const { domain } = get();
    if (!domain) {
      console.error("Domain is not set");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3001/domain-info`, {
        params: { domain, size: val },
      });
      set({ loggedDevices: response.data.data }); // Update the store with the fetched data
    } catch (error) {
      console.error("Failed to fetch logged devices", error);
    }
  },
  aggregateDataForMalWare: () => {
    const countMap: { [key: string]: number } = {};
    const devices = get().loggedDevices.map((device) => ({
      ...device.computer_information,
      malware_path: device.computer_information.malware_path.split("\\").pop() || "",
    }));

    devices.forEach((device) => {
      if (device.malware_path) {
        countMap[device.malware_path] = (countMap[device.malware_path] || 0) + 1;
      }
    });

    return Object.keys(countMap).map((key) => ({
      name: key,
      value: countMap[key],
    }));
  },
  aggregateDataForOs: () => {
    const countMap: { [key: string]: number } = {};
    const devices = get().loggedDevices.map((device) => device.computer_information);

    devices.forEach((device) => {
      if (device.os) {
        countMap[device.os] = (countMap[device.os] || 0) + 1;
      }
    });

    return Object.keys(countMap).map((key) => ({
      name: key,
      value: countMap[key],
    }));
  },
  aggregateDataForDateOfInfection: () => {
    const dateMap: Record<string, number> = {};
    const devices = get().loggedDevices.map((device) => device.computer_information);
    devices.forEach((device) => {
      const date = device.infection_date.split("T")[0];
      if (!dateMap[date]) {
        dateMap[date] = 0;
      }
      dateMap[date] += 1;
    });

    return Object.keys(dateMap).map((date) => ({
      name: date,
      value: dateMap[date],
    }));
  },
  aggregateDataForStealer: () => {
    const countMap: Record<string, number> = {};
    const devices = get().loggedDevices;
    devices.forEach((device) => {
      if (device.stealer_type) {
        countMap[device.stealer_type] = (countMap[device.stealer_type] || 0) + 1;
      }
    });

    return Object.keys(countMap).map((date) => ({
      name: date,
      value: countMap[date],
    }));
  },
}));
