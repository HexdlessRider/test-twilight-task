import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoggedDevicesStore } from "@/stores/loggedDevicesStore";
import { useState } from "react";

export function DomaimSkeleton({ children }: { children: React.ReactNode }) {
  const { domain, setDomain, fetchLoggedDevices } = useLoggedDevicesStore();
  const [inputValue, setInputValue] = useState("");
  const [countValue, setCountValue] = useState("");
  return (
    <div className="relative h-full w-full">
      <div className={`relative h-full w-full ${domain === null ? "blur-sm filter" : ""}`}>
        <div className={domain === null ? "pointer-events-none" : ""}>{children}</div>
      </div>
      {domain === null && (
        <div className="absolute left-[30%] top-[50%] flex flex-row items-center gap-4">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter domain to search"
            className="min-w-[260px]"
            type="text"
            min={2}
          />
          <Input
            value={countValue}
            onChange={(e) => setCountValue(e.target.value)}
            placeholder="Enter the value to get"
            className="min-w-[260px]"
            type="number"
            min={2}
            max={32000}
          />
          <Button
            onClick={() => {
              setDomain(inputValue);
              fetchLoggedDevices(countValue);
            }}>
            Search
          </Button>
        </div>
      )}
    </div>
  );
}
