import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-border left-0 right-0 top-0 z-50 shrink-0 select-none border-b bg-deep-white">
      <nav className="mx-auto flex min-h-8 w-full items-center justify-between px-6 py-4 md:px-8">
        <div className="flex flex-row items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>User Name</span>
        </div>
      </nav>
    </header>
  );
}
