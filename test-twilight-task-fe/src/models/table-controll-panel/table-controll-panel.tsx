import { Button } from "@/components/ui/button";

export function TableControllPangel({ buttonLabel, onAction }: { buttonLabel?: string; onAction?: () => void }) {
  return (
    <div className="flex w-full items-center justify-end gap-2 py-4">
      {buttonLabel && <Button onClick={onAction}>{buttonLabel}</Button>}
      <Button variant={"outline"}>Export CSV</Button>
    </div>
  );
}
