import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Delete, Edit, EllipsisVertical } from "lucide-react";

export function TablePopover({ onDeleteClick, onEditClick }: { onDeleteClick?: () => void; onEditClick?: () => void }) {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <EllipsisVertical />
        </PopoverTrigger>
        <PopoverContent className="max-w-[140px]">
          <div className="flex flex-col">
            <Button onClick={onEditClick} variant="outline" className="flex flex-row justify-between rounded-b-none">
              <span className="text-primary text-xs"> Edit </span>
              <Edit size={16} />
            </Button>
            <Button onClick={onDeleteClick} variant="outline" className="flex flex-row justify-between rounded-t-none">
              <span className="text-primary text-xs"> Delete </span>
              <Delete size={16} />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
