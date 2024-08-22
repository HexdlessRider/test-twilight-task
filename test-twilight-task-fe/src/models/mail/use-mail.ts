import create from "zustand";
import { Mail, mails } from "./data";

// Define the state and actions for Zustand
type Config = {
  selectedMail: Mail["id"] | null;
  setSelectedMail: (id: Mail["id"]) => void;
};

// Create the Zustand store
const useMailStore = create<Config>((set) => ({
  selectedMail: mails[0].id,
  setSelectedMail: (id: Mail["id"]) => set({ selectedMail: id }),
}));

// Custom hook to use the Zustand store
export function useMail() {
  const store = useMailStore();
  return store;
}
