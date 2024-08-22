import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
export function EditModal({
  open,
  onCancel,
  onOpenChange,
  onConfirm,
}: {
  open: boolean;
  onCancel: () => void;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(open) => onOpenChange(open)}>
      <DialogContent>
        <DialogTitle>Are you sure you want to edit this?</DialogTitle>
        <DialogFooter className="grid w-full grid-cols-2">
          <Button variant={"outline"} onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
