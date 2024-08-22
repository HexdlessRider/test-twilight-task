import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import Link from "next/link";

interface INavItem {
  link: string;
  title: string;
  icon?: React.ReactNode;
}

export function DashboardSidebar({ navItems = [] }: { navItems: INavItem[] }) {
  return (
    <aside className="border-border sticky top-0 hidden shrink-0 transform border-r opacity-100 md:block md:w-72">
      <nav className="relative h-full w-full">
        <div className="false flex h-full w-full grow flex-col gap-2 px-2 py-2">
          {navItems?.map((item, index) => (
            <Button key={`${item.title}-${index}`} asChild variant={"outline"}>
              <Link className="flex items-center justify-between" href={item.link}>
                <span>{item.title}</span>
                {item.icon}
              </Link>
            </Button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
