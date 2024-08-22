import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoggedDevicesStore } from "@/stores/loggedDevicesStore";

export function DomaimSkeleton({ children }: { children: React.ReactNode }) {
  const { domain } = useLoggedDevicesStore();
  return (
    <div className="relative h-full w-full">
      <div className={`relative h-full w-full ${domain === null ? "blur-sm filter" : ""}`}>
        <div className={domain === null ? "pointer-events-none" : ""}>{children}</div>
      </div>
      {domain === null && (
        <div className="absolute left-[calc(50%-288px)] top-[50%] flex flex-row items-center gap-4">
          <Input placeholder="Enter domain to search" className="min-w-[180px]" type="text" min={2} />
          <Button>Search</Button>
        </div>
      )}
    </div>
  );
}
